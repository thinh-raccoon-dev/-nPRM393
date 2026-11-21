window.PRM393_QUESTIONS.push(
  {
    "id": 235,
    "chapter": 8,
    "topic": "REST Verbs",
    "tag": "Core Concept",
    "question": "In RESTful APIs, which HTTP verbs map to Read, Create, Replace, and Remove respectively?",
    "options": [
      "GET, POST, PUT, DELETE",
      "POST, GET, DELETE, PUT",
      "GET, PUT, POST, REMOVE",
      "FETCH, SEND, UPDATE, DROP"
    ],
    "answer": 0,
    "explanation": "4 động từ REST cơ bản (Slide 8): `GET` (read), `POST` (create), `PUT` (replace), `DELETE` (remove)."
  },
  {
    "id": 236,
    "chapter": 8,
    "topic": "HTTP Status Codes",
    "tag": "FPT Exam Favorite",
    "question": "Which HTTP status code specifically indicates that a `POST /posts` request successfully CREATED a new resource on the server?",
    "options": [
      "201",
      "204",
      "401",
      "200"
    ],
    "answer": 0,
    "explanation": "Trong dải thành công `200–299`: `200 OK` (thường cho GET), **`201 Created`** cho `POST` tạo mới thành công!"
  },
  {
    "id": 237,
    "chapter": 8,
    "topic": "package:http Behavior",
    "tag": "Exam Trap",
    "question": "What happens in Dart's `package:http` when `await http.get(url)` receives an HTTP **404** or **500** response from the server?",
    "options": [
      "`http.get` automatically retries 5 times",
      "`http.get` returns `null`",
      "`http.get` does NOT throw — it returns a normal `Response` object, so you MUST check `response.statusCode` BEFORE calling `jsonDecode(response.body)`",
      "`http.get` automatically throws an `HttpStatusException`"
    ],
    "answer": 2,
    "explanation": "Bẫy SỐ 1 của Chương 8! `package:http` KHÔNG bao giờ throw khi gặp 404/500 — nó vẫn trả về `Response`. Luật sống còn: luôn check `response.statusCode` TRƯỚC khi `jsonDecode`!"
  },
  {
    "id": 238,
    "chapter": 8,
    "topic": "JSON to Dart Types",
    "tag": "FPT Exam Favorite",
    "question": "Using `jsonDecode()` from `dart:convert`, what Dart types do a JSON object `{...}` and a JSON array `[...]` decode into?",
    "options": [
      "`Map<String, dynamic>` and `List<dynamic>`",
      "`JsonObject` and `JsonArray`",
      "`Object` and `String`",
      "`Set<String>` and `Iterable<int>`"
    ],
    "answer": 0,
    "explanation": "Bảng ánh xạ JSON ↔ Dart (Slide 8): JSON object `{...}` → `Map<String, dynamic>`; JSON array `[...]` → `List<dynamic>`; string/number/bool/null → `String`/`int,double`/`bool`/`Null`."
  },
  {
    "id": 239,
    "chapter": 8,
    "topic": "dart:convert",
    "tag": "Core Concept",
    "question": "Which built-in Dart library provides `jsonDecode()` and `jsonEncode()`?",
    "options": [
      "dart:io",
      "dart:http",
      "dart:json",
      "dart:convert"
    ],
    "answer": 3,
    "explanation": "`import 'dart:convert';` cung cấp `jsonDecode` (JSON string → Dart Map/List) và `jsonEncode` (Dart → JSON string)."
  },
  {
    "id": 240,
    "chapter": 8,
    "topic": "Model Classes",
    "tag": "Core Concept",
    "question": "Why should you map decoded JSON into typed Model classes (`Post`) instead of passing `Map<String, dynamic>` directly into UI widgets?",
    "options": [
      "Because `dart:convert` only supports custom classes",
      "Because `Map<String, dynamic>` cannot be stored in a `List`",
      "Because `post['title']` has no compile-time type safety, no autocomplete, and a single typo silently yields `null`",
      "Because `ListView.builder` cannot render values from a `Map`"
    ],
    "answer": 2,
    "explanation": "Dùng `Map<String, dynamic>` thẳng trong UI không có type safety, không autocomplete và gõ nhầm key âm thầm ra `null` → phải map sang Model class bằng `factory Post.fromJson`."
  },
  {
    "id": 241,
    "chapter": 8,
    "topic": "JSON List Parsing",
    "tag": "Code Reading",
    "question": "Which expression accurately completes the 'decode → map → toList' chant to convert a JSON array string into `List<Post>`?",
    "code": "final List<dynamic> jsonList = jsonDecode(response.body) as List<dynamic>;\nfinal List<Post> posts = /* ??? */;",
    "options": [
      "jsonEncode(jsonList).toList()",
      "Post.fromJson(jsonList)",
      "jsonList as List<Post>",
      "jsonList.map((item) => Post.fromJson(item as Map<String, dynamic>)).toList()"
    ],
    "answer": 3,
    "explanation": "Công thức chuẩn Slide 8: `jsonDecode` → `List<dynamic>` → `.map((item) => Post.fromJson(item as Map<String, dynamic>))` → `.toList()`."
  },
  {
    "id": 242,
    "chapter": 8,
    "topic": "Nested Primitive Lists",
    "tag": "Code Reading",
    "question": "Given JSON `{\"tags\": [\"flutter\", \"dart\"]}`, how does Module 8 cleanly convert `json['tags']` into a typed `List<String>`?",
    "options": [
      "json['tags'] as List<String>",
      "json['tags'].toString()",
      "String.fromJson(json['tags'])",
      "(json['tags'] as List<dynamic>).cast<String>()"
    ],
    "answer": 3,
    "explanation": "Vì `jsonDecode` luôn tạo ra `List<dynamic>` chứ không phải `List<String>` nên ép kiểu thẳng `as List<String>` sẽ lỗi runtime! Cách chuẩn: `(json['tags'] as List<dynamic>).cast<String>()`."
  },
  {
    "id": 243,
    "chapter": 8,
    "topic": "Nested Objects",
    "tag": "Code Reading",
    "question": "When an API returns a `User` JSON containing a nested `\"address\": {\"street\": ..., \"city\": ...}` object, what is the clean Dart modeling approach?",
    "options": [
      "Make `User` extend `Address`",
      "Ignore nested objects because `jsonDecode` drops them",
      "Create an `Address` model class with `Address.fromJson(...)` and call `Address.fromJson(json['address'] as Map<String, dynamic>)` inside `User.fromJson`",
      "Store `address` as a raw `String`"
    ],
    "answer": 2,
    "explanation": "Slide 8 (Nested Objects): Tạo model con `Address` có `Address.fromJson` rồi gọi đệ quy trong `User.fromJson`."
  },
  {
    "id": 244,
    "chapter": 8,
    "topic": "Roundtrip Unit Test",
    "tag": "Best Practice",
    "question": "What does the 'cheapest unit test in networking' — the JSON roundtrip test — verify?",
    "code": "const original = Post(id: 42, title: 'Roundtrip', body: 'Safe');\nfinal back = Post.fromJson(jsonDecode(jsonEncode(original.toJson())));\nassert(back.title == original.title);",
    "options": [
      "That `http.Client` throws on HTTP 404",
      "That the device has an active Wi-Fi connection",
      "That converting `Dart → toJson() → jsonEncode → jsonDecode → fromJson() → Dart` preserves all field values without losing data",
      "That the remote REST server has 99.9% uptime"
    ],
    "answer": 2,
    "explanation": "Roundtrip test kiểm chứng `toJson` và `fromJson` khớp nhau 100%, không bị thất lạc hoặc lệch tên key."
  },
  {
    "id": 245,
    "chapter": 8,
    "topic": "HTTP POST Request",
    "tag": "Code Reading",
    "question": "In the `createPost` method below, why MUST you include the `'Content-Type': 'application/json; charset=UTF-8'` header and wrap `post.toJson()` in `jsonEncode(...)`?",
    "code": "await client.post(\n  Uri.parse('$baseUrl/posts'),\n  headers: {'Content-Type': 'application/json; charset=UTF-8'},\n  body: jsonEncode(post.toJson()),\n);",
    "options": [
      "Because `jsonEncode` automatically checks `statusCode == 201`",
      "Because `client.post` only accepts `int` bodies",
      "Because `Uri.parse` fails without a `Content-Type` header",
      "Because `http.post` sends plain text / form encoding by default; the header tells the server the body is JSON, and `jsonEncode` serializes the Dart `Map` into a JSON string"
    ],
    "answer": 3,
    "explanation": "Gửi JSON qua `POST` cần header `Content-Type: application/json; charset=UTF-8` để server hiểu định dạng và `jsonEncode(post.toJson())` chuyển `Map` thành chuỗi JSON."
  },
  {
    "id": 246,
    "chapter": 8,
    "topic": "Injectable http.Client",
    "tag": "FPT Exam Favorite",
    "question": "Why does `HttpPostRepository` accept an optional `http.Client? client` in its constructor instead of calling global `http.get()` directly everywhere?",
    "code": "class HttpPostRepository implements PostRepository {\n  final http.Client client;\n  HttpPostRepository({http.Client? client}) : client = client ?? http.Client();\n}",
    "options": [
      "So tests can inject a `MockClient` (from `package:http/testing`) to run fast, deterministic, offline tests without hitting the real network",
      "Because `http.Client` automatically caches responses in SQLite",
      "Because global `http.get()` does not support HTTPS",
      "Because Dart does not allow top-level functions in `package:http`"
    ],
    "answer": 0,
    "explanation": "Dependency Injection với `http.Client` cho phép truyền `MockClient` khi test — chạy offline, cực nhanh và tái lập kết quả chính xác!"
  },
  {
    "id": 247,
    "chapter": 8,
    "topic": "FutureBuilder Anti-Pattern",
    "tag": "FPT Exam Favorite",
    "question": "What bug occurs if you write `FutureBuilder(future: widget.repo.fetchPosts(), ...)` directly inside `build()` instead of storing `_future` in `initState()`?",
    "options": [
      "`FutureBuilder` runs only once and ignores Retry",
      "The response automatically caches forever",
      "Every time the widget rebuilds (e.g., parent state change, keyboard, theme), a brand-new HTTP request fires, causing repeated requests and an endless loading spinner",
      "Dart fails to compile the widget"
    ],
    "answer": 2,
    "explanation": "Bẫy KINH ĐIỂN Chương 8! Tạo `Future` ngay trong `build()` làm mỗi lần rebuild là gọi lại mạng → spinner quay hoài. Phải khởi tạo `_future = widget.repo.fetchPosts();` đúng 1 lần trong `initState()`!"
  },
  {
    "id": 248,
    "chapter": 8,
    "topic": "The setState Future Trap",
    "tag": "Exam Trap",
    "question": "Look at the Retry method below. Why does the first line trigger a Flutter assertion error while the second works?",
    "code": "// FAILS:\nvoid _retryBad() => setState(() => _future = widget.repo.fetchPosts());\n// WORKS:\nvoid _retryGood() => setState(() { _future = widget.repo.fetchPosts(); });",
    "options": [
      "In Dart, an assignment expression returns its assigned value — so `() => _future = ...` returns a `Future`, and Flutter asserts that `setState`'s callback must NOT return a `Future`",
      "`setState` forbids calling repository methods inside arrow functions only on iOS",
      "Arrow functions cannot assign to `late` variables",
      "Block bodies run asynchronously on a separate Isolate"
    ],
    "answer": 0,
    "explanation": "Cực độc và cực sát Slide 8! Biểu thức gán trong arrow `() => _future = fetchPosts()` trả về chính `Future` đó, vi phạm assertion của `setState` (callback phải trả về `void`, không được trả về `Future`). Phải dùng block `{ ... }`!"
  },
  {
    "id": 249,
    "chapter": 8,
    "topic": "FutureBuilder UI States",
    "tag": "Core Concept",
    "question": "What are the FOUR UI states every robust `FutureBuilder<List<Post>>` screen should explicitly handle?",
    "options": [
      "Portrait, Landscape, Dark, Light",
      "Error (`hasError` + Retry), Loading (`ConnectionState.waiting`), Empty (`!hasData || data!.isEmpty`), and Data (`ListView.builder`)",
      "Init, Pause, Resume, Destroy",
      "GET, POST, PUT, DELETE"
    ],
    "answer": 1,
    "explanation": "Slide 8: Mọi màn hình tải danh sách với `FutureBuilder` phải xử lý đủ 4 trạng thái: Error (kèm Retry) → Waiting (spinner) → Empty ('No data') → Data (ListView)."
  },
  {
    "id": 250,
    "chapter": 8,
    "topic": "Network Exceptions",
    "tag": "FPT Exam Favorite",
    "question": "Match the network failure to the Dart exception it surfaces as: (1) No internet connection, (2) Invalid/corrupted JSON body, (3) Server hangs past `.timeout()`.",
    "options": [
      "(1) `TimeoutException`, (2) `NullError`, (3) `HttpException`",
      "(1) `SocketException`, (2) `FormatException`, (3) `TimeoutException`",
      "(1) `IOException`, (2) `CastError`, (3) `RangeError`",
      "(1) `FormatException`, (2) `SocketException`, (3) `StateError`"
    ],
    "answer": 1,
    "explanation": "Bảng lỗi mạng (Slide 8): Mất mạng → `SocketException`; JSON lỗi → `FormatException`; Quá thời gian chờ → `TimeoutException`; Lỗi server → status `500–599`."
  },
  {
    "id": 251,
    "chapter": 8,
    "topic": "Detail Screen REST Pattern",
    "tag": "Best Practice",
    "question": "When navigating from `PostsScreen` to `PostDetailScreen`, why does the REST-native pattern pass ONLY `post.id` via route arguments and let the detail screen fetch `/posts/{id}` itself?",
    "options": [
      "Because passing a `Post` object causes a `SocketException`",
      "Because `PostDetailScreen` must be a `StatefulWidget`",
      "Because deep links and push notifications carry IDs (not full objects), so the detail screen must be able to stand alone and fetch fresh data by ID",
      "Because `ModalRoute` cannot pass custom objects"
    ],
    "answer": 2,
    "explanation": "Slide 8 (S39): Truyền `id` qua route arguments để màn Detail tự gọi `fetchPost(id)` giúp màn hình đứng độc lập được khi mở từ Deep Link hoặc Push Notification."
  },
  {
    "id": 252,
    "chapter": 8,
    "topic": "Caching Decorator",
    "tag": "Code Reading",
    "question": "Look at `CachingPostRepository` below. Which HTTP method must NEVER be cached by this decorator?",
    "code": "class CachingPostRepository implements PostRepository {\n  final PostRepository inner;\n  final _cache = <int, Post>{};\n  CachingPostRepository(this.inner);\n  @override\n  Future<Post> fetchPost(int id) async {\n    final hit = _cache[id];\n    if (hit != null) return hit;\n    final post = await inner.fetchPost(id);\n    _cache[id] = post;\n    return post;\n  }\n}",
    "options": [
      "GET `/posts/{id}`",
      "POST (`createPost`)",
      "GET with a valid `200` response",
      "Static reference metadata"
    ],
    "answer": 1,
    "explanation": "Slide 8 nhấn mạnh: `POST` (và các thao tác ghi/tạo mới) KHÔNG BAO GIỜ được cache! `CachingPostRepository` bọc quanh bất kỳ `PostRepository` nào theo Decorator Pattern mà UI không đổi dòng code nào."
  },
  {
    "id": 253,
    "chapter": 8,
    "topic": "Cache Invalidation",
    "tag": "Exam Trap",
    "question": "A user creates a new post via `createPost`, then goes back to a cached posts list and doesn't see the new post. Why, and what category of data should NEVER be cached forever?",
    "options": [
      "Because `POST` automatically wipes `http.Client`",
      "The cache is stale because it wasn't invalidated/expired; rapidly changing or critical data like bank balances or live stock prices must NOT be served blindly from an unbounded cache",
      "Because `Map` in Dart deletes newly inserted entries after 1 second",
      "Because `FutureBuilder` ignores lists with more than 10 items"
    ],
    "answer": 1,
    "explanation": "Slide 8 (Think & Discuss & Hype): Dữ liệu cache bị cũ (stale) nếu không xóa/hết hạn khi có `POST`; chỉ cache những thứ chấp nhận sai lệch tạm thời — tuyệt đối không cache mù quáng số dư ngân hàng hay giá đang biến động."
  },
  {
    "id": 254,
    "chapter": 8,
    "topic": "Exponential Backoff",
    "tag": "FPT Exam Favorite",
    "question": "What is the purpose of Exponential Backoff (`200 ms → 400 ms → 800 ms`, `delay *= 2`) in a `retry()` helper?",
    "code": "await Future.delayed(delay);\ndelay *= 2;",
    "options": [
      "To flood a slow server as rapidly as possible until it responds",
      "To keep retrying indefinitely until the battery dies",
      "To convert `GET` requests into `POST` requests",
      "To wait progressively longer between retry attempts so a struggling server gets breathing room instead of being hammered"
    ],
    "answer": 3,
    "explanation": "Backoff tăng thời gian chờ giữa các lần thử lại (`200ms → 400ms → 800ms`) giúp server đang quá tải có thời gian hồi phục thay vì bị spam dồn dập."
  },
  {
    "id": 255,
    "chapter": 8,
    "topic": "Retry Policy",
    "tag": "Exam Trap",
    "question": "Which HTTP failures SHOULD be retried with backoff, and which should NEVER be retried blindly?",
    "options": [
      "Never retry any network call under any circumstance",
      "Retry `TimeoutException` and `5xx` server errors; NEVER retry `4xx` client errors (e.g., `400`, `401`, `404`) because they will fail identically forever",
      "Retry `400/401/404` client errors; never retry `500` server errors",
      "Retry every exception including `FormatException` and `401 Unauthorized`"
    ],
    "answer": 1,
    "explanation": "Bẫy kinh điển Slide 8! `4xx` (như `401 Unauthorized`, `404 Not Found`) là lỗi phía client — retry 100 lần vẫn lỗi y chang, chỉ tốn pin & tải server. Chỉ retry `TimeoutException` và `5xx`!"
  },
  {
    "id": 256,
    "chapter": 8,
    "topic": "Layer Composition",
    "tag": "Code Reading",
    "question": "In Module 8's architecture (`retry(() => cachingRepo.fetchPost(1), attempts: 3)`), where does each resilience concern live?",
    "options": [
      "`retry` lives inside `Post.fromJson`",
      "`timeout` lives inside the HTTP repository, `retry` wraps around the call, and `CachingPostRepository` sits in front via the same `PostRepository` contract — keeping UI unchanged",
      "`timeout` lives in `pubspec.yaml`",
      "All three live inside `ElevatedButton.onPressed`"
    ],
    "answer": 1,
    "explanation": "Slide 8: `timeout` trong repository, `retry` bọc bên ngoài, `cache` đặt phía trước — 3 công cụ nhỏ phối hợp trên chung 1 interface `PostRepository` mà không phải sửa UI."
  },
  {
    "id": 257,
    "chapter": 8,
    "topic": "Heavy JSON Parsing",
    "tag": "Best Practice",
    "question": "If a REST endpoint returns a massive JSON payload (e.g., 5 MB) that causes frame drops while decoding on the main UI thread, what does Module 8 Appendix recommend?",
    "options": [
      "Call `jsonDecode` inside `scheduleMicrotask()`",
      "Move heavy JSON parsing off the UI isolate using Flutter's `compute()` / Dart Isolates",
      "Use `StreamBuilder` instead of `FutureBuilder`",
      "Switch from `List` to `Set`"
    ],
    "answer": 1,
    "explanation": "Slide 8 Appendix: Parsing JSON quá lớn là tác vụ nặng CPU → đẩy ra khỏi UI thread bằng `compute()` / Isolates để tránh rớt khung hình (jank)."
  },
  {
    "id": 258,
    "chapter": 8,
    "topic": "Mobile Security",
    "tag": "Exam Trap",
    "question": "Why does OWASP Mobile App Security (cited in Module 8 Appendix) strictly forbid hardcoding secret API keys inside Flutter Dart code?",
    "options": [
      "Because `package:http` strips API keys from headers",
      "Because `const` strings are deleted during AOT compilation",
      "Because Dart Strings have a 16-character limit",
      "Because compiled mobile binaries (APK/IPA) can be unpacked and reverse-engineered — secret API keys must stay server-side"
    ],
    "answer": 3,
    "explanation": "File APK/IPA có thể bị dịch ngược (unpacked) dễ dàng để lấy chuỗi cứng trong code → KHÔNG bao giờ để API secret trong app mobile, phải giữ ở backend server!"
  },
  {
    "id": 259,
    "chapter": 8,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "According to Module 8's 'When NOT to Follow the Hype', when does code-generation (`json_serializable`) or heavier HTTP clients (`dio`/`retrofit`) actually pay off?",
    "options": [
      "Use `http` and hand-written `fromJson` for small apps to build understanding; adopt `dio` when interceptors/cancellation/uploads are real needs, and `json_serializable` when scaling to dozens of models",
      "Always replace REST with GraphQL immediately",
      "Never use `package:http` in production",
      "Always adopt `dio`, `retrofit`, `json_serializable`, and GraphQL on day one even for a 3-model CRUD app"
    ],
    "answer": 0,
    "explanation": "Slide 8 ('When NOT to Follow the Hype'): `http` đủ dùng cho GET/POST cơ bản; chỉ nâng cấp `dio` khi thực sự cần interceptors/cancel/file upload; chỉ dùng `json_serializable` khi có hàng chục model."
  },
  {
    "id": 260,
    "chapter": 8,
    "topic": "Centralized Config",
    "tag": "Best Practice",
    "question": "Where should `baseUrl` and REST endpoint paths live according to 12-factor / Module 8 best practices?",
    "options": [
      "Passed as `TextField` `hintText`",
      "Stored inside `android/AndroidManifest.xml`",
      "Centralized in one repository / service layer so changing environments or base URLs happens in one place",
      "Duplicated as raw string literals inside every widget's `onPressed`"
    ],
    "answer": 2,
    "explanation": "Tập trung `baseUrl` và các endpoints vào 1 repository/service duy nhất (không rải string cứng khắp các widget)."
  },
  {
    "id": 261,
    "chapter": 8,
    "topic": "POST Button UX",
    "tag": "Code Reading",
    "question": "In the POST submit button below, what visual feedback does the user see while `_sending == true`?",
    "code": "ElevatedButton(\n  onPressed: _sending ? null : _submit,\n  child: _sending\n      ? const SizedBox(width: 16, height: 16,\n          child: CircularProgressIndicator(strokeWidth: 2))\n      : const Text('Submit'),\n)",
    "options": [
      "The button disappears from the widget tree",
      "The button remains clickable and shows 'Submit'",
      "The button triggers a Full Restart",
      "The button is disabled (`onPressed: null`) and displays a compact 16×16 `CircularProgressIndicator` spinner until `finally` resets `_sending = false`"
    ],
    "answer": 3,
    "explanation": "Trong khi đang gọi POST: `onPressed: null` khóa nút chống bấm đúp, đồng thời hiện spinner 16×16 ngay bên trong nút; khối `finally` bật lại nút sau khi hoàn tất."
  },
  {
    "id": 262,
    "chapter": 8,
    "topic": "Double-Submit Guard",
    "tag": "Code Reading",
    "question": "Why is `if (_sending) return;` still included at the top of `_submit()` even though the button sets `onPressed: _sending ? null : _submit`?",
    "options": [
      "Because Dart requires an `if` statement before `try`",
      "Because `onPressed: null` does not disable `ElevatedButton` on Android",
      "Because `setState` is asynchronous",
      "Because two ultra-fast taps (or keyboard submits) can arrive before the disabled frame repaints — the boolean guard guarantees at most ONE POST fires"
    ],
    "answer": 3,
    "explanation": "Cờ guard `if (_sending) return;` bảo vệ ngay lập tức trong bộ nhớ trước khi frame tiếp theo kịp vẽ nút bị disable, đảm bảo bấm đúp siêu nhanh chỉ gửi đúng 1 POST!"
  },
  {
    "id": 263,
    "chapter": 8,
    "topic": "Strict Type Casts in fromJson",
    "tag": "Core Concept",
    "question": "In `Post.fromJson`, why does Module 8 state that explicit casts like `json['id'] as int` failing loudly on bad API data is 'a feature, not a bug'?",
    "options": [
      "Because `as int` automatically converts `'abc'` into `0`",
      "Because Dart has no `String` type",
      "Because crashing restarts the server",
      "Because silent corruption is worse — failing loudly immediately exposes backend contract mismatches so your error UI/tests catch them early"
    ],
    "answer": 3,
    "explanation": "Slide 8: `as int` fail rõ ràng (fail loudly) khi server trả sai kiểu dữ liệu, giúp phát hiện lỗi contract ngay ở tầng parse thay vì âm thầm hiển thị dữ liệu rác."
  },
  {
    "id": 264,
    "chapter": 8,
    "topic": "Uri.parse",
    "tag": "Code Reading",
    "question": "What type must be passed as the first argument to `http.get(...)` and `http.post(...)` in modern `package:http` (`^1.2.0`)?",
    "options": [
      "A `Map<String, String>`",
      "A `RouteSettings` object",
      "A `Uri` object (e.g., created with `Uri.parse('https://...')`)",
      "A raw `String` URL"
    ],
    "answer": 2,
    "explanation": "`package:http` hiện đại yêu cầu đối tượng `Uri` (tạo bằng `Uri.parse(...)` hoặc `Uri.https(...)`), không nhận raw `String`."
  },
  {
    "id": 265,
    "chapter": 8,
    "topic": "When StreamBuilder Beats FutureBuilder",
    "tag": "Exam Trap",
    "question": "Which real feature on a posts screen would genuinely require switching from `FutureBuilder` to `StreamBuilder`?",
    "options": [
      "Decoding a JSON array with `jsonDecode`",
      "Adding a manual 'Retry' button on error",
      "Receiving live real-time post additions/updates pushed continuously over a WebSocket or Firestore snapshot listener",
      "Fetching a static list of 100 posts once on screen open"
    ],
    "answer": 2,
    "explanation": "Think & Discuss Slide 8: Tải danh sách 1 lần (kể cả có nút Retry) vẫn là `FutureBuilder`; chỉ đổi sang `StreamBuilder` khi dữ liệu đẩy về liên tục theo thời gian thực (WebSockets, live feed, chat)."
  },
  {
    "id": 266,
    "chapter": 8,
    "topic": "Six Networking Steps",
    "tag": "Core Concept",
    "question": "In Module 8's 6-step API networking pipeline (choose endpoint → send request → receive response → decode JSON → map to models → update UI), which steps belong in the Repository layer vs the Widget tree?",
    "options": [
      "Steps 1–5 live below the UI in the Repository layer; only Step 6 (update UI + handle loading/error states) belongs in the Widget tree",
      "Steps 1–3 belong in the Widget tree; Steps 4–6 belong in `pubspec.yaml`",
      "Steps 1–6 all belong inside `build()`",
      "Only Step 4 (`jsonDecode`) belongs in the Repository"
    ],
    "answer": 0,
    "explanation": "Slide 8 (The Big Picture): Bước 1–5 nằm gọn trong tầng Repository; cây Widget chỉ làm duy nhất Bước 6 (hiển thị UI + trạng thái loading/empty/error)."
  },
  {
    "id": 267,
    "chapter": 8,
    "topic": "HTTP 4xx vs 5xx",
    "tag": "Core Concept",
    "question": "A user attempts to view `/posts/999999` and the server returns status code `404`, while another request to `/posts` returns `503`. Which range represents client errors vs server errors?",
    "options": [
      "400–499 = client errors (e.g., 404, 401, 422); 500–599 = server errors (e.g., 500, 503)",
      "200–299 = client errors; 400–499 = server errors",
      "400–499 = timeouts; 500–599 = invalid JSON",
      "300–399 = server errors; 500–599 = success"
    ],
    "answer": 0,
    "explanation": "`200–299`: thành công; `400–499`: lỗi client (không retry mù quáng); `500–599`: lỗi server (có thể retry với backoff)."
  }
);
