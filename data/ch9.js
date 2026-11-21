window.PRM393_QUESTIONS.push(
  {
    "id": 268,
    "chapter": 9,
    "topic": "Cache vs Persistence",
    "tag": "Core Concept",
    "question": "What is the key difference between Module 8's in-memory cache (`Map<int, Post>`) and Module 9's local storage persistence?",
    "options": [
      "In-memory cache survives device reboots, while local storage dies on app close",
      "In-memory cache is lost the moment the app process is killed, whereas local persistence saves data on device storage so it survives restarts and works offline",
      "There is no difference",
      "Local storage requires an active internet connection"
    ],
    "answer": 1,
    "explanation": "In-memory cache mất ngay khi tắt app; local storage lưu trực tiếp lên thiết bị giúp dữ liệu sống sót qua các lần khởi động lại, chạy được offline và nhanh hơn gọi API."
  },
  {
    "id": 269,
    "chapter": 9,
    "topic": "Choosing Storage",
    "tag": "FPT Exam Favorite",
    "question": "Which local storage tool is the BEST fit for simple flags and small user settings (e.g., `isDarkMode`, `onboardingDone`, `lastSyncMs`)?",
    "options": [
      "SharedPreferences",
      "REST API",
      "SQLite (sqflite)",
      "JSON file export"
    ],
    "answer": 0,
    "explanation": "Bảng chọn storage (Slide 9): `SharedPreferences` cho key-value đơn giản (settings, flags); `SQLite (sqflite)` cho bảng quan hệ/truy vấn; `Hive` cho object key-value/cache nhanh; JSON file cho export/backup."
  },
  {
    "id": 270,
    "chapter": 9,
    "topic": "SharedPreferences Types",
    "tag": "FPT Exam Favorite",
    "question": "Which FIVE data types are natively supported by `SharedPreferences`?",
    "options": [
      "`bool`, `int`, `List<int>`, `Uint8List`, and `CustomModel`",
      "`int`, `Map`, `Set`, `DateTime`, and `File`",
      "`int`, `double`, `bool`, `String`, and `List<String>`",
      "`String`, `dynamic`, `Object`, `Future`, and `Stream`"
    ],
    "answer": 2,
    "explanation": "`SharedPreferences` chỉ hỗ trợ đúng 5 kiểu: **`bool`, `int`, `double`, `String`, `List<String>`**!"
  },
  {
    "id": 271,
    "chapter": 9,
    "topic": "SharedPreferences Limit",
    "tag": "Exam Trap",
    "question": "Why should you NOT store large datasets or complex relational lists inside `SharedPreferences`?",
    "options": [
      "Because `SharedPreferences` requires writing raw SQL",
      "Because `SharedPreferences` deletes all keys after 24 hours",
      "Because `SharedPreferences` only works on Android",
      "Because `SharedPreferences` loads ALL stored data into memory at once and lacks querying/filtering capabilities"
    ],
    "answer": 3,
    "explanation": "Slide 9: `SharedPreferences` tải TOÀN BỘ dữ liệu vào RAM ngay lúc khởi tạo (rất chậm/tốn RAM nếu lưu dữ liệu lớn) và không hỗ trợ truy vấn."
  },
  {
    "id": 272,
    "chapter": 9,
    "topic": "Async Init Before runApp",
    "tag": "FPT Exam Favorite",
    "question": "Look at `main()` below. Why is `WidgetsFlutterBinding.ensureInitialized();` MANDATORY on line 1?",
    "code": "Future<void> main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  final prefs = await SharedPreferences.getInstance();\n  runApp(TaskTrack(dark: prefs.getBool('settings.isDarkMode') ?? false));\n}",
    "options": [
      "To enable Hot Reload in release mode",
      "To initialize Flutter's engine/platform channel bindings BEFORE invoking any native plugin (like `SharedPreferences.getInstance()`) prior to `runApp()`",
      "To clear all previous SharedPreferences keys",
      "To force `SharedPreferences` to use SQLite"
    ],
    "answer": 1,
    "explanation": "CÂU TỦ CỰC CAO! Bất kỳ lời gọi plugin nào trong `async main()` TRƯỚC `runApp()` đều BẮT BUỘC phải gọi `WidgetsFlutterBinding.ensureInitialized();` trước, nếu không app sẽ crash!"
  },
  {
    "id": 273,
    "chapter": 9,
    "topic": "SharedPreferences Testing",
    "tag": "Core Concept",
    "question": "How do you mock `SharedPreferences` data cleanly inside Flutter unit or widget tests?",
    "options": [
      "Use `http.MockClient`",
      "Install an Android emulator inside every unit test",
      "Call `SharedPreferences.setMockInitialValues({'settings.isDarkMode': true})`",
      "Edit `AndroidManifest.xml` before running tests"
    ],
    "answer": 2,
    "explanation": "Slide 9: Dùng `SharedPreferences.setMockInitialValues({...})` để giả lập dữ liệu prefs khi viết widget/unit test (trên DartPad không có plugin thật nên phải dùng FakePrefs)."
  },
  {
    "id": 274,
    "chapter": 9,
    "topic": "SharedPreferences Platforms",
    "tag": "Core Concept",
    "question": "How does `SharedPreferences` persist data on Flutter Web vs DartPad?",
    "options": [
      "It uses SQLite on both Web and DartPad",
      "It does not work on Flutter Web",
      "On Flutter Web it uses browser `localStorage` (persists); on DartPad it is NOT supported (requires a `FakePrefs` mock)",
      "It persists permanently on DartPad across browser sessions"
    ],
    "answer": 2,
    "explanation": "Bảng hỗ trợ môi trường (Slide 9): Android/iOS (device storage: Android SharedPreferences / iOS UserDefaults), Flutter Web (browser `localStorage`), DartPad (không hỗ trợ → dùng mock)."
  },
  {
    "id": 275,
    "chapter": 9,
    "topic": "Security & Secrets",
    "tag": "Exam Trap",
    "question": "Where should sensitive authentication tokens (JWT / refresh tokens) or passwords be stored on mobile devices?",
    "options": [
      "In `SharedPreferences` under `'auth.token'`",
      "In a plaintext `tasks_backup.json` file",
      "In `flutter_secure_storage` (backed by iOS Keychain and Android Keystore)",
      "In an unencrypted `Hive` box"
    ],
    "answer": 2,
    "explanation": "Slide 9 Appendix: TUYỆT ĐỐI không lưu secret/token dạng plaintext trong `SharedPreferences` hay `Hive` thường — phải dùng `flutter_secure_storage` (Keychain/Keystore)."
  },
  {
    "id": 276,
    "chapter": 9,
    "topic": "SQLite vs sqflite",
    "tag": "FPT Exam Favorite",
    "question": "What is the exact distinction between `SQLite` and `sqflite`?",
    "options": [
      "`SQLite` is a NoSQL box; `sqflite` is a cloud server",
      "`sqflite` runs natively on Flutter Web without any extra setup",
      "`SQLite` is the lightweight relational database engine (C library), whereas `sqflite` is the Flutter plugin wrapper bridging Dart to SQLite (the 'F' stands for Flutter)",
      "They are two completely unrelated database engines"
    ],
    "answer": 2,
    "explanation": "Slide 9: `SQLite` = engine cơ sở dữ liệu quan hệ viết bằng C; `sqflite` = Flutter plugin wrapper (chữ F = Flutter), KHÔNG hỗ trợ Web (desktop/test dùng `sqflite_common_ffi`)."
  },
  {
    "id": 277,
    "chapter": 9,
    "topic": "sqflite Database Open",
    "tag": "Core Concept",
    "question": "In `openDatabase(join(await getDatabasesPath(), 'tasks.db'), version: 1, onCreate: ...)`, when does the `onCreate` callback execute?",
    "options": [
      "Every time `db.insert()` is called",
      "Only when `db.close()` is called",
      "Every single time the user opens the app",
      "ONLY ONCE — when the database file `tasks.db` does not exist on disk yet"
    ],
    "answer": 3,
    "explanation": "`onCreate` chỉ chạy đúng 1 lần duy nhất lúc file database chưa tồn tại để chạy lệnh `CREATE TABLE`."
  },
  {
    "id": 278,
    "chapter": 9,
    "topic": "Database Migrations",
    "tag": "Best Practice",
    "question": "In version 2 of your app, you need to add a `priority` column to the `tasks` SQLite table. What is the safe production approach?",
    "options": [
      "Delete `tasks.db` and recreate it on startup",
      "Edit `onCreate` while keeping `version: 1`",
      "Switch to `SharedPreferences`",
      "Increment `version` to `2` in `openDatabase` and implement an `onUpgrade` migration script (`ALTER TABLE ...`) so existing user data is preserved"
    ],
    "answer": 3,
    "explanation": "Slide 9 Appendix ('Migrate, don't recreate'): Tăng `version` và viết `onUpgrade`; nếu xóa tạo lại sẽ làm mất sạch dữ liệu của người dùng, còn giữ nguyên `version: 1` thì `onCreate` sẽ không chạy lại trên máy cũ!"
  },
  {
    "id": 279,
    "chapter": 9,
    "topic": "SQL Injection Prevention",
    "tag": "FPT Exam Favorite",
    "question": "Which `sqflite` query safely prevents SQL injection when filtering tasks by user input?",
    "options": [
      "`db.query('tasks', where: 'title = ?', whereArgs: [userInput])`",
      "`db.rawQuery(\"SELECT * FROM tasks WHERE title = '$userInput'\")`",
      "`db.execute('SELECT * FROM tasks WHERE title = $userInput')`",
      "`db.query('tasks', where: 'title = ' + userInput)`"
    ],
    "answer": 0,
    "explanation": "LUẬT BẢO MẬT CỰC QUAN TRỌNG (Slide 9): Luôn dùng parameterized query `where: 'col = ?', whereArgs: [val]` — KHÔNG BAO GIỜ nội suy chuỗi `$var` trực tiếp vào câu SQL!"
  },
  {
    "id": 280,
    "chapter": 9,
    "topic": "sqflite CRUD Return Values",
    "tag": "Code Reading",
    "question": "What do `await db.insert(...)` and `await db.update(...)` return in `sqflite`?",
    "code": "final id = await db.insert('tasks', {...});\nfinal n = await db.update('tasks', {'done': 1}, where: 'id = ?', whereArgs: [id]);",
    "options": [
      "Both return a `bool` indicating success",
      "`insert` returns `void`; `update` returns the updated `Map`",
      "Both return a `List<Map<String, Object?>>`",
      "`insert` returns the newly inserted row's `id` (`int`); `update` (and `delete`) return the number of affected rows (`int`)"
    ],
    "answer": 3,
    "explanation": "`db.insert()` trả về `id` của dòng vừa thêm; `db.update()` và `db.delete()` trả về số lượng dòng bị tác động (affected row count)."
  },
  {
    "id": 281,
    "chapter": 9,
    "topic": "SQLite Type Mapping",
    "tag": "Code Reading",
    "question": "SQLite has no native boolean or `DateTime` column type. How does Module 9 map `Task.done` (`bool`) and `Task.updatedAt` (`DateTime`) in `toMap()` / `fromMap()`?",
    "code": "Map<String, Object?> toMap() => {\n  'id': id,\n  'title': title,\n  'done': done ? 1 : 0,\n  'updatedAt': updatedAt.millisecondsSinceEpoch,\n};",
    "options": [
      "`done` as `TEXT` (`'YES'`/`'NO'`), `updatedAt` as `DOUBLE`",
      "SQLite stores Dart `bool` and `DateTime` objects directly without conversion",
      "`done` as `BLOB`, `updatedAt` as `List<int>`",
      "`done` as `INTEGER` (`1` or `0`), `updatedAt` as `INTEGER` (`millisecondsSinceEpoch`)"
    ],
    "answer": 3,
    "explanation": "Trong `sqflite`: `bool` → `INTEGER` (`done ? 1 : 0` và `(m['done'] as int) == 1`); `DateTime` → `INTEGER` (`millisecondsSinceEpoch` và `DateTime.fromMillisecondsSinceEpoch(...)`)."
  },
  {
    "id": 282,
    "chapter": 9,
    "topic": "SQL Clauses",
    "tag": "Core Concept",
    "question": "Which SQL clause pair is used for paginating long lists in a SQLite `SELECT` query?",
    "options": [
      "GROUP BY / HAVING",
      "WHERE / FROM",
      "INSERT / VALUES",
      "LIMIT / OFFSET"
    ],
    "answer": 3,
    "explanation": "Slide 9 (SQL SELECT Recap): `WHERE` (lọc), `GROUP BY / HAVING` (gom nhóm/tổng hợp `COUNT`, `SUM`), `ORDER BY` (sắp xếp `ASC`/`DESC`), **`LIMIT / OFFSET`** (phân trang pagination)."
  },
  {
    "id": 283,
    "chapter": 9,
    "topic": "sqflite Performance",
    "tag": "Best Practice",
    "question": "You need to insert 500 imported tasks into SQLite quickly and safely. Which `sqflite` technique avoids 500 slow individual per-row awaits?",
    "options": [
      "Store all 500 tasks in `SharedPreferences` instead",
      "Use `db.batch()` to commit all operations in a single transaction, and add `CREATE INDEX` on columns frequently used in `WHERE` / `ORDER BY`",
      "Call `openDatabase()` 500 separate times",
      "Wrap each `db.insert` in `setState`"
    ],
    "answer": 1,
    "explanation": "Slide 9 Appendix: Dùng `db.batch()` gom N thao tác vào 1 transaction duy nhất (nhanh gấp nhiều lần await từng dòng) và đánh `CREATE INDEX` cho các cột hay `WHERE`/`ORDER BY`."
  },
  {
    "id": 284,
    "chapter": 9,
    "topic": "sqflite Singleton",
    "tag": "Best Practice",
    "question": "How many `Database` connections should a Flutter app open for `tasks.db`?",
    "options": [
      "Never close or reuse a `Database` instance",
      "Open one connection per `ListTile`",
      "Open a brand-new `Database` inside every `build()` method",
      "Keep ONE `Database` singleton instance for the whole app — open once and `close()` on shutdown"
    ],
    "answer": 3,
    "explanation": "Slide 9: Duy trì một `Database` singleton duy nhất cho toàn ứng dụng, mở một lần và gọi `db.close()` khi tắt để giải phóng file handle."
  },
  {
    "id": 285,
    "chapter": 9,
    "topic": "Hive NoSQL",
    "tag": "FPT Exam Favorite",
    "question": "Which statement accurately describes `Hive` compared to `sqflite`?",
    "options": [
      "`Hive` is a C-based SQL relational database that does not work on Web",
      "`Hive` is strictly for cloud storage on Firebase",
      "`Hive` is a pure-Dart NoSQL key–value box store that runs on mobile, desktop, AND web, with synchronous `box.get()` once opened — but offers no SQL filtering",
      "`Hive` requires writing `SELECT ... WHERE` SQL queries"
    ],
    "answer": 2,
    "explanation": "`Hive` viết bằng pure Dart (chạy được cả mobile, desktop lẫn Web!), lưu theo dạng key-value `Box`, gọi `box.get()` đồng bộ (không cần `await` mỗi lần đọc sau khi mở box), nhưng không có SQL filtering."
  },
  {
    "id": 286,
    "chapter": 9,
    "topic": "Hive Custom Objects",
    "tag": "Core Concept",
    "question": "What must you register (or generate via `@HiveType`) to store custom Dart model objects directly in a `Hive` box?",
    "options": [
      "A `SliverGridDelegate`",
      "A `RouteInformationParser`",
      "A `GlobalKey<HiveState>`",
      "A `TypeAdapter`"
    ],
    "answer": 3,
    "explanation": "Slide 9: Lưu custom class trực tiếp trong `Hive` cần đăng ký `TypeAdapter` (tạo bằng `@HiveType` codegen hoặc viết tay; cách đơn giản hơn là lưu dưới dạng `Map`)."
  },
  {
    "id": 287,
    "chapter": 9,
    "topic": "Hive API",
    "tag": "Code Reading",
    "question": "In the `Hive` snippet below, notice that `box.get(...)` does NOT have an `await` keyword. Why is that valid?",
    "code": "final box = await Hive.openBox('settings');\nawait box.put('isDarkMode', true);\nfinal dark = box.get('isDarkMode', defaultValue: false);",
    "options": [
      "Because `Hive` only stores data in RAM and never persists to disk",
      "Because it is a syntax typo that fails to compile",
      "Because once a `Hive` box is opened, `box.get()` reads synchronously from memory without needing `await`",
      "Because `box.get()` returns a `Future<bool>` that is ignored"
    ],
    "answer": 2,
    "explanation": "Slide 9: Sau khi `await Hive.openBox(...)`, lệnh `box.get(...)` là đồng bộ (synchronous) — không cần `await` mỗi lần đọc, trong khi dữ liệu vẫn được lưu bền vững trên đĩa!"
  },
  {
    "id": 288,
    "chapter": 9,
    "topic": "DB Source of Truth",
    "tag": "Best Practice",
    "question": "In Module 9's persistent task list screen, what is the 'Golden Rule' after toggling or deleting a task?",
    "code": "Future<void> _toggle(Task t) async {\n  await widget.db.update('tasks', {'done': t.done ? 0 : 1},\n      where: 'id = ?', whereArgs: [t.id]);\n  await _reload();\n}",
    "options": [
      "Never hand-edit the UI list out of sync — mutate the database first, then call `_reload()` so the DB remains the single source of truth",
      "Store the checkbox state inside a `StatelessWidget`",
      "Trigger a Hot Restart after every toggle",
      "Mutate the in-memory `_tasks` list first and skip writing to SQLite until tomorrow"
    ],
    "answer": 0,
    "explanation": "Golden Rule (Slide 9): DB là **source of truth**, list trên UI chỉ là hình chiếu (projection) → luôn cập nhật DB rồi gọi `_reload()` để đọc lại và `setState`."
  },
  {
    "id": 289,
    "chapter": 9,
    "topic": "Offline-First Concept",
    "tag": "Core Concept",
    "question": "What defines an 'offline-first' (local-first) mobile application architecture?",
    "options": [
      "The app never communicates with any server ever",
      "The app stores user passwords in plain text",
      "The app refuses to work unless connected to 5G",
      "The app reads and writes local storage first so the UI never blocks on the network, treating the remote server as a background sync participant"
    ],
    "answer": 3,
    "explanation": "Offline-first (`Store → Use → Sync`): Load dữ liệu local trước để UI phản hồi tức thì kể cả mất mạng, sau đó đồng bộ nền với server khi online."
  },
  {
    "id": 290,
    "chapter": 9,
    "topic": "Sync-Up Mechanism",
    "tag": "FPT Exam Favorite",
    "question": "In Module 9's sync-up design, what are the roles of the **dirty flag** and the **last-sync watermark (`sync.lastSyncMs`)**?",
    "options": [
      "Dirty flag (`dirty = true`) marks rows created/edited locally waiting to be pushed (cleared once pushed); the watermark records the last sync timestamp so only rows touched after it are pushed/pulled",
      "Dirty flag deletes rows automatically after 10 seconds",
      "Both are SQLite primary key columns",
      "Dirty flag marks corrupted JSON files; watermark limits screen brightness"
    ],
    "answer": 0,
    "explanation": "Slide 9: **Dirty flag** đánh dấu bản ghi đã sửa ở local cần đẩy lên server (xóa cờ khi push xong); **Watermark** (`sync.lastSyncMs` lưu ở prefs) đánh dấu mốc đồng bộ gần nhất để không copy lại toàn bộ bảng."
  },
  {
    "id": 291,
    "chapter": 9,
    "topic": "Conflict Resolution",
    "tag": "FPT Exam Favorite",
    "question": "The same task is edited offline on a phone and on the web between two syncs. How does **Last-Write-Wins (LWW)** resolve the conflict, and what is its main trade-off?",
    "options": [
      "It deletes both copies from both devices",
      "It compares `updatedAt` timestamps so the newer timestamp wins and overwrites the loser — simple and predictable, but an older edit can be silently lost",
      "It always rejects the server version",
      "It merges every character automatically with zero data loss"
    ],
    "answer": 1,
    "explanation": "Last-Write-Wins (LWW): so sánh `updatedAt`, bản mới hơn thắng và ghi đè bản cũ. Ưu điểm: đơn giản, dễ dự đoán; nhược điểm: có thể âm thầm mất dữ liệu chỉnh sửa cũ."
  },
  {
    "id": 292,
    "chapter": 9,
    "topic": "Sync Tombstones",
    "tag": "FPT Exam Favorite",
    "question": "In an offline-first sync system, why do deletes require **tombstones** instead of immediate hard deletes?",
    "options": [
      "Because tombstones compress JSON files by 90%",
      "Because `SharedPreferences` cannot delete booleans",
      "Because if a row is hard-deleted locally, the sync engine no longer knows it was deleted and would pull it right back from the server — a soft-delete (`deleted` flag) tombstone lets the delete propagate",
      "Because SQLite forbids the `DELETE` SQL statement"
    ],
    "answer": 2,
    "explanation": "Slide 9: Nếu xóa cứng (hard delete) ở local khi offline, lần sync sau sẽ không biết dòng đó bị xóa và có thể kéo nó quay lại từ server → cần **tombstone** (cờ `deleted = true`) để truyền lệnh xóa lên server."
  },
  {
    "id": 293,
    "chapter": 9,
    "topic": "File Storage & path_provider",
    "tag": "Core Concept",
    "question": "Which function from `package:path_provider` returns your app's private, persistent directory suitable for saving `tasks_backup.json`?",
    "code": "final dir = await getApplicationDocumentsDirectory();\nfinal file = File('${dir.path}/tasks_backup.json');",
    "options": [
      "getTempBrowserDirectory()",
      "getDatabasesPath()",
      "getSystemRootDirectory()",
      "getApplicationDocumentsDirectory()"
    ],
    "answer": 3,
    "explanation": "`getApplicationDocumentsDirectory()` (từ `path_provider`) trả về thư mục riêng và bền vững của ứng dụng để đọc/ghi file qua `dart:io` `File`."
  },
  {
    "id": 294,
    "chapter": 9,
    "topic": "dart:io Platform Limitation",
    "tag": "Exam Trap",
    "question": "Which platform does NOT support `dart:io` `File` operations (`File.writeAsString` / `readAsString`)?",
    "options": [
      "Flutter Web",
      "iOS",
      "Android",
      "macOS / Windows Desktop"
    ],
    "answer": 0,
    "explanation": "Slide 9: `dart:io` File không tồn tại trên trình duyệt (Flutter Web) — tương tự `sqflite` cũng không chạy trực tiếp trên Web."
  },
  {
    "id": 295,
    "chapter": 9,
    "topic": "Backup Version Envelope",
    "tag": "Code Reading",
    "question": "Why does `exportTasks` wrap the exported task list inside a JSON envelope containing `'version': 1`?",
    "code": "String exportTasks(List<Task> tasks) => jsonEncode({\n  'version': 1,\n  'exportedAt': DateTime.now().millisecondsSinceEpoch,\n  'tasks': [for (final t in tasks) t.toExportJson()],\n});",
    "options": [
      "So future app versions can check `data['version']` during import, branch/migrate formats safely, and reject unsupported backup schemas instead of crashing",
      "Because `jsonEncode` fails unless a `'version'` key is present",
      "To encrypt the JSON payload",
      "So `SharedPreferences` can import the file directly"
    ],
    "answer": 0,
    "explanation": "Slide 9: Version envelope là cơ chế future-proof: hàm `importTasks` kiểm tra `data['version'] != 1` (ném `FormatException` nếu không hỗ trợ) trước khi decode & upsert vào DB."
  },
  {
    "id": 296,
    "chapter": 9,
    "topic": "Backup Limitations",
    "tag": "Exam Trap",
    "question": "Why does Module 9 warn that 'a JSON export file on the same phone does NOT replace a real backup strategy'?",
    "options": [
      "Because JSON files cannot be imported back into SQLite",
      "Because `path_provider` deletes `tasks_backup.json` on reboot",
      "Because JSON cannot store strings",
      "Because if the phone is lost, stolen, or destroyed, a local file saved on that exact same device dies with the device (export is an escape hatch, e.g., shared out via `share_plus`)"
    ],
    "answer": 3,
    "explanation": "Slide 9 (Think & Discuss & Hype): File JSON nằm trên chính chiếc điện thoại đó sẽ mất luôn nếu điện thoại hỏng/mất — chỉ nên coi là công cụ export cho người dùng chia sẻ ra ngoài (qua `share_plus`)."
  },
  {
    "id": 297,
    "chapter": 9,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Which statement aligns with Module 9's 'When NOT to Follow the Hype' guidance?",
    "options": [
      "Use SQLite for everything, even a single `isDarkMode` boolean",
      "Store every API response offline forever without expiration",
      "A handful of flags belongs in `SharedPreferences`; adding SQLite for 3 settings introduces unnecessary schema, migration, and mapping boilerplate",
      "Sync should always copy the entire table every 5 seconds"
    ],
    "answer": 2,
    "explanation": "Slide 9 ('When NOT to Follow the Hype'): Chọn công cụ đơn giản nhất giải quyết đúng bài toán — vài cờ cài đặt dùng `SharedPreferences`, không cần dựng cả SQLite!"
  },
  {
    "id": 298,
    "chapter": 9,
    "topic": "Local Storage Expiration",
    "tag": "Best Practice",
    "question": "What is the risk of caching/storing all server data offline forever without an expiration or refresh strategy?",
    "options": [
      "Dart stops compiling after 30 days",
      "`Hive` converts strings to integers",
      "SQLite automatically deletes tables after 7 days",
      "Stale local data silently becomes wrong data and misleads the user"
    ],
    "answer": 3,
    "explanation": "Slide 9: 'Store everything offline forever' → dữ liệu cũ (stale local data) sẽ âm thầm trở thành dữ liệu sai lệch."
  },
  {
    "id": 299,
    "chapter": 9,
    "topic": "Testing Local Storage",
    "tag": "Core Concept",
    "question": "How does Module 9 recommend testing storage-backed features cleanly across `SharedPreferences`, `sqflite`, and `Hive`?",
    "options": [
      "Skip testing storage completely",
      "Mock the storage seam: `SharedPreferences.setMockInitialValues`, in-memory `sqflite_common_ffi`, and temp-directory `Hive` boxes (or a `FakeTaskStore`)",
      "Replace all local storage with `http.get`",
      "Run tests only on production user phones"
    ],
    "answer": 1,
    "explanation": "Slide 9 Appendix: Mock lớp lưu trữ bằng `setMockInitialValues` (prefs), in-memory `sqflite_common_ffi` (SQLite), temp-dir boxes (Hive), hoặc `FakeTaskStore`."
  },
  {
    "id": 300,
    "chapter": 9,
    "topic": "Persistent List Empty State",
    "tag": "Best Practice",
    "question": "When a user deletes the last remaining task in a SQLite-backed `ListView.builder` (`_tasks.isEmpty`), what should the screen render?",
    "options": [
      "A friendly empty state message/illustration inviting the user to add a task",
      "Automatically re-insert deleted rows",
      "A red `RangeError` screen",
      "An infinite `CircularProgressIndicator`"
    ],
    "answer": 0,
    "explanation": "Slide 9: Khi `itemCount == 0` sau khi xóa dòng cuối cùng (hoặc mở app lần đầu), luôn hiển thị màn hình trạng thái rỗng (empty state) thân thiện thay vì màn trắng hoặc spinner."
  }
);
