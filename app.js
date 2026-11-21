(function () {
  "use strict";

  const CHAPTERS = window.PRM393_CHAPTERS || [];
  const ALL_QUESTIONS = window.PRM393_QUESTIONS || [];
  const STORAGE_KEY = "prm393_studio_state_v1";
  const LETTERS = ["A", "B", "C", "D"];

  // Persistent user state
  let userStore = loadStore();

  // Setup state
  let selectedChapters = new Set(CHAPTERS.map((c) => c.id));
  let poolFilter = "all";
  let requestedCount = 25;
  let quizMode = "practice"; // "practice" | "exam"

  // Active quiz session state
  let session = null;
  let timerInterval = null;

  // Results & mistakes view filter state
  let reviewFilter = "all";
  let mistakeTab = "wrong";

  // Modal callback
  let pendingModalAction = null;

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          theme: parsed.theme || "light",
          mastered: Array.isArray(parsed.mastered) ? parsed.mastered : [],
          wrong: Array.isArray(parsed.wrong) ? parsed.wrong : [],
          flagged: Array.isArray(parsed.flagged) ? parsed.flagged : [],
          attempts: Number(parsed.attempts) || 0,
          totalScoreSum: Number(parsed.totalScoreSum) || 0
        };
      }
    } catch (_) {}
    return {
      theme: "light",
      mastered: [],
      wrong: [],
      flagged: [],
      attempts: 0,
      totalScoreSum: 0
    };
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userStore));
    } catch (_) {}
    updateGlobalHeaderStats();
  }

  // Safe HTML escaping & lightweight formatting
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatInline(text) {
    const escaped = escapeHtml(text);
    return escaped
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  }

  function highlightDart(code) {
    const tokenRegex =
      /(\/\/[^\n]*|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|@\w+|\b(?:void|final|const|var|late|dynamic|class|abstract|extends|implements|with|mixin|on|factory|super|this|return|if|else|for|in|switch|case|default|break|try|catch|finally|throw|rethrow|async|await|yield|new|required|import|as|is|null|true|false)\b|\b(?:String|int|double|bool|List|Set|Map|Iterable|Future|Stream|Widget|BuildContext|State|StatelessWidget|StatefulWidget|MaterialApp|Scaffold|Navigator|FormState|GlobalKey|TextEditingController|FocusNode|BoxConstraints|Duration|DateTime|TimeOfDay|Uri|Post|Task|Student|Animal|Duck|Shape|Box|Movie|Address|User|BookingDraft|AppState|PostRepository|HttpPostRepository|CachingPostRepository|Database)\b|\b\d+(?:\.\d+)?\b)/g;

    let out = "";
    let lastIndex = 0;
    let match;
    while ((match = tokenRegex.exec(code)) !== null) {
      if (match.index > lastIndex) {
        out += escapeHtml(code.slice(lastIndex, match.index));
      }
      const m = match[0];
      const safe = escapeHtml(m);
      let cls = "tok-kw";
      if (m.startsWith("//")) cls = "tok-com";
      else if (m.startsWith("'") || m.startsWith('"')) cls = "tok-str";
      else if (m.startsWith("@")) cls = "tok-ann";
      else if (/^\d/.test(m)) cls = "tok-num";
      else if (/^[A-Z]/.test(m)) cls = "tok-type";
      out += '<span class="' + cls + '">' + safe + "</span>";
      lastIndex = tokenRegex.lastIndex;
    }
    if (lastIndex < code.length) {
      out += escapeHtml(code.slice(lastIndex));
    }
    return out;
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  }

  // DOM helpers
  const $ = (id) => document.getElementById(id);

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $("themeIconSun").classList.toggle("hidden", theme === "dark");
    $("themeIconMoon").classList.toggle("hidden", theme !== "dark");
  }

  function switchView(viewName) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    const targetMap = {
      setup: "viewSetup",
      quiz: "viewQuiz",
      results: "viewResults",
      chapters: "viewChapters",
      mistakes: "viewMistakes"
    };
    const el = $(targetMap[viewName]);
    if (el) el.classList.add("active");

    document.querySelectorAll(".nav-tab").forEach((tab) => {
      const match =
        tab.dataset.view === viewName ||
        (tab.dataset.view === "setup" && (viewName === "quiz" || viewName === "results"));
      tab.classList.toggle("active", match);
    });

    if (viewName === "setup") {
      renderChapterGrid();
      updatePoolCountsAndLimits();
    } else if (viewName === "chapters") {
      renderCheatsheet($("chapterSearchInput").value);
    } else if (viewName === "mistakes") {
      renderMistakesView();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateGlobalHeaderStats() {
    const masteredCount = userStore.mastered.length;
    $("masteryText").textContent = `${masteredCount} / ${ALL_QUESTIONS.length} đã nắm`;
    $("statTotalBank").textContent = ALL_QUESTIONS.length;
    $("statAttempts").textContent = userStore.attempts;
    $("statAvgScore").textContent =
      userStore.attempts > 0
        ? (userStore.totalScoreSum / userStore.attempts).toFixed(1)
        : "—";

    const mistakesTotal = new Set([...userStore.wrong, ...userStore.flagged]).size;
    $("mistakesBadge").textContent = mistakesTotal;
  }

  // POOL FILTERING
  function getFilteredPool(overrideFilter) {
    const filter = overrideFilter || poolFilter;
    const masteredSet = new Set(userStore.mastered);
    const wrongSet = new Set(userStore.wrong);

    return ALL_QUESTIONS.filter((q) => {
      if (!selectedChapters.has(q.chapter)) return false;
      if (filter === "unmastered") return !masteredSet.has(q.id);
      if (filter === "trap") return q.tag === "Exam Trap" || q.tag === "FPT Exam Favorite";
      if (filter === "code") return Boolean(q.code);
      if (filter === "wrong") return wrongSet.has(q.id);
      return true;
    });
  }

  // RENDER SETUP VIEW
  function renderChapterGrid() {
    const grid = $("chapterGrid");
    const masteredSet = new Set(userStore.mastered);
    grid.innerHTML = CHAPTERS.map((ch) => {
      const chQs = ALL_QUESTIONS.filter((q) => q.chapter === ch.id);
      const chMastered = chQs.filter((q) => masteredSet.has(q.id)).length;
      const pct = chQs.length ? Math.round((chMastered / chQs.length) * 100) : 0;
      const isSel = selectedChapters.has(ch.id);
      return `
        <button class="ch-card ${isSel ? "selected" : ""}" data-ch="${ch.id}" type="button">
          <div>
            <div class="ch-card-top">
              <span class="ch-num">Chương ${ch.id}</span>
              <span class="ch-check" aria-hidden="true">✓</span>
            </div>
            <div class="ch-name">${escapeHtml(ch.title)}</div>
          </div>
          <div class="ch-meta">${chQs.length} câu • Đã nắm ${chMastered}/${chQs.length}</div>
          <div class="ch-bar"><div class="ch-bar-fill" style="width:${pct}%"></div></div>
        </button>
      `;
    }).join("");

    grid.querySelectorAll(".ch-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chId = Number(btn.dataset.ch);
        if (selectedChapters.has(chId)) {
          selectedChapters.delete(chId);
        } else {
          selectedChapters.add(chId);
        }
        renderChapterGrid();
        updatePoolCountsAndLimits();
      });
    });
  }

  function updatePoolCountsAndLimits() {
    ["all", "unmastered", "trap", "code", "wrong"].forEach((f) => {
      const span = document.querySelector(`[data-count="${f}"]`);
      if (span) span.textContent = getFilteredPool(f).length;
    });

    const pool = getFilteredPool();
    const maxAvail = pool.length;
    $("availablePoolCount").textContent = maxAvail;

    const slider = $("questionCountSlider");
    const numInput = $("questionCountInput");
    const warning = $("poolWarning");
    const startBtn = $("startQuizBtn");

    if (maxAvail === 0) {
      slider.min = 0;
      slider.max = 0;
      slider.value = 0;
      numInput.value = 0;
      numInput.disabled = true;
      slider.disabled = true;
      warning.classList.remove("hidden");
      startBtn.disabled = true;
      startBtn.textContent = "Chưa có câu hỏi phù hợp";
      return;
    }

    numInput.disabled = false;
    slider.disabled = false;
    warning.classList.add("hidden");
    startBtn.disabled = false;

    slider.min = 1;
    slider.max = maxAvail;
    numInput.min = 1;
    numInput.max = maxAvail;

    if (requestedCount > maxAvail) requestedCount = maxAvail;
    if (requestedCount < 1) requestedCount = Math.min(25, maxAvail);

    slider.value = requestedCount;
    numInput.value = requestedCount;
    syncPresetHighlight(maxAvail);

    const modeLabel = quizMode === "exam" ? "Thi thử" : "Luyện tập";
    startBtn.textContent = `Bắt đầu ${modeLabel} (${requestedCount} câu)`;
  }

  function syncPresetHighlight(maxAvail) {
    document.querySelectorAll("#countPresets .preset-btn").forEach((btn) => {
      const val = btn.dataset.count;
      const isMatch =
        (val === "max" && requestedCount === maxAvail) ||
        (val !== "max" && Number(val) === requestedCount);
      btn.classList.toggle("active", isMatch);
      if (val !== "max") {
        btn.disabled = Number(val) > maxAvail;
      }
    });
  }

  // START QUIZ SESSION
  function startQuizFromPool(poolList, customCount, customMode) {
    if (!poolList.length) return;
    stopTimer();

    const doShuffleQ = $("shuffleQuestionsToggle").checked;
    const doShuffleOpt = $("shuffleOptionsToggle").checked;
    const mode = customMode || quizMode;
    const count = Math.min(customCount || requestedCount, poolList.length);

    const picked = (doShuffleQ ? shuffleArray(poolList) : poolList.slice()).slice(0, count);

    // Prepare runtime question instances with optional option shuffling
    const items = picked.map((q) => {
      const indexedOpts = q.options.map((text, origIdx) => ({ text, origIdx }));
      const finalOpts = doShuffleOpt ? shuffleArray(indexedOpts) : indexedOpts;
      const correctIdx = finalOpts.findIndex((o) => o.origIdx === q.answer);
      return {
        raw: q,
        options: finalOpts.map((o) => o.text),
        correctIdx,
        chosenIdx: null,
        flagged: userStore.flagged.includes(q.id)
      };
    });

    // Compute timer
    let countdownSec = 0;
    if (mode === "exam") {
      const sel = $("timerSelect").value;
      if (sel === "auto") countdownSec = Math.max(60, Math.round(count * 72)); // 1.2 min/q
      else if (sel === "30") countdownSec = 30 * 60;
      else if (sel === "60") countdownSec = 60 * 60;
      else countdownSec = 0;
    }

    session = {
      mode,
      items,
      index: 0,
      startedAt: Date.now(),
      countdownSec,
      remainingSec: countdownSec,
      elapsedSec: 0,
      submitted: false
    };

    $("activeModePill").textContent = mode === "exam" ? "Exam SEB" : "Practice";
    $("timerModeLabel").textContent =
      mode === "exam" && countdownSec > 0 ? "Thời gian còn lại" : "Thời gian đã làm";
    $("submitQuizBtn").textContent =
      mode === "exam" ? "Nộp bài & Chấm điểm" : "Kết thúc & Xem tổng kết";

    startTimer();
    renderQuizWorkspace();
    switchView("quiz");
  }

  function startTimer() {
    stopTimer();
    updateTimerUI();
    timerInterval = setInterval(() => {
      if (!session || session.submitted) return;
      session.elapsedSec++;
      if (session.mode === "exam" && session.countdownSec > 0) {
        session.remainingSec = Math.max(0, session.countdownSec - session.elapsedSec);
        if (session.remainingSec === 0) {
          finishSession();
          return;
        }
      }
      updateTimerUI();
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerUI() {
    if (!session) return;
    const disp = $("timerDisplay");
    if (session.mode === "exam" && session.countdownSec > 0) {
      disp.textContent = formatTime(session.remainingSec);
      disp.classList.toggle("urgent", session.remainingSec <= 300);
    } else {
      disp.textContent = formatTime(session.elapsedSec);
      disp.classList.remove("urgent");
    }
  }

  function renderQuizWorkspace() {
    if (!session) return;
    const item = session.items[session.index];
    const q = item.raw;
    const total = session.items.length;

    $("qCounter").textContent = `Câu ${session.index + 1} / ${total}`;
    const chObj = CHAPTERS.find((c) => c.id === q.chapter);
    $("qChapterTag").textContent = chObj ? chObj.shortTitle : `Ch.${q.chapter}`;
    $("qTopicTag").textContent = q.topic;

    const spTag = $("qSpecialTag");
    if (q.tag === "Exam Trap" || q.tag === "FPT Exam Favorite" || q.tag === "Code Output") {
      spTag.textContent = q.tag;
      spTag.classList.remove("hidden");
    } else {
      spTag.classList.add("hidden");
    }

    // Flag button
    const flagBtn = $("flagBtn");
    flagBtn.classList.toggle("flagged", item.flagged);
    $("flagBtnText").textContent = item.flagged ? "Đã cắm cờ" : "Cắm cờ";

    // Stem + Code
    $("questionStem").innerHTML = formatInline(q.question);
    const codeWrap = $("questionCodeWrap");
    if (q.code) {
      $("questionCode").innerHTML = highlightDart(q.code);
      codeWrap.classList.remove("hidden");
    } else {
      codeWrap.classList.add("hidden");
    }

    // Options
    const isPracticeRevealed = session.mode === "practice" && item.chosenIdx !== null;
    const optionsEl = $("optionsList");
    optionsEl.innerHTML = item.options
      .map((optText, i) => {
        let cls = "option-btn";
        if (isPracticeRevealed) {
          if (i === item.correctIdx) cls += " correct";
          else if (i === item.chosenIdx) cls += " wrong";
        } else if (i === item.chosenIdx) {
          cls += " selected";
        }
        return `
          <button class="${cls}" data-opt="${i}" type="button" ${isPracticeRevealed ? "disabled" : ""}>
            <span class="option-key">${LETTERS[i]}</span>
            <span class="option-text">${formatInline(optText)}</span>
          </button>
        `;
      })
      .join("");

    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => selectOption(Number(btn.dataset.opt)));
    });

    // Explanation panel (Practice mode only)
    const expBox = $("explanationBox");
    if (isPracticeRevealed) {
      const isOk = item.chosenIdx === item.correctIdx;
      expBox.className = "explanation-box " + (isOk ? "is-correct" : "is-wrong");
      $("explanationHead").textContent = isOk
        ? `Chính xác! Đáp án đúng là ${LETTERS[item.correctIdx]}.`
        : `Chưa chính xác — Đáp án đúng là ${LETTERS[item.correctIdx]}.`;
      $("explanationText").innerHTML = formatInline(q.explanation);
    } else {
      expBox.className = "explanation-box hidden";
    }

    // Prev / Next buttons
    $("prevQBtn").disabled = session.index === 0;
    const isLast = session.index === total - 1;
    $("nextQBtn").textContent = isLast ? "Xem kết quả" : "Câu tiếp theo";

    renderQuizMap();
  }

  function renderQuizMap() {
    if (!session) return;
    const answered = session.items.filter((it) => it.chosenIdx !== null).length;
    const flagged = session.items.filter((it) => it.flagged).length;
    const total = session.items.length;

    $("answeredProgressText").textContent = `${answered} / ${total}`;
    $("answeredProgressFill").style.width = `${Math.round((answered / total) * 100)}%`;
    $("flaggedCountLabel").textContent = `${flagged} cắm cờ`;

    const grid = $("qmapGrid");
    grid.innerHTML = session.items
      .map((it, idx) => {
        let cls = "qmap-item";
        if (idx === session.index) cls += " current";
        if (it.flagged) cls += " flagged";
        if (it.chosenIdx !== null) {
          if (session.mode === "practice") {
            cls += it.chosenIdx === it.correctIdx ? " ok" : " bad";
          } else {
            cls += " answered";
          }
        }
        return `<button class="${cls}" data-qidx="${idx}" type="button">${idx + 1}</button>`;
      })
      .join("");

    grid.querySelectorAll(".qmap-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        session.index = Number(btn.dataset.qidx);
        renderQuizWorkspace();
      });
    });
  }

  function selectOption(optIndex) {
    if (!session || session.submitted) return;
    const item = session.items[session.index];
    if (session.mode === "practice" && item.chosenIdx !== null) return;

    item.chosenIdx = optIndex;
    if (session.mode === "practice") {
      recordAnswerHistory(item.raw.id, optIndex === item.correctIdx);
    }
    renderQuizWorkspace();
  }

  function toggleFlagCurrent() {
    if (!session) return;
    const item = session.items[session.index];
    item.flagged = !item.flagged;
    const qId = item.raw.id;
    const set = new Set(userStore.flagged);
    if (item.flagged) set.add(qId);
    else set.delete(qId);
    userStore.flagged = Array.from(set);
    saveStore();
    renderQuizWorkspace();
  }

  function recordAnswerHistory(qId, isCorrect) {
    const mastered = new Set(userStore.mastered);
    const wrong = new Set(userStore.wrong);
    if (isCorrect) {
      mastered.add(qId);
      wrong.delete(qId);
    } else {
      wrong.add(qId);
    }
    userStore.mastered = Array.from(mastered);
    userStore.wrong = Array.from(wrong);
    saveStore();
  }

  function confirmSubmitQuiz() {
    if (!session) return;
    const unanswered = session.items.filter((it) => it.chosenIdx === null).length;
    if (unanswered > 0) {
      openModal(
        "Nộp bài ngay?",
        `Bạn còn ${unanswered} câu chưa trả lời. Các câu bỏ trống sẽ tính là sai. Bạn vẫn muốn nộp bài chứ?`,
        "Nộp bài",
        finishSession
      );
    } else {
      finishSession();
    }
  }

  function finishSession() {
    if (!session || session.submitted) return;
    session.submitted = true;
    stopTimer();

    // Record all exam answers to persistent history
    if (session.mode === "exam") {
      session.items.forEach((it) => {
        if (it.chosenIdx !== null) {
          recordAnswerHistory(it.raw.id, it.chosenIdx === it.correctIdx);
        } else {
          recordAnswerHistory(it.raw.id, false);
        }
      });
    }

    const total = session.items.length;
    const correct = session.items.filter((it) => it.chosenIdx === it.correctIdx).length;
    const scoreTen = (correct / total) * 10;

    userStore.attempts += 1;
    userStore.totalScoreSum += scoreTen;
    saveStore();

    renderResultsView();
    switchView("results");
  }

  // RESULTS VIEW
  function renderResultsView() {
    if (!session) return;
    const total = session.items.length;
    const correct = session.items.filter((it) => it.chosenIdx === it.correctIdx).length;
    const wrongCount = total - correct;
    const pct = Math.round((correct / total) * 100);
    const scoreTen = ((correct / total) * 10).toFixed(1);
    const passed = Number(scoreTen) >= 5.0;

    $("resScoreTen").textContent = scoreTen;
    const ring = $("scoreRingFg");
    const circumference = 2 * Math.PI * 52;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference * (1 - correct / total);
    ring.classList.toggle("fail", !passed);

    const badge = $("resPassBadge");
    badge.textContent = passed ? "Đạt chuẩn FPT (≥ 5.0 / 10)" : "Chưa đạt chuẩn FPT (< 5.0 / 10)";
    badge.classList.toggle("fail", !passed);

    $("resHeadline").textContent =
      pct >= 85
        ? "Rất vững kiến thức PRM393!"
        : pct >= 50
        ? "Đã qua mốc an toàn — tiếp tục luyện thêm câu sai!"
        : "Cần ôn kỹ lại các bẫy tiếng Anh!";

    $("resSummaryLine").textContent = `Đúng ${correct} / ${total} câu (${pct}%) • Sai/bỏ trống ${wrongCount} câu • Thời gian: ${formatTime(session.elapsedSec)}.`;

    const retryWrongBtn = $("retryWrongBtn");
    if (wrongCount > 0) {
      retryWrongBtn.classList.remove("hidden");
      retryWrongBtn.textContent = `Làm lại chỉ các câu sai (${wrongCount} câu)`;
    } else {
      retryWrongBtn.classList.add("hidden");
    }

    // Chapter breakdown
    const byCh = {};
    session.items.forEach((it) => {
      const ch = it.raw.chapter;
      if (!byCh[ch]) byCh[ch] = { total: 0, correct: 0 };
      byCh[ch].total++;
      if (it.chosenIdx === it.correctIdx) byCh[ch].correct++;
    });

    const bdList = $("chapterBreakdownList");
    bdList.innerHTML = Object.keys(byCh)
      .map(Number)
      .sort((a, b) => a - b)
      .map((chId) => {
        const ch = CHAPTERS.find((c) => c.id === chId);
        const st = byCh[chId];
        const chPct = Math.round((st.correct / st.total) * 100);
        const cls = chPct >= 80 ? "good" : chPct < 50 ? "weak" : "";
        return `
          <div class="bd-row">
            <span class="bd-name">${ch ? escapeHtml(ch.shortTitle) : "Ch." + chId}</span>
            <div class="bd-bar"><div class="bd-fill ${cls}" style="width:${chPct}%"></div></div>
            <span class="bd-score">${st.correct}/${st.total} (${chPct}%)</span>
          </div>
        `;
      })
      .join("");

    reviewFilter = "all";
    document.querySelectorAll("#reviewFilterGroup .pill").forEach((p) => {
      p.classList.toggle("active", p.dataset.rfilter === "all");
    });
    renderReviewList();
  }

  function renderReviewList() {
    if (!session) return;
    const list = $("reviewList");
    const filtered = session.items
      .map((it, idx) => ({ it, idx }))
      .filter(({ it }) => {
        const ok = it.chosenIdx === it.correctIdx;
        if (reviewFilter === "wrong") return !ok;
        if (reviewFilter === "correct") return ok;
        if (reviewFilter === "flagged") return it.flagged;
        return true;
      });

    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">Không có câu hỏi nào trong bộ lọc này.</div>';
      return;
    }

    list.innerHTML = filtered
      .map(({ it, idx }) => {
        const q = it.raw;
        const ok = it.chosenIdx === it.correctIdx;
        const statusText =
          it.chosenIdx === null ? "Bỏ trống" : ok ? "Đúng" : `Sai (Bạn chọn ${LETTERS[it.chosenIdx]})`;
        return `
          <article class="review-card ${ok ? "is-correct" : "is-wrong"}">
            <div class="review-head">
              <div class="quiz-meta-left">
                <strong>Câu ${idx + 1}</strong>
                <span class="ch-tag">Ch.${q.chapter}</span>
                <span class="topic-tag">${escapeHtml(q.topic)}</span>
                ${it.flagged ? '<span class="special-tag">Đã cắm cờ</span>' : ""}
              </div>
              <span class="review-status ${ok ? "ok" : "bad"}">${statusText}</span>
            </div>
            <div class="question-stem" style="font-size:1rem;margin-bottom:10px">${formatInline(q.question)}</div>
            ${q.code ? `<pre class="code-block"><code>${highlightDart(q.code)}</code></pre>` : ""}
            <div class="review-options">
              ${it.options
                .map((opt, oi) => {
                  let oc = "rev-opt";
                  if (oi === it.correctIdx) oc += " correct";
                  else if (oi === it.chosenIdx) oc += " wrong-pick";
                  return `<div class="${oc}"><strong>${LETTERS[oi]}.</strong> ${formatInline(opt)}</div>`;
                })
                .join("")}
            </div>
            <p class="rev-exp"><strong>Giải thích:</strong> ${formatInline(q.explanation)}</p>
          </article>
        `;
      })
      .join("");
  }

  // CHEATSHEET 9 CHAPTERS VIEW
  function renderCheatsheet(query) {
    const qLower = (query || "").trim().toLowerCase();
    const masteredSet = new Set(userStore.mastered);
    const grid = $("cheatsheetGrid");

    const matching = CHAPTERS.filter((ch) => {
      if (!qLower) return true;
      const hay = (ch.title + " " + ch.subtitle + " " + ch.keyPoints.join(" ")).toLowerCase();
      return hay.includes(qLower);
    });

    if (!matching.length) {
      grid.innerHTML = '<div class="empty-state">Không tìm thấy từ khóa phù hợp trong 9 chương.</div>';
      return;
    }

    grid.innerHTML = matching
      .map((ch) => {
        const chQs = ALL_QUESTIONS.filter((q) => q.chapter === ch.id);
        const masteredCount = chQs.filter((q) => masteredSet.has(q.id)).length;
        return `
          <article class="cheat-card">
            <div>
              <div class="quiz-meta-left" style="margin-bottom:8px">
                <span class="ch-tag">Chương ${ch.id}</span>
                <span class="topic-tag">${escapeHtml(ch.slideFile)}</span>
              </div>
              <h2>${escapeHtml(ch.title)}</h2>
              <p class="panel-desc">${escapeHtml(ch.subtitle)}</p>
              <ul class="cheat-list">
                ${ch.keyPoints.map((pt) => `<li>${formatInline(pt)}</li>`).join("")}
              </ul>
            </div>
            <div class="cheat-footer">
              <span class="ch-meta">Đã nắm ${masteredCount} / ${chQs.length} câu</span>
              <button class="btn btn-secondary btn-sm" data-drill-ch="${ch.id}" type="button">Luyện Chương ${ch.id}</button>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-drill-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chId = Number(btn.dataset.drillCh);
        const chQs = ALL_QUESTIONS.filter((q) => q.chapter === chId);
        startQuizFromPool(chQs, chQs.length, "practice");
      });
    });
  }

  // MISTAKES & BOOKMARKS BANK VIEW
  function renderMistakesView() {
    $("mCountWrong").textContent = userStore.wrong.length;
    $("mCountFlagged").textContent = userStore.flagged.length;

    const idList = mistakeTab === "wrong" ? userStore.wrong : userStore.flagged;
    const qs = ALL_QUESTIONS.filter((q) => idList.includes(q.id));
    $("practiceMistakesBtn").disabled = qs.length === 0;
    $("practiceMistakesBtn").textContent =
      qs.length > 0 ? `Luyện ngay (${qs.length} câu)` : "Chưa có câu để luyện";

    const list = $("mistakesList");
    if (!qs.length) {
      list.innerHTML =
        mistakeTab === "wrong"
          ? '<div class="empty-state">Tuyệt vời! Bạn chưa có câu nào trong danh sách hay sai.</div>'
          : '<div class="empty-state">Bạn chưa cắm cờ câu hỏi nào. Khi làm bài, bấm nút "Cắm cờ" (hoặc phím F) để lưu câu khó vào đây.</div>';
      return;
    }

    list.innerHTML = qs
      .map((q) => {
        return `
          <article class="review-card">
            <div class="review-head">
              <div class="quiz-meta-left">
                <span class="ch-tag">Ch.${q.chapter}</span>
                <span class="topic-tag">${escapeHtml(q.topic)}</span>
                <span class="review-status neutral">#${q.id}</span>
              </div>
              <button class="btn btn-ghost btn-sm" data-remove-bank="${q.id}" type="button">Gỡ khỏi danh sách</button>
            </div>
            <div class="question-stem" style="font-size:1rem;margin-bottom:10px">${formatInline(q.question)}</div>
            ${q.code ? `<pre class="code-block"><code>${highlightDart(q.code)}</code></pre>` : ""}
            <div class="review-options">
              ${q.options
                .map((opt, oi) => {
                  const oc = oi === q.answer ? "rev-opt correct" : "rev-opt";
                  return `<div class="${oc}"><strong>${LETTERS[oi]}.</strong> ${formatInline(opt)}</div>`;
                })
                .join("")}
            </div>
            <p class="rev-exp"><strong>Giải thích:</strong> ${formatInline(q.explanation)}</p>
          </article>
        `;
      })
      .join("");

    list.querySelectorAll("[data-remove-bank]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.removeBank);
        if (mistakeTab === "wrong") {
          userStore.wrong = userStore.wrong.filter((x) => x !== id);
        } else {
          userStore.flagged = userStore.flagged.filter((x) => x !== id);
        }
        saveStore();
        renderMistakesView();
      });
    });
  }

  // IN-APP MODAL
  function openModal(title, body, confirmText, onConfirm) {
    $("modalTitle").textContent = title;
    $("modalBody").textContent = body;
    $("modalConfirmBtn").textContent = confirmText || "Xác nhận";
    pendingModalAction = onConfirm;
    $("confirmModal").classList.remove("hidden");
  }

  function closeModal() {
    $("confirmModal").classList.add("hidden");
    pendingModalAction = null;
  }

  // WIRE EVENTS
  function initEvents() {
    $("themeToggleBtn").addEventListener("click", () => {
      userStore.theme = userStore.theme === "dark" ? "light" : "dark";
      applyTheme(userStore.theme);
      saveStore();
    });

    $("brandHomeBtn").addEventListener("click", () => {
      if (session && !session.submitted && $("viewQuiz").classList.contains("active")) {
        openModal(
          "Rời bài thi hiện tại?",
          "Tiến độ bài thi đang làm sẽ không được lưu nếu bạn rời khỏi lúc này.",
          "Về trang chính",
          () => {
            stopTimer();
            session = null;
            switchView("setup");
          }
        );
      } else {
        switchView("setup");
      }
    });

    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const dest = tab.dataset.view;
        if (session && !session.submitted && $("viewQuiz").classList.contains("active") && dest !== "setup") {
          openModal(
            "Rời bài thi đang làm?",
            "Bạn đang làm dở bài thi. Rời trang này sẽ hủy phiên hiện tại.",
            "Rời đi",
            () => {
              stopTimer();
              session = null;
              switchView(dest);
            }
          );
        } else {
          switchView(dest);
        }
      });
    });

    // Setup controls
    $("selectAllChBtn").addEventListener("click", () => {
      selectedChapters = new Set(CHAPTERS.map((c) => c.id));
      renderChapterGrid();
      updatePoolCountsAndLimits();
    });

    $("clearAllChBtn").addEventListener("click", () => {
      selectedChapters.clear();
      renderChapterGrid();
      updatePoolCountsAndLimits();
    });

    document.querySelectorAll("#poolFilterGroup .pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        poolFilter = pill.dataset.filter;
        document.querySelectorAll("#poolFilterGroup .pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        updatePoolCountsAndLimits();
      });
    });

    // Question Count Slider & Input & Presets
    $("questionCountSlider").addEventListener("input", (e) => {
      requestedCount = Number(e.target.value);
      $("questionCountInput").value = requestedCount;
      updatePoolCountsAndLimits();
    });

    $("questionCountInput").addEventListener("input", (e) => {
      const maxAvail = getFilteredPool().length;
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && maxAvail > 0) {
        requestedCount = Math.max(1, Math.min(maxAvail, val));
        $("questionCountSlider").value = requestedCount;
        syncPresetHighlight(maxAvail);
        const modeLabel = quizMode === "exam" ? "Thi thử" : "Luyện tập";
        $("startQuizBtn").textContent = `Bắt đầu ${modeLabel} (${requestedCount} câu)`;
      }
    });

    $("questionCountInput").addEventListener("blur", () => {
      updatePoolCountsAndLimits();
    });

    document.querySelectorAll("#countPresets .preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const maxAvail = getFilteredPool().length;
        if (maxAvail === 0) return;
        const val = btn.dataset.count;
        requestedCount = val === "max" ? maxAvail : Math.min(maxAvail, Number(val));
        updatePoolCountsAndLimits();
      });
    });

    // Mode switcher
    document.querySelectorAll(".mode-card").forEach((card) => {
      card.addEventListener("click", () => {
        quizMode = card.dataset.mode;
        document.querySelectorAll(".mode-card").forEach((c) => {
          const active = c.dataset.mode === quizMode;
          c.classList.toggle("active", active);
          c.querySelector("input").checked = active;
        });
        $("timerConfigBlock").classList.toggle("hidden", quizMode !== "exam");
        updatePoolCountsAndLimits();
      });
    });

    $("startQuizBtn").addEventListener("click", () => {
      const pool = getFilteredPool();
      startQuizFromPool(pool, requestedCount, quizMode);
    });

    $("resetProgressBtn").addEventListener("click", () => {
      openModal(
        "Đặt lại toàn bộ tiến độ?",
        "Thao tác này sẽ xóa lịch sử câu đã nắm, câu sai, câu cắm cờ và số lượt thi đã lưu trên trình duyệt.",
        "Đặt lại",
        () => {
          const keepTheme = userStore.theme;
          userStore = {
            theme: keepTheme,
            mastered: [],
            wrong: [],
            flagged: [],
            attempts: 0,
            totalScoreSum: 0
          };
          saveStore();
          renderChapterGrid();
          updatePoolCountsAndLimits();
        }
      );
    });

    // Quiz workspace buttons
    $("flagBtn").addEventListener("click", toggleFlagCurrent);

    $("prevQBtn").addEventListener("click", () => {
      if (session && session.index > 0) {
        session.index--;
        renderQuizWorkspace();
      }
    });

    $("nextQBtn").addEventListener("click", () => {
      if (!session) return;
      if (session.index < session.items.length - 1) {
        session.index++;
        renderQuizWorkspace();
      } else {
        confirmSubmitQuiz();
      }
    });

    $("submitQuizBtn").addEventListener("click", confirmSubmitQuiz);

    $("exitQuizBtn").addEventListener("click", () => {
      openModal(
        "Thoát khỏi bài thi?",
        "Bạn có muốn quay về trang cấu hình bài thi không?",
        "Thoát",
        () => {
          stopTimer();
          session = null;
          switchView("setup");
        }
      );
    });

    // Results buttons
    $("retryWrongBtn").addEventListener("click", () => {
      if (!session) return;
      const wrongQs = session.items
        .filter((it) => it.chosenIdx !== it.correctIdx)
        .map((it) => it.raw);
      if (wrongQs.length) {
        startQuizFromPool(wrongQs, wrongQs.length, "practice");
      }
    });

    $("newQuizBtn").addEventListener("click", () => {
      session = null;
      switchView("setup");
    });

    document.querySelectorAll("#reviewFilterGroup .pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        reviewFilter = pill.dataset.rfilter;
        document.querySelectorAll("#reviewFilterGroup .pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        renderReviewList();
      });
    });

    // Cheatsheet search
    $("chapterSearchInput").addEventListener("input", (e) => {
      renderCheatsheet(e.target.value);
    });

    // Mistakes bank controls
    document.querySelectorAll("#mistakeTabGroup .pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        mistakeTab = pill.dataset.mtab;
        document.querySelectorAll("#mistakeTabGroup .pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        renderMistakesView();
      });
    });

    $("practiceMistakesBtn").addEventListener("click", () => {
      const ids = mistakeTab === "wrong" ? userStore.wrong : userStore.flagged;
      const qs = ALL_QUESTIONS.filter((q) => ids.includes(q.id));
      if (qs.length) startQuizFromPool(qs, qs.length, "practice");
    });

    $("clearMistakesBtn").addEventListener("click", () => {
      openModal(
        "Xóa danh sách câu sai?",
        "Bạn chắc chắn muốn làm trống danh sách câu từng làm sai?",
        "Xóa",
        () => {
          userStore.wrong = [];
          saveStore();
          renderMistakesView();
        }
      );
    });

    // Modal controls
    $("modalCancelBtn").addEventListener("click", closeModal);
    $("confirmModal").addEventListener("click", (e) => {
      if (e.target === $("confirmModal")) closeModal();
    });
    $("modalConfirmBtn").addEventListener("click", () => {
      const fn = pendingModalAction;
      closeModal();
      if (typeof fn === "function") fn();
    });

    // Keyboard shortcuts during active quiz
    document.addEventListener("keydown", (e) => {
      if (!$("viewQuiz").classList.contains("active") || !session || session.submitted) return;
      if (!$("confirmModal").classList.contains("hidden")) return;
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;

      const key = e.key.toLowerCase();
      if (key === "a" || key === "1") selectOption(0);
      else if (key === "b" || key === "2") selectOption(1);
      else if (key === "c" || key === "3") selectOption(2);
      else if (key === "d" || key === "4") selectOption(3);
      else if (key === "arrowleft" && session.index > 0) {
        session.index--;
        renderQuizWorkspace();
      } else if (key === "arrowright" && session.index < session.items.length - 1) {
        session.index++;
        renderQuizWorkspace();
      } else if (key === "f") {
        toggleFlagCurrent();
      }
    });
  }

  // BOOT
  applyTheme(userStore.theme);
  updateGlobalHeaderStats();
  renderChapterGrid();
  updatePoolCountsAndLimits();
  initEvents();
})();
