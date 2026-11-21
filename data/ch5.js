window.PRM393_QUESTIONS.push(
  {
    "id": 135,
    "chapter": 5,
    "topic": "Lifting State Up",
    "tag": "Core Concept",
    "question": "Two sibling widgets (`ChildDisplay` and `ChildButton`) need to share and update the same counter value. What does the 'Lifting State Up' pattern instruct you to do?",
    "options": [
      "Duplicate the `_count` variable inside both sibling widgets",
      "Convert `MaterialApp` into an `InheritedWidget` manually",
      "Store `_count` in a SQLite table immediately",
      "Move the state to their nearest common ancestor, passing data DOWN and callbacks UP"
    ],
    "answer": 3,
    "explanation": "Lifting State Up (Slide 5): Đưa state lên widget cha chung gần nhất (nearest common ancestor) → truyền dữ liệu xuống (data down), truyền callback lên (callbacks up)."
  },
  {
    "id": 136,
    "chapter": 5,
    "topic": "InheritedWidget",
    "tag": "FPT Exam Favorite",
    "question": "In an `InheritedWidget` subclass, what is the purpose of overriding `updateShouldNotify(covariant AppData oldWidget)`?",
    "code": "@override\nbool updateShouldNotify(AppData oldWidget) => theme != oldWidget.theme;",
    "options": [
      "To dispose controllers automatically",
      "To push a new route onto the Navigator stack",
      "To validate user form inputs",
      "To decide whether dependent descendant widgets should rebuild when the `InheritedWidget` updates"
    ],
    "answer": 3,
    "explanation": "`updateShouldNotify` trả về `true` nếu dữ liệu thay đổi để Flutter biết cần rebuild các widget con đã đăng ký phụ thuộc qua `dependOnInheritedWidgetOfExactType`."
  },
  {
    "id": 137,
    "chapter": 5,
    "topic": "InheritedWidget",
    "tag": "Code Reading",
    "question": "Which `BuildContext` method does `AppData.of(context)` call to look up and subscribe to an ancestor `InheritedWidget`?",
    "options": [
      "context.watchAncestor<AppData>()",
      "context.findWidgetById<AppData>()",
      "context.dependOnInheritedWidgetOfExactType<AppData>()",
      "context.getInheritedState<AppData>()"
    ],
    "answer": 2,
    "explanation": "`context.dependOnInheritedWidgetOfExactType<AppData>()!` tìm `InheritedWidget` cùng kiểu gần nhất phía trên cây và đăng ký widget hiện tại rebuild khi nó đổi."
  },
  {
    "id": 138,
    "chapter": 5,
    "topic": "ChangeNotifier & Provider",
    "tag": "FPT Exam Favorite",
    "question": "Inside a `ChangeNotifier` model (e.g., `FavoritesModel`), what method MUST you call after mutating state so listening widgets rebuild?",
    "options": [
      "rebuildAll()",
      "notifyListeners()",
      "setState()",
      "updateShouldNotify()"
    ],
    "answer": 1,
    "explanation": "Class kế thừa `ChangeNotifier` phải gọi `notifyListeners()` sau khi thay đổi dữ liệu để thông báo cho các `Consumer` / `context.watch` rebuild."
  },
  {
    "id": 139,
    "chapter": 5,
    "topic": "Provider",
    "tag": "FPT Exam Favorite",
    "question": "What is the difference between `context.watch<T>()` and `context.read<T>()` when using the `provider` package?",
    "options": [
      "`context.watch<T>()` listens and rebuilds the widget on changes (used in `build`), while `context.read<T>()` retrieves the model WITHOUT listening (used inside callbacks like `onPressed`)",
      "`context.watch<T>()` is only for `Future`, while `context.read<T>()` is only for `Stream`",
      "There is no difference; they are exact synonyms",
      "`context.read<T>()` rebuilds the widget every frame, while `context.watch<T>()` is read-only"
    ],
    "answer": 0,
    "explanation": "Cực hay ra thi! `context.watch<T>()` (hoặc `Consumer<T>`) đăng ký lắng nghe để rebuild UI; `context.read<T>()` chỉ lấy đối tượng để gọi hàm mutate trong sự kiện (`onPressed`) mà không đăng ký lắng nghe."
  },
  {
    "id": 140,
    "chapter": 5,
    "topic": "Provider Placement",
    "tag": "Exam Trap",
    "question": "Why should a shared `ChangeNotifierProvider` (e.g., for `FavoritesModel` or `AppState`) be placed ABOVE `MaterialApp`?",
    "options": [
      "Because placing it below `Scaffold` disables Hot Reload",
      "Because `MaterialApp` cannot have child widgets",
      "Because `ChangeNotifierProvider` only works before `void main()`",
      "So the shared state lives ABOVE the root `Navigator` and survives moving across different screens/routes"
    ],
    "answer": 3,
    "explanation": "Đặt `ChangeNotifierProvider` phía trên `MaterialApp` giúp state tồn tại độc lập phía trên `Navigator`, chia sẻ xuyên suốt các màn hình (`LoginScreen` → `MovieListScreen` → `MovieDetailScreen`)."
  },
  {
    "id": 141,
    "chapter": 5,
    "topic": "Navigator 1.0 Basics",
    "tag": "Core Concept",
    "question": "What data structure does Flutter's `Navigator` widget use to manage screens (routes)?",
    "options": [
      "A Hash Table",
      "A FIFO Queue",
      "A Binary Search Tree",
      "A LIFO Stack of routes (push adds on top, pop removes from top)"
    ],
    "answer": 3,
    "explanation": "`Navigator` quản lý các màn hình (routes) theo cấu trúc **Stack (LIFO)**: mở màn mới là `push()` lên đỉnh, quay lại là `pop()` lấy màn trên cùng ra."
  },
  {
    "id": 142,
    "chapter": 5,
    "topic": "Navigator Methods",
    "tag": "FPT Exam Favorite",
    "question": "What happens if you call `Navigator.pop(context)` on the ROOT screen (the only remaining route in the stack), and which method prevents this issue?",
    "options": [
      "It pops the last route leaving a BLACK SCREEN; use `Navigator.maybePop(context)` which does nothing if popping is unsafe",
      "It automatically opens the Drawer; use `Navigator.close()`",
      "It throws a compile-time error; use `Navigator.popUntil()`",
      "It restarts the app; use `Navigator.safePop()`"
    ],
    "answer": 0,
    "explanation": "Slide 5: Gọi `pop()` ở màn hình gốc có thể gây màn hình đen (black screen); `maybePop()` chỉ pop nếu stack còn màn phía dưới để quay về an toàn."
  },
  {
    "id": 143,
    "chapter": 5,
    "topic": "Navigator Methods",
    "tag": "Core Concept",
    "question": "What is the main difference between `Navigator.push()` and `Navigator.pushReplacement()`?",
    "options": [
      "`pushReplacement()` clears the entire stack all the way to the root",
      "`pushReplacement()` cannot return a `Future`",
      "`push()` cannot use `MaterialPageRoute`",
      "`pushReplacement()` replaces the current top route so the old screen is removed from the stack, whereas `push()` keeps the old screen underneath"
    ],
    "answer": 3,
    "explanation": "`pushReplacement()` thay thế route hiện tại trên đỉnh stack (xóa màn cũ đi để bấm Back không quay lại nó), còn `push()` xếp chồng thêm lên trên."
  },
  {
    "id": 144,
    "chapter": 5,
    "topic": "Logout & Auth Navigation",
    "tag": "FPT Exam Favorite",
    "question": "After a user logs out (or successfully logs in), why should you navigate using `Navigator.pushNamedAndRemoveUntil(context, '/login', (route) => false)`?",
    "code": "Navigator.pushNamedAndRemoveUntil(\n  context,\n  '/login',\n  (Route<dynamic> route) => false,\n);",
    "options": [
      "Because `(route) => false` clears the ENTIRE navigation history so pressing the Back button cannot leak back to protected screens",
      "Because it keeps the previous dashboard screen cached in the stack",
      "Because it automatically deletes SharedPreferences",
      "Because `pushNamed` cannot navigate to routes starting with `/`"
    ],
    "answer": 0,
    "explanation": "Predicate `(route) => false` xóa sạch toàn bộ lịch sử stack trước khi push màn mới — chuẩn bảo mật cho luồng Login/Logout để nút Back không quay lại màn cũ!"
  },
  {
    "id": 145,
    "chapter": 5,
    "topic": "pushNamedAndRemoveUntil",
    "tag": "Code Reading",
    "question": "In `Navigator.pushNamedAndRemoveUntil(context, '/confirm', (route) => route.isFirst)`, which existing routes survive in the stack?",
    "options": [
      "Only the very first (root) route survives underneath `/confirm`",
      "Every route survives except the root route",
      "Only the top two routes survive",
      "No routes survive; the entire stack is cleared"
    ],
    "answer": 0,
    "explanation": "Slide 5: `(route) => false` xóa sạch tất cả; `(route) => route.isFirst` dừng xóa khi gặp màn gốc đầu tiên, tức là giữ lại mỗi root route."
  },
  {
    "id": 146,
    "chapter": 5,
    "topic": "Returning Data",
    "tag": "Code Reading",
    "question": "How does Screen B send a selected movie title `'Inception'` back to Screen A that opened it with `await Navigator.push(...)`?",
    "code": "// Screen A:\nfinal picked = await Navigator.push(\n  context,\n  MaterialPageRoute(builder: (_) => const MoviePickerScreen()),\n);",
    "options": [
      "Navigator.pop(context, 'Inception');",
      "Navigator.pushBack(context, 'Inception');",
      "Navigator.returnData(context, 'Inception');",
      "ModalRoute.of(context)!.send('Inception');"
    ],
    "answer": 0,
    "explanation": "`Navigator.push` (và `pushNamed`, `showDialog`) trả về `Future<T?>` hoàn tất với đúng giá trị truyền vào tham số thứ 2 của `Navigator.pop(context, result)`."
  },
  {
    "id": 147,
    "chapter": 5,
    "topic": "Async Navigation Safety",
    "tag": "Exam Trap",
    "question": "After `final picked = await Navigator.push(...)`, what MUST you check before calling `ScaffoldMessenger.of(context).showSnackBar(...)`?",
    "options": [
      "if (picked is Future)",
      "if (Navigator.canPop(context))",
      "if (context.mounted)",
      "if (Theme.of(context) != null)"
    ],
    "answer": 2,
    "explanation": "Slide 5 Appendix: Sau bất kỳ `await` nào trên Navigator Future, màn hình gọi có thể đã bị gỡ khỏi cây widget → luôn kiểm tra `if (context.mounted)` trước khi dùng lại `context`!"
  },
  {
    "id": 148,
    "chapter": 5,
    "topic": "Named Routes",
    "tag": "Core Concept",
    "question": "Why is `onGenerateRoute` needed in `MaterialApp` when screens require dynamic route arguments?",
    "options": [
      "Because `routes` is only supported on iOS",
      "Because `routes` does not support `Navigator.pushNamed`",
      "Because `onGenerateRoute` automatically generates AndroidManifest intent-filters",
      "Because the static `routes` map cannot easily inspect `RouteSettings` to pass constructor arguments or validate input dynamically"
    ],
    "answer": 3,
    "explanation": "Map `routes` tĩnh không xây dựng được màn hình có tham số động → `onGenerateRoute: (settings)` chặn yêu cầu điều hướng, đọc `settings.name` & `settings.arguments` để dựng route."
  },
  {
    "id": 149,
    "chapter": 5,
    "topic": "Reading Arguments",
    "tag": "Code Reading",
    "question": "When `Navigator.pushNamed(context, '/movieDetail', arguments: {'id': '12'})` is called, how does `MovieDetailScreen` read those arguments from `BuildContext`?",
    "code": "final args = ModalRoute.of(context)!.settings.arguments\n    as Map<String, dynamic>?;",
    "options": [
      "ModalRoute.of(context)!.settings.arguments",
      "MaterialApp.of(context).routeArgs",
      "RouteSettings.current(context)",
      "Navigator.of(context).arguments"
    ],
    "answer": 0,
    "explanation": "`ModalRoute.of(context)!.settings.arguments` leo ngược cây element để lấy `RouteSettings` của route hiện tại (lưu ý `onGenerateRoute` cần truyền `settings: settings` vào `MaterialPageRoute`)."
  },
  {
    "id": 150,
    "chapter": 5,
    "topic": "Unknown Routes",
    "tag": "Core Concept",
    "question": "What happens in `MaterialApp` if `onGenerateRoute` returns `null` for an unrecognized route name?",
    "options": [
      "Flutter restarts `main()` automatically",
      "Flutter falls through to `onUnknownRoute` (if defined), letting you show a friendly 'Screen not found' page instead of crashing",
      "Flutter opens the system web browser",
      "Flutter silently stays on the home screen without any callback"
    ],
    "answer": 1,
    "explanation": "Khi `onGenerateRoute` trả về `null`, Flutter chuyển tiếp sang `onUnknownRoute` để hiển thị trang fallback 404 thay vì crash."
  },
  {
    "id": 151,
    "chapter": 5,
    "topic": "Type-Safe Route Args",
    "tag": "Best Practice",
    "question": "Why do Module 5 best practices recommend passing a typed model class (e.g., `Movie`) as route arguments instead of `Map<String, dynamic>`?",
    "options": [
      "Because `ModalRoute` only accepts classes extending `StatelessWidget`",
      "Because typed objects turn argument/key typos into compile-time checks instead of runtime cast/null bugs",
      "Because `Map<String, dynamic>` cannot be passed to `pushNamed`",
      "Because `Map` is slower than HTTP requests"
    ],
    "answer": 1,
    "explanation": "Truyền object có kiểu cụ thể (typed object) giúp compiler bắt lỗi ngay lúc biên dịch thay vì sai tên key hoặc lỗi ép kiểu lúc runtime."
  },
  {
    "id": 152,
    "chapter": 5,
    "topic": "Navigator 2.0",
    "tag": "FPT Exam Favorite",
    "question": "What is the core philosophical difference between Navigator 1.0 and Navigator 2.0 (Router API)?",
    "options": [
      "Navigator 2.0 removes the `Navigator` widget completely",
      "Navigator 1.0 is imperative (UI commands `push`/`pop`), while Navigator 2.0 is declarative (the stack of `pages` is derived directly from app state)",
      "Navigator 1.0 only works on Web, while Navigator 2.0 only works on Android",
      "Navigator 1.0 is declarative (`pages` list), while Navigator 2.0 is imperative (`push`/`pop`)"
    ],
    "answer": 1,
    "explanation": "Navigator 1.0 = Imperative (`push`/`pop`); Navigator 2.0 = Declarative (mô tả danh sách `pages` từ app state — state đổi thì stack tự cập nhật khớp theo)."
  },
  {
    "id": 153,
    "chapter": 5,
    "topic": "Navigator 2.0 Cast",
    "tag": "FPT Exam Favorite",
    "question": "In Flutter's Navigator 2.0 Router architecture, which component holds the app's navigation state and builds the `Navigator(pages: [...])` list from it?",
    "options": [
      "BackButtonDispatcher",
      "RouteInformationParser",
      "RouteInformationProvider",
      "RouterDelegate"
    ],
    "answer": 3,
    "explanation": "4 thành phần Router API (Slide 5): `RouteInformationProvider` (báo URL hiện tại), `RouteInformationParser` (parse URL thành app state), `RouterDelegate` (giữ state & dựng `pages`), `BackButtonDispatcher` (chuyển nút Back vào delegate)."
  },
  {
    "id": 154,
    "chapter": 5,
    "topic": "Navigator 2.0 Cast",
    "tag": "Core Concept",
    "question": "In Navigator 2.0, what is the role of `RouteInformationParser`?",
    "options": [
      "Saving routes into SQLite",
      "Parsing OS/browser `RouteInformation` (URL) into your app's typed route state (and converting state back to URL)",
      "Listening to Android hardware Back button presses",
      "Rendering `MaterialPageRoute` fade transitions"
    ],
    "answer": 1,
    "explanation": "`RouteInformationParser` chuyển đổi qua lại giữa `RouteInformation` (URL từ OS/browser) và kiểu state route của ứng dụng."
  },
  {
    "id": 155,
    "chapter": 5,
    "topic": "Navigator 2.0 Cast",
    "tag": "Core Concept",
    "question": "Which Navigator 2.0 component routes system Back button presses into the `RouterDelegate`?",
    "options": [
      "BackButtonDispatcher",
      "MaterialPage",
      "RouteInformationProvider",
      "ModalRoute"
    ],
    "answer": 0,
    "explanation": "`BackButtonDispatcher` tiếp nhận sự kiện bấm Back của hệ điều hành và chuyển vào `RouterDelegate`."
  },
  {
    "id": 156,
    "chapter": 5,
    "topic": "Navigator 2.0 Page API",
    "tag": "Code Reading",
    "question": "In Flutter's declarative `Navigator(pages: [...])` API, which modern callback replaces the deprecated `onPopPage` to sync state when a page is popped?",
    "code": "Navigator(\n  pages: [\n    const MaterialPage(key: ValueKey('List'), child: MovieListScreen()),\n    if (selected != null)\n      MaterialPage(key: ValueKey(selected), child: MovieDetailScreen(movie: selected!)),\n  ],\n  onDidRemovePage: (Page page) => setState(() => selected = null),\n)",
    "options": [
      "onRouteCleared",
      "onBackPressed",
      "onDidRemovePage",
      "onUnknownRoute"
    ],
    "answer": 2,
    "explanation": "Slide 5 nhấn mạnh: `onDidRemovePage` là callback hiện đại thay thế cho `onPopPage` (đã deprecated)."
  },
  {
    "id": 157,
    "chapter": 5,
    "topic": "go_router",
    "tag": "Core Concept",
    "question": "Why do most production teams adopt a package like `go_router` instead of writing raw Navigator 2.0 `RouterDelegate` and `RouteInformationParser` classes by hand?",
    "options": [
      "Because raw Router API is boilerplate-heavy, and `go_router` wraps that plumbing cleanly for URLs, deep links, and redirects",
      "Because `go_router` runs without Dart",
      "Because `go_router` removes the need for `MaterialApp`",
      "Because raw Navigator 2.0 does not support deep links"
    ],
    "answer": 0,
    "explanation": "Raw Router API rất nhiều boilerplate; các dự án thực tế thường dùng `go_router` triển khai sẵn phần plumbing đó."
  },
  {
    "id": 158,
    "chapter": 5,
    "topic": "Deep Linking URI",
    "tag": "Code Reading",
    "question": "Given `final uri = Uri.parse('movieapps://movies?id=12');`, what are the values of `uri.scheme`, `uri.host`, and `uri.queryParameters['id']`?",
    "options": [
      "`'movies'`, `'movieapps'`, `'id=12'`",
      "`'https'`, `'movieapps'`, `12` (int)",
      "`'movieapps://'`, `'movies'`, `null`",
      "`'movieapps'`, `'movies'`, `'12'` (String)"
    ],
    "answer": 3,
    "explanation": "Cấu trúc URI: scheme = `'movieapps'`, host = `'movies'`, queryParameters['id'] = `'12'` (lưu ý `queryParameters` luôn có giá trị kiểu `String`)."
  },
  {
    "id": 159,
    "chapter": 5,
    "topic": "Android Deep Linking",
    "tag": "FPT Exam Favorite",
    "question": "Where do you register an Android deep link `<intent-filter>` in a Flutter project?",
    "options": [
      "ios/Runner/Info.plist",
      "android/app/src/main/AndroidManifest.xml (inside `<activity>`)",
      "lib/routes.xml",
      "pubspec.yaml"
    ],
    "answer": 1,
    "explanation": "Trên Android, `<intent-filter>` chứa `ACTION_VIEW`, `DEFAULT`, `BROWSABLE` và `<data android:scheme=... android:host=.../>` được đặt trong `<activity>` của `android/app/src/main/AndroidManifest.xml`."
  },
  {
    "id": 160,
    "chapter": 5,
    "topic": "Android Deep Linking",
    "tag": "Core Concept",
    "question": "In an Android `<intent-filter>` for deep linking, what does `<category android:name=\"android.intent.category.BROWSABLE\" />` enable?",
    "options": [
      "Compiles the Flutter app into a web bundle",
      "Allows the link to be launched safely from a web browser",
      "Enables SQLite database browsing",
      "Bypasses Android runtime permissions"
    ],
    "answer": 1,
    "explanation": "Slide 5: `BROWSABLE` giúp đường link mở được từ trình duyệt web; `DEFAULT` giúp app xuất hiện trong danh sách chooser của Android."
  },
  {
    "id": 161,
    "chapter": 5,
    "topic": "Testing Android Deep Link",
    "tag": "Code Reading",
    "question": "Which `adb` command simulates firing a deep link (`movieapps://movies?id=12`) on a running Android emulator?",
    "options": [
      "adb logcat -d movieapps://movies?id=12",
      "adb shell am start -a android.intent.action.VIEW -d \"movieapps://movies?id=12\"",
      "flutter run --deeplink movieapps://movies?id=12",
      "adb push movieapps://movies?id=12"
    ],
    "answer": 1,
    "explanation": "Lệnh chuẩn test deep link Android (Slide 5): `adb shell am start -a android.intent.action.VIEW -d \"movieapps://movies?id=12\"`."
  },
  {
    "id": 162,
    "chapter": 5,
    "topic": "iOS Deep Linking",
    "tag": "FPT Exam Favorite",
    "question": "Where is a custom URL scheme (like `movieapps://`) registered on iOS, and what key holds it?",
    "options": [
      "lib/main.dart → `IosUrlScheme`",
      "ios/Runner/AndroidManifest.xml → `intent-filter`",
      "pubspec.yaml → `ios_schemes`",
      "ios/Runner/Info.plist → `CFBundleURLTypes` / `CFBundleURLSchemes`"
    ],
    "answer": 3,
    "explanation": "Trên iOS, đăng ký custom URL scheme trong `ios/Runner/Info.plist` dưới khóa `CFBundleURLTypes` → `CFBundleURLSchemes`."
  },
  {
    "id": 163,
    "chapter": 5,
    "topic": "Testing iOS Deep Link",
    "tag": "Core Concept",
    "question": "Which macOS command tests opening a custom URL scheme on a booted iOS Simulator?",
    "options": [
      "flutter ios open \"movieapps://movies?id=12\"",
      "adb shell openurl \"movieapps://movies?id=12\"",
      "xcodebuild --url \"movieapps://movies?id=12\"",
      "xcrun simctl openurl booted \"movieapps://movies?id=12\""
    ],
    "answer": 3,
    "explanation": "Slide 5: Test iOS Simulator dùng `xcrun simctl openurl booted \"movieapps://movies?id=12\"`."
  },
  {
    "id": 164,
    "chapter": 5,
    "topic": "Custom Scheme vs Verified Links",
    "tag": "Exam Trap",
    "question": "Why are verified HTTPS App Links (Android) and Universal Links (iOS) preferred over custom URL schemes (`movieapps://`) for production apps?",
    "options": [
      "Custom schemes do not support query parameters",
      "Custom schemes only work on Flutter Web",
      "Any app can claim the same custom scheme (hijack/collision risk), whereas HTTPS App/Universal Links verify domain ownership (e.g., via `assetlinks.json` / Associated Domains)",
      "HTTPS links do not require any server configuration file"
    ],
    "answer": 2,
    "explanation": "Bẫy Slide 5: Custom scheme không độc quyền — bất kỳ app nào cũng đăng ký trùng được. Production nên dùng App Links (`autoVerify` + `assetlinks.json`) và Universal Links (`Associated Domains` + file xác thực trên web server)."
  },
  {
    "id": 165,
    "chapter": 5,
    "topic": "Receiving Deep Links in Dart",
    "tag": "Core Concept",
    "question": "Why does the `app_links` package expose incoming deep links while the app is running as a `Stream<Uri>` rather than a single `Future<Uri>`?",
    "options": [
      "Because deep links can keep arriving multiple times throughout the app's lifetime (whereas a `Future` only captures a one-shot initial link)",
      "Because `Future` does not work on iOS",
      "Because `Stream<Uri>` automatically encrypts the URL",
      "Because Dart does not support `Future<Uri>`"
    ],
    "answer": 0,
    "explanation": "Nối kiến thức Chương 3: Link lúc cold-start là 1 lần (`Future`), còn khi app đang sống link có thể đổ về nhiều lần liên tục → phải dùng `Stream<Uri>`!"
  },
  {
    "id": 166,
    "chapter": 5,
    "topic": "Deep Link Security",
    "tag": "Best Practice",
    "question": "According to OWASP M3 best practices in Module 5, how must your app treat incoming deep-link URIs and route arguments?",
    "options": [
      "Treat them as an untrusted boundary — validate scheme, host, presence of parameters, and types before casting or navigating",
      "Trust them unconditionally because they come from the OS",
      "Force-unwrap all query parameters with `!` immediately",
      "Execute them directly as SQL queries"
    ],
    "answer": 0,
    "explanation": "Slide 5 Appendix: Deep link và route arguments vượt qua trust boundary (OWASP M3) → luôn kiểm tra scheme, host, kiểu dữ liệu trước khi cast và có fallback an toàn."
  },
  {
    "id": 167,
    "chapter": 5,
    "topic": "Route Guards",
    "tag": "Code Reading",
    "question": "In the snippet below, why does `goToHome` use `context.read<AppState>().loggedIn` instead of `context.watch<AppState>().loggedIn`?",
    "code": "void goToHome(BuildContext context) {\n  if (context.read<AppState>().loggedIn) {\n    Navigator.pushNamed(context, '/dashboard');\n  } else {\n    Navigator.pushNamed(context, '/login');\n  }\n}",
    "options": [
      "Because `goToHome` is an imperative event handler / callback (not inside `build()`), so it only needs a one-time read without subscribing to rebuilds",
      "Because `context.watch` cannot read booleans",
      "Because `context.read` automatically calls `notifyListeners()`",
      "Because `Navigator` does not work with `watch`"
    ],
    "answer": 0,
    "explanation": "Bên ngoài `build()` (trong event callbacks/handlers), luôn dùng `context.read<T>()` — gọi `context.watch<T>()` trong `onPressed` sẽ ném lỗi Provider!"
  },
  {
    "id": 168,
    "chapter": 5,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Which of the following statements matches Module 5's 'When NOT to Follow the Hype' advice?",
    "options": [
      "Always adopt raw Navigator 2.0 even for a simple 3-screen linear app",
      "Copying an Android `<intent-filter>` with `https://` works without hosting `assetlinks.json`",
      "If state belongs strictly to one screen, `setState` is the right tool; add `Provider` only when state truly needs to cross screens",
      "Named routes are completely useless and must be deleted from every small project"
    ],
    "answer": 2,
    "explanation": "Slide 5 ('When NOT to Follow the Hype'): State gói gọn trong 1 màn hình dùng `setState` là chuẩn xác; chỉ thêm `Provider` khi state thực sự cần chia sẻ giữa nhiều màn hình."
  }
);
