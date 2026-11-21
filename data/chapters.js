window.PRM393_CHAPTERS = [
  {
    id: 1,
    shortTitle: "Ch.1: Intro to Flutter",
    title: "Introduction to Flutter",
    subtitle: "Architecture, JIT/AOT, Hot Reload, Setup & Scaffold",
    slideFile: "1_introduction_to_flutter.pdf",
    keyPoints: [
      "Flutter = Google UI toolkit, single codebase, Dart + Skia rendering engine (no OEM widgets, identical pixels across platforms).",
      "3-Layer Architecture (top → bottom): Framework (Dart) → Engine (C++/Skia) → Embedder (platform glue).",
      "Rendering pipeline: Widget Tree → Render Tree → Composited Scene → GPU Rendering.",
      "JIT (Just-In-Time) powers dev Hot Reload; AOT (Ahead-Of-Time) compiles to native ARM code for production.",
      "Hot Reload (r) keeps state; Hot Restart (R) resets state from main(); Full Restart needed for pubspec.yaml & native changes.",
      "Native integration uses Platform Channels (Kotlin/Swift); prefer Native for deep OS customization, real-time 3D games, low-level hardware."
    ]
  },
  {
    id: 2,
    shortTitle: "Ch.2: Dart Essentials",
    title: "Dart Essentials",
    subtitle: "Types, Null Safety, Functions, Collections, OOP & Intro Async",
    slideFile: "2_dart_essentials.pdf",
    keyPoints: [
      "const (compile-time constant) > final (runtime constant, set once) > var (inferred type); avoid dynamic (skips compile checks; Object still checks!).",
      "Sound null safety: non-nullable by default; ? (nullable), ?. (safe call), ?? (fallback), ??= (assign if null), ! (force unwrap — runtime crash if null).",
      "4 parameter types: required positional, optional positional [a = 0], named {a = 0}, required named {required this.x}.",
      "map() & where() return a LAZY Iterable — nothing executes until consumed (.toList(), forEach, length).",
      "Only ONE unnamed constructor allowed → use named constructors (with initializer list : x = 0) or factory constructors (fromJson/caching).",
      "extension adds methods at compile time (no fields/state, cannot override); try / on Type catch (e, s) / rethrow / finally."
    ]
  },
  {
    id: 3,
    shortTitle: "Ch.3: Advanced Dart",
    title: "Advanced Dart",
    subtitle: "Contracts, Generics, Event Loop, Futures, Streams & Repository",
    slideFile: "3_dart_advanced.pdf",
    keyPoints: [
      "extends (1 superclass, inherits code) vs implements (many, contract only — must override all) vs with (many mixins); mixin X on Y restricts usage.",
      "Event Loop priority: Sync code → drain ENTIRE Microtask queue (scheduleMicrotask) → take ONE Event queue item (Future/Timer) → repeat.",
      "Future.wait([...]) runs Futures concurrently; .timeout() throws TimeoutException to prevent hangs.",
      "Stream<T> = sequence over time (async* + yield + await for); StreamController is single-subscription by default (.broadcast() for multiple listeners, always close()).",
      "StreamBuilder auto-subscribes & cancels; check snapshot.hasError before hasData / ConnectionState.waiting.",
      "Repository Pattern: UI → abstract Repo → ApiRepo / FakeRepo. async/await is non-blocking, NOT parallel (CPU parallelism needs Isolates)."
    ]
  },
  {
    id: 4,
    shortTitle: "Ch.4: UI Fundamentals",
    title: "Flutter UI Fundamentals",
    subtitle: "Three Trees, Lifecycle, Lists, Inputs, Pickers & Material 3 Theming",
    slideFile: "4_flutter_ui_fundamentals.pdf",
    keyPoints: [
      "Three Trees: Widget (immutable description) → Element (identity, survives rebuilds) → RenderObject (layout & painting).",
      "State Lifecycle: createState() → initState() → build() → setState() → dispose() (always dispose TextEditingController!).",
      "ListView(children:) builds eagerly (short static lists); ListView.builder / separated builds lazily (long/data-driven lists).",
      "Interactive widgets: onPressed: null disables button; Checkbox gives bool?; RadioListTile group MUST share same <T> and groupValue; Slider uses divisions for discrete ticks.",
      "showDatePicker → Future<DateTime?>; showTimePicker → Future<TimeOfDay?>; null = user cancelled (not an error).",
      "Material 3 theming: ColorScheme.fromSeed(seedColor:); darkTheme + themeMode (state above MaterialApp); read via Theme.of(context)."
    ]
  },
  {
    id: 5,
    shortTitle: "Ch.5: Navigation & State",
    title: "Navigation & State Management",
    subtitle: "Provider, Navigator 1.0/2.0, Named Routes & Deep Linking",
    slideFile: "5_navigation_state.pdf",
    keyPoints: [
      "State ladder: setState → Lifting State Up → InheritedWidget (updateShouldNotify) → ChangeNotifier + Provider (above MaterialApp).",
      "Provider: context.watch<T>() / Consumer rebuilds on change; context.read<T>() reads/mutates in callbacks without listening.",
      "Navigator 1.0: push, pop(context, result), pushReplacement, maybePop (no black screen on root), pushNamedAndRemoveUntil(..., (_) => false) for Login/Logout.",
      "Check context.mounted after await on Navigator.push! Use onGenerateRoute for arguments + onUnknownRoute fallback; read via ModalRoute.of(context)!.settings.arguments.",
      "Navigator 2.0 (declarative pages + onDidRemovePage): RouteInformationProvider, RouteInformationParser, RouterDelegate, BackButtonDispatcher (or go_router).",
      "Deep linking: AndroidManifest.xml (<intent-filter> ACTION_VIEW + DEFAULT + BROWSABLE, test with adb) & iOS Info.plist (CFBundleURLTypes, test with xcrun simctl); validate URIs (OWASP M3)."
    ]
  },
  {
    id: 6,
    shortTitle: "Ch.6: Responsive Layout",
    title: "Layout & Responsive Design",
    subtitle: "Constraints, Flex, GridView, Stack, MediaQuery & LayoutBuilder",
    slideFile: "6_responsive_layout.pdf",
    keyPoints: [
      "Golden Rule: Constraints go down. Sizes go up. Parent sets position.",
      "BoxConstraints: Tight (min == max: SizedBox, Expanded), Loose (min == 0: Scaffold body, Flexible), Unbounded (max == infinity: Row/ListView).",
      "Expanded = FlexFit.tight (forces fill); Flexible = FlexFit.loose (may stay smaller); Wrap auto-wraps chips/tags without overflow.",
      "GridView responsive columns: SliverGridDelegateWithMaxCrossAxisExtent → count = (width / maxExtent).ceil(); GridView.builder is lazy.",
      "MediaQuery.of(context) reads whole window (root shell; size in logical dp, padding = notch, viewInsets = keyboard); LayoutBuilder reads parent constraints (reusable widgets!).",
      "Material 3 breakpoints: Compact < 600, Medium 600–839, Expanded ≥ 840. SafeArea protects notch; Adaptive = BottomNavigationBar ↔ NavigationRail."
    ]
  },
  {
    id: 7,
    shortTitle: "Ch.7: Forms & Validation",
    title: "Forms & Validation",
    subtitle: "FormState, GlobalKey, Controllers, Validators, Drafts & Focus",
    slideFile: "7_forms_validation.pdf",
    keyPoints: [
      "TextField (standalone) vs TextFormField (in Form, supports validator & onSaved); ONE GlobalKey<FormState> per Form.",
      "FormState: validate() returns true ONLY if all validators return null; save() invokes onSaved; reset() restores initialValue.",
      "validator signature: String? Function(String?) — return null = VALID, return String = red errorText. AutovalidateMode.onUserInteraction is recommended.",
      "Dispose every TextEditingController & FocusNode BEFORE super.dispose()! Avoid setState on every keystroke.",
      "Client validation = UX only; server MUST re-validate (OWASP). Guard async submit with _submitting flag, disabled button, and mounted check.",
      "Draft save on AppLifecycleState.paused via WidgetsBindingObserver. Focus UX: FocusNode, TextInputAction.next/done, onFieldSubmitted, GestureDetector unfocus, scrollable body."
    ]
  },
  {
    id: 8,
    shortTitle: "Ch.8: Networking & JSON",
    title: "Networking & JSON",
    subtitle: "REST, http, Models, FutureBuilder, Caching & Exponential Backoff",
    slideFile: "8_networking_json.pdf",
    keyPoints: [
      "package:http does NOT throw on 404/500 — ALWAYS check response.statusCode BEFORE jsonDecode()! (200 OK, 201 Created for POST).",
      "JSON ↔ Dart (dart:convert): object → Map<String, dynamic>, array → List<dynamic>; factory Model.fromJson & toJson(); inject http.Client for MockClient testing.",
      "FutureBuilder<T>: store _future in initState(), NEVER create inside build()! Check hasError → waiting → empty → data.",
      "setState trap: setState(() => _future = repo.fetchPosts()) asserts (returns Future) → MUST use block body setState(() { _future = ...; }).",
      "CachingPostRepository decorator caches GET in a Map; POST is NEVER cached. Always add .timeout() on remote calls.",
      "Exponential backoff (200ms → 400ms → 800ms): retry ONLY TimeoutException & 5xx — NEVER retry 4xx. Never store API secrets in app code."
    ]
  },
  {
    id: 9,
    shortTitle: "Ch.9: Local Storage",
    title: "Local Storage & Persistence",
    subtitle: "SharedPreferences, sqflite, Hive, Sync-Up & JSON Backup",
    slideFile: "9_local_storage.pdf",
    keyPoints: [
      "SharedPreferences: 5 types (bool, int, double, String, List<String>), loads all into RAM, NOT for secrets (use flutter_secure_storage).",
      "Call WidgetsFlutterBinding.ensureInitialized() BEFORE any plugin call (e.g., SharedPreferences.getInstance) in async main() prior to runApp().",
      "SQLite (C engine) vs sqflite (Flutter plugin, no Web support); openDatabase + onCreate (once) + onUpgrade (migrations — never wipe user data).",
      "ALWAYS use parameterized queries (where: 'id = ?', whereArgs: [id]) to block SQL injection; store bool as INTEGER (0/1); use db.batch() & CREATE INDEX.",
      "Hive = pure-Dart NoSQL boxes (works on Web), synchronous get() after openBox(), TypeAdapter for custom objects, no SQL filtering.",
      "Offline-first Sync: dirty flags + lastSyncMs watermark + Last-Write-Wins (updatedAt) + tombstones (soft delete). JSON export via path_provider + version envelope."
    ]
  }
];
window.PRM393_QUESTIONS = [];
