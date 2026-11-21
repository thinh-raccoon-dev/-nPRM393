window.PRM393_QUESTIONS.push(
  {
    "id": 68,
    "chapter": 3,
    "topic": "Abstract Classes",
    "tag": "Core Concept",
    "question": "Which statement is TRUE about an `abstract class` in Dart?",
    "options": [
      "It cannot be instantiated directly and defines a contract that subclasses implement",
      "All of its methods must have empty bodies",
      "It cannot contain any fields or concrete methods",
      "It can be instantiated directly with its default constructor"
    ],
    "answer": 0,
    "explanation": "`abstract class` không thể khởi tạo trực tiếp bằng constructor, dùng để định nghĩa hợp đồng (ví dụ `State<T>` trong Flutter buộc lớp con `@override build()`)."
  },
  {
    "id": 69,
    "chapter": 3,
    "topic": "Implicit Interfaces",
    "tag": "FPT Exam Favorite",
    "question": "In Dart, how do you create an interface that another class can `implements`?",
    "options": [
      "Every class in Dart automatically defines an implicit interface containing all of its instance members",
      "You must declare it using the `interface` keyword only, as regular classes cannot be implemented",
      "Only mixins can be used with `implements`",
      "Only classes annotated with `@interface` can be implemented"
    ],
    "answer": 0,
    "explanation": "Mọi class trong Dart tự động sinh ra một **implicit interface**! Khi dùng `implements`, lớp con chỉ nhận chữ ký (contract), KHÔNG thừa hưởng thân code và phải `@override` toàn bộ member."
  },
  {
    "id": 70,
    "chapter": 3,
    "topic": "extends vs implements vs with",
    "tag": "FPT Exam Favorite",
    "question": "In Dart class declarations, which rule accurately summarizes `extends`, `implements`, and `with`?",
    "options": [
      "A class using `with` cannot use `extends`",
      "A class can extend multiple superclasses, but implement only one interface",
      "`implements` inherits method bodies while `extends` copies signatures only",
      "A class can extend ONLY ONE superclass, but can implement MANY interfaces and mix in MANY mixins"
    ],
    "answer": 3,
    "explanation": "Quy tắc vàng (Slide 3): Chỉ `extends` TỐI ĐA 1 lớp cha (kế thừa code), nhưng có thể `implements` NHIỀU interface (chỉ nhận contract) và `with` NHIỀU mixin."
  },
  {
    "id": 71,
    "chapter": 3,
    "topic": "Mixin Constraints",
    "tag": "Code Reading",
    "question": "Why does the mixin `CanBark` below use the `on Pet` clause?",
    "code": "class Pet {\n  String name;\n  Pet(this.name);\n}\nmixin CanBark on Pet {\n  void bark() => print('$name says woof!');\n}",
    "options": [
      "To restrict `CanBark` so it can ONLY be applied to classes extending `Pet`, allowing it to safely access `Pet`'s `name` member",
      "To prevent `Pet` subclasses from overriding `bark()`",
      "To make `CanBark` automatically inherit constructors from `Pet`",
      "To allow `CanBark` to be instantiated directly as `CanBark()`"
    ],
    "answer": 0,
    "explanation": "`mixin X on Y` ràng buộc mixin `X` chỉ áp dụng được cho class kế thừa `Y`, nhờ đó bên trong mixin có thể gọi trực tiếp các thuộc tính/method của `Y` (`$name`)."
  },
  {
    "id": 72,
    "chapter": 3,
    "topic": "Generics",
    "tag": "Core Concept",
    "question": "Why are generics (`List<T>`, `Future<T>`, `Box<T>`) heavily used across Dart and Flutter?",
    "options": [
      "They convert all variables to `dynamic` at runtime",
      "They automatically serialize classes to SQLite tables",
      "They allow widgets to skip calling `build()`",
      "They provide compile-time type safety and code reuse without sacrificing type checks"
    ],
    "answer": 3,
    "explanation": "Generics là khuôn mẫu kiểu (type templates): viết một lần, tái sử dụng an toàn với kiểm tra kiểu lúc compile-time, tránh lạm dụng `dynamic`."
  },
  {
    "id": 73,
    "chapter": 3,
    "topic": "Generic Constraints",
    "tag": "Code Reading",
    "question": "What does `<T extends Animal>` allow inside the generic class `Box` below?",
    "code": "abstract class Animal { String sound(); }\nclass Box<T extends Animal> {\n  T pet;\n  Box(this.pet);\n  void play() => print(pet.sound());\n}",
    "options": [
      "It makes `pet` nullable by default",
      "It constrains `T` to `Animal` or its subclasses, enabling `Box` to safely call `pet.sound()` at compile time",
      "It forces `Box` to implement `Animal`",
      "It allows `Box<String>` and `Box<int>` to be created"
    ],
    "answer": 1,
    "explanation": "Generic constraint `T extends Animal` đảm bảo `T` là lớp con của `Animal`, giúp trình biên dịch cho phép gọi `pet.sound()` bên trong `Box`."
  },
  {
    "id": 74,
    "chapter": 3,
    "topic": "Custom Exceptions",
    "tag": "Core Concept",
    "question": "What is the standard Dart signature for creating a custom domain exception class?",
    "options": [
      "mixin LoginException on Object",
      "class LoginException implements Exception",
      "class LoginException extends Error",
      "abstract class LoginException with Throwable"
    ],
    "answer": 1,
    "explanation": "Chuẩn Dart (Slide 3): `class LoginException implements Exception` và override `toString()`, giúp bắt chính xác bằng `on LoginException catch (e)`."
  },
  {
    "id": 75,
    "chapter": 3,
    "topic": "Event Loop",
    "tag": "FPT Exam Favorite",
    "question": "In Dart's Event Loop, which queue has the HIGHEST priority and is completely drained before the next event-queue item runs?",
    "options": [
      "Timer queue",
      "Event queue",
      "Microtask queue",
      "Isolate queue"
    ],
    "answer": 2,
    "explanation": "Thứ tự mỗi vòng tick của Event Loop: Chạy hết code đồng bộ (Sync) → rút cạn TOÀN BỘ Microtask queue (priority cao nhất) → lấy 1 item từ Event queue → lặp lại!"
  },
  {
    "id": 76,
    "chapter": 3,
    "topic": "Event Loop",
    "tag": "Code Output",
    "question": "What is the EXACT console output of this Dart program?",
    "code": "import 'dart:async';\nvoid main() {\n  print('A');\n  scheduleMicrotask(() => print('micro'));\n  Future(() => print('future'));\n  print('B');\n}",
    "options": [
      "A, B, micro, future",
      "A, B, future, micro",
      "A, micro, future, B",
      "micro, A, B, future"
    ],
    "answer": 0,
    "explanation": "Kinh điển nhất Chương 3! Code đồng bộ chạy trước (`A`, `B`) → Microtask queue (`micro`) → Event queue (`future`)."
  },
  {
    "id": 77,
    "chapter": 3,
    "topic": "Event Loop",
    "tag": "Code Output",
    "question": "What is the EXACT output order of the following Dart snippet?",
    "code": "import 'dart:async';\nvoid main() {\n  Future(() => print('1'));\n  scheduleMicrotask(() => print('2'));\n  Future.microtask(() => print('3'));\n  print('4');\n}",
    "options": [
      "4, 1, 2, 3",
      "4, 2, 3, 1",
      "2, 3, 4, 1",
      "4, 3, 2, 1"
    ],
    "answer": 1,
    "explanation": "`print('4')` là sync chạy đầu tiên; sau đó hai microtask chạy theo FIFO (`2` rồi `3`); cuối cùng Event queue chạy `Future(() => print('1'))`."
  },
  {
    "id": 78,
    "chapter": 3,
    "topic": "Event Loop",
    "tag": "Exam Trap",
    "question": "What happens to a Flutter UI if a microtask continuously schedules another microtask forever?",
    "options": [
      "Flutter automatically moves the microtasks to a background Isolate",
      "The Dart VM skips every second microtask to keep 60 FPS",
      "The event queue starves and never gets to process UI frames or taps, freezing the app even though everything is 'async'",
      "Nothing happens because microtasks have lower priority than UI events"
    ],
    "answer": 2,
    "explanation": "Vì Event Loop phải xả sạch toàn bộ Microtask queue trước khi xử lý 1 mục ở Event queue, microtask vô tận sẽ làm 'đói' Event queue (starvation) → UI bị treo hoàn toàn!"
  },
  {
    "id": 79,
    "chapter": 3,
    "topic": "Future Chaining",
    "tag": "Code Output",
    "question": "What does the following `Future` chain print?",
    "code": "Future(() => 1)\n  .then((v) => v + 1)\n  .then((v) => v * 3)\n  .then((v) => print(v));",
    "options": [
      "6",
      "4",
      "1",
      "2"
    ],
    "answer": 0,
    "explanation": "Giá trị đi qua chuỗi `.then`: `1` → `1 + 1 = 2` → `2 * 3 = 6` → in `6`."
  },
  {
    "id": 80,
    "chapter": 3,
    "topic": "Future.wait",
    "tag": "FPT Exam Favorite",
    "question": "`fetchUser()` takes 300 ms and `fetchScores()` takes 300 ms. Approximately how long does `await Future.wait([fetchUser(), fetchScores()])` take?",
    "code": "var r = await Future.wait([fetchUser(), fetchScores()]);",
    "options": [
      "~300 ms because `Future.wait` runs both Futures concurrently and waits for all to complete",
      "~600 ms because they execute sequentially",
      "~900 ms due to microtask overhead",
      "0 ms because `Future.wait` does not await results"
    ],
    "answer": 0,
    "explanation": "`await` lần lượt sẽ mất 600 ms, còn `Future.wait([...])` khởi chạy các Future đồng thời nên tổng thời gian xấp xỉ bằng tác vụ lâu nhất (~300 ms)."
  },
  {
    "id": 81,
    "chapter": 3,
    "topic": "Future.wait",
    "tag": "Code Reading",
    "question": "What happens if `fetchUser()` takes 300 ms, `fetchFeed()` takes 500 ms, and you run `await Future.wait([fetchUser(), fetchFeed()]).timeout(Duration(milliseconds: 400))`?",
    "options": [
      "Only `fetchUser()` is returned in a 1-element list",
      "A `TimeoutException` is thrown at ~400 ms before `fetchFeed()` delivers",
      "The timeout is ignored when used with `Future.wait`",
      "Both results return successfully at 400 ms"
    ],
    "answer": 1,
    "explanation": "Bài tập Classwork Session 11 trong Slide 3: Vì `fetchFeed()` cần 500 ms > 400 ms nên `TimeoutException` sẽ thắng ở mốc 400 ms!"
  },
  {
    "id": 82,
    "chapter": 3,
    "topic": "Timeouts",
    "tag": "Best Practice",
    "question": "Why should production network Futures always be paired with `.timeout(...)`?",
    "options": [
      "Because Dart refuses to compile `http.get` without `.timeout()`",
      "Because `.timeout()` makes the server respond faster",
      "Because real networks can hang indefinitely; bounding the wait lets your app catch `TimeoutException` and recover gracefully",
      "Because `.timeout()` automatically caches the response on disk"
    ],
    "answer": 2,
    "explanation": "Mạng thực tế có thể bị treo vô hạn; gắn `.timeout()` giới hạn thời gian chờ và ném `TimeoutException` để UI xử lý thay vì đóng băng tính năng."
  },
  {
    "id": 83,
    "chapter": 3,
    "topic": "Future vs Stream",
    "tag": "FPT Exam Favorite",
    "question": "What is the cleanest one-line difference between `Future<T>` and `Stream<T>`?",
    "options": [
      "`Future<T>` is synchronous; `Stream<T>` is asynchronous",
      "`Future<T>` is for UI widgets; `Stream<T>` is only for SQLite queries",
      "`Future<T>` delivers a single value (or error) later; `Stream<T>` delivers a sequence of values over time",
      "`Future<T>` runs on a background thread; `Stream<T>` runs on the UI thread"
    ],
    "answer": 2,
    "explanation": "Định nghĩa chuẩn trong Slide 3: `Future<T>` = one value later (one-shot: HTTP, file read, DB query); `Stream<T>` = sequence of values over time (chat, ticks, sensors, live search)."
  },
  {
    "id": 84,
    "chapter": 3,
    "topic": "Stream Generators",
    "tag": "FPT Exam Favorite",
    "question": "Which pair of Dart keywords is used to write a Stream generator function that emits values one by one?",
    "options": [
      "`stream` and `push`",
      "`async` and `return`",
      "`sync` and `emit`",
      "`async*` and `yield`"
    ],
    "answer": 3,
    "explanation": "Stream generator dùng `async*` ở chữ ký hàm và `yield` để phát từng giá trị vào stream (và dùng `await for` để duyệt)."
  },
  {
    "id": 85,
    "chapter": 3,
    "topic": "Stream Generators",
    "tag": "Code Output",
    "question": "What does the following Dart stream pipeline print?",
    "code": "Stream<int> ticks() async* {\n  for (var i = 1; i <= 5; i++) yield i;\n}\nvoid main() async {\n  var s = ticks().where((n) => n.isEven).map((n) => n * 10);\n  await for (var v in s) print(v);\n}",
    "options": [
      "10, 20, 30, 40, 50",
      "20, 40",
      "2, 4",
      "10, 30, 50"
    ],
    "answer": 1,
    "explanation": "`ticks()` phát `1..5`; `.where((n) => n.isEven)` giữ lại `2, 4`; `.map((n) => n * 10)` biến thành `20, 40`."
  },
  {
    "id": 86,
    "chapter": 3,
    "topic": "StreamController",
    "tag": "FPT Exam Favorite",
    "question": "By default, how many listeners can subscribe to a `StreamController<T>()` stream, and how do you allow multiple listeners?",
    "options": [
      "Up to two listeners by default; use `.multi()` for more",
      "Multiple listeners by default; use `.single()` for one listener",
      "Only ONE listener (single-subscription) by default; use `StreamController<T>.broadcast()` for multiple listeners",
      "Zero listeners until `close()` is called"
    ],
    "answer": 2,
    "explanation": "Mặc định `StreamController` là single-subscription (chỉ 1 listener). Muốn nhiều listener cùng nghe phải tạo `StreamController<T>.broadcast()`."
  },
  {
    "id": 87,
    "chapter": 3,
    "topic": "StreamController",
    "tag": "Best Practice",
    "question": "What must you ALWAYS do with a `StreamController` and any manual `StreamSubscription` when a widget is disposed?",
    "options": [
      "Set them to `dynamic` so the garbage collector ignores them",
      "Call `setState()` inside `dispose()`",
      "Call `controller.close()` and `subscription.cancel()` inside `dispose()` to avoid memory leaks",
      "Nothing; Dart automatically cancels manual `listen()` subscriptions when any widget rebuilds"
    ],
    "answer": 2,
    "explanation": "Slide 3 Appendix: Mọi `StreamController` phải gọi `.close()` và mọi `StreamSubscription` tạo từ `.listen()` phải gọi `.cancel()` trong `dispose()` nếu không sẽ rò rỉ bộ nhớ (listener leak)."
  },
  {
    "id": 88,
    "chapter": 3,
    "topic": "StreamBuilder",
    "tag": "Core Concept",
    "question": "What major lifecycle convenience does Flutter's `StreamBuilder<T>` widget provide automatically?",
    "options": [
      "It converts a single-subscription stream into a broadcast stream",
      "It automatically subscribes to the stream on mount and cancels the subscription on dispose",
      "It runs the `builder` function in a separate Isolate",
      "It caches all stream events to SQLite automatically"
    ],
    "answer": 1,
    "explanation": "`StreamBuilder<T>` tự động subscribe khi widget mount và tự động cancel subscription khi widget dispose — không cần viết `initState`/`dispose` thủ công."
  },
  {
    "id": 89,
    "chapter": 3,
    "topic": "AsyncSnapshot",
    "tag": "FPT Exam Favorite",
    "question": "What are the four possible values of `snapshot.connectionState` on an `AsyncSnapshot`?",
    "options": [
      "init, running, paused, disposed",
      "open, pending, closed, error",
      "none, waiting, active, done",
      "idle, loading, success, failed"
    ],
    "answer": 2,
    "explanation": "4 giá trị của `ConnectionState`: `none`, `waiting` (chưa có event đầu tiên → hiện loader), `active` (stream đang phát), `done` (stream/future đã kết thúc)."
  },
  {
    "id": 90,
    "chapter": 3,
    "topic": "AsyncSnapshot",
    "tag": "Best Practice",
    "question": "Inside a `StreamBuilder` or `FutureBuilder` callback, why should you check `snapshot.hasError` BEFORE checking `snapshot.hasData`?",
    "options": [
      "Because errors are stream events too — checking `hasError` first ensures error UI is displayed instead of stale data or a broken state",
      "Because `snapshot.data` is only populated when `hasError` is true",
      "Because `hasError` initializes `connectionState`",
      "Because `snapshot.hasData` throws a compile error if checked first"
    ],
    "answer": 0,
    "explanation": "Slide 3 & 8 nhấn mạnh: Luôn check `snapshot.hasError` trước `hasData` vì lỗi cũng là một event từ stream/future."
  },
  {
    "id": 91,
    "chapter": 3,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "When is `StreamBuilder` the WRONG choice, and what should you use instead?",
    "options": [
      "For sensor updates — use `SharedPreferences` instead",
      "For a live chat feed — use `StatelessWidget` instead",
      "For a one-shot HTTP GET call — use `FutureBuilder` instead of wrapping a single response in a Stream",
      "For a live ticking clock — use `Future.wait` instead"
    ],
    "answer": 2,
    "explanation": "Slide 3 ('When NOT to Follow the Hype'): Cuộc gọi HTTP 1 lần là `Future` → dùng `FutureBuilder`, không ép bọc thành `Stream` + `StreamBuilder` gây dư thừa."
  },
  {
    "id": 92,
    "chapter": 3,
    "topic": "Repository Pattern",
    "tag": "FPT Exam Favorite",
    "question": "What is the main architectural goal of the Repository Pattern (`UI → Repository → Data`)?",
    "options": [
      "To eliminate the need for model classes",
      "To separate data fetching/persistence details from the presentation/UI layer so data sources can be swapped or faked for testing",
      "To replace `MaterialApp` as the root widget",
      "To force all UI widgets to write raw SQL directly"
    ],
    "answer": 1,
    "explanation": "Repository Pattern tách biệt tầng lấy dữ liệu khỏi UI: UI chỉ biết interface `UserRepository`, bên dưới có thể là `ApiRepo` (production), SQLite hay `FakeRepo` (testing)."
  },
  {
    "id": 93,
    "chapter": 3,
    "topic": "Repository Pattern",
    "tag": "Code Reading",
    "question": "Why is `UserRepository` declared as an `abstract class` and implemented by both `ApiRepo` and `FakeRepo`?",
    "code": "abstract class UserRepository { Future<String> getUser(); }\nclass ApiRepo implements UserRepository { ... }\nclass FakeRepo implements UserRepository { ... }",
    "options": [
      "Because Dart does not allow `Future` methods in concrete classes",
      "So UI and tests program to a contract — allowing `FakeRepo` test doubles without hitting a real network server",
      "So `FakeRepo` inherits all real HTTP logic from `ApiRepo`",
      "Because `implements` runs faster than `extends` at runtime"
    ],
    "answer": 1,
    "explanation": "Program to a contract: UI phụ thuộc vào `abstract class UserRepository` giúp dễ dàng thay `ApiRepo` bằng `FakeRepo` khi unit/widget test mà không cần server thật."
  },
  {
    "id": 94,
    "chapter": 3,
    "topic": "Reactive Landscape",
    "tag": "Core Concept",
    "question": "Which state management approach is summarized in Module 3 as 'InheritedWidget + dependency injection, great for app-wide simple state'?",
    "options": [
      "BLoC",
      "Stream.periodic",
      "Provider",
      "setState"
    ],
    "answer": 2,
    "explanation": "Bảng State-Management Landscape (Slide 3): `setState` (local state), `Provider` (`InheritedWidget` + DI), `BLoC` (streams in → streams out), `Riverpod` (compile-safe successor to Provider)."
  },
  {
    "id": 95,
    "chapter": 3,
    "topic": "Reactive Landscape",
    "tag": "Core Concept",
    "question": "Which state management pattern is characterized by 'streams in → streams out' for complex event-driven UIs?",
    "options": [
      "setState",
      "GlobalKey",
      "InheritedWidget",
      "BLoC"
    ],
    "answer": 3,
    "explanation": "BLoC (Business Logic Component) hoạt động theo luồng sự kiện/trạng thái dạng stream: streams in → streams out."
  },
  {
    "id": 96,
    "chapter": 3,
    "topic": "Performance",
    "tag": "Best Practice",
    "question": "Why are `const` widget constructors described as 'the cheapest performance win' in Flutter?",
    "options": [
      "They prevent `setState()` from ever being called in the app",
      "They automatically run on a separate GPU thread",
      "They compress image assets automatically",
      "They are canonicalized at compile time and can be skipped by Flutter during widget tree rebuilds"
    ],
    "answer": 3,
    "explanation": "Widget `const` được chuẩn hóa (canonicalized) lúc biên dịch thành 1 instance duy nhất, giúp Flutter bỏ qua không phải dựng lại khi cây rebuild."
  },
  {
    "id": 97,
    "chapter": 3,
    "topic": "Performance & Isolates",
    "tag": "Exam Trap",
    "question": "You need to run an expensive CPU-bound computation (like encrypting a large file or parsing huge data) without janking Flutter's UI. Which tool is appropriate?",
    "options": [
      "Offload the CPU-bound work to a separate Dart Isolate (or `compute()`)",
      "Replace `List` with `Set`",
      "Wrap the heavy `for` loop inside an `async` function on the main isolate",
      "Schedule the loop inside `scheduleMicrotask()`"
    ],
    "answer": 0,
    "explanation": "Vòng lặp CPU nặng dù đặt trong hàm `async` hay `scheduleMicrotask` vẫn chạy trên main isolate và làm giật/đơ UI! Công việc CPU-bound phải đẩy sang Isolate riêng."
  },
  {
    "id": 98,
    "chapter": 3,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Which statement aligns with the Module 3 'When NOT to Follow the Hype' guidelines?",
    "options": [
      "Spawning Isolates has overhead, so reserve Isolates for genuinely CPU-bound work rather than simple I/O",
      "Always prefer `.then()` chains over `async/await`",
      "Making a function `async` automatically makes the computation finish faster",
      "Every Flutter app, even a 1-screen counter, should immediately adopt BLoC or Riverpod"
    ],
    "answer": 0,
    "explanation": "Khởi tạo Isolate tốn chi phí nên chỉ dùng cho CPU-bound work thực sự; I/O dùng `async/await` bình thường. (`setState` hoàn toàn ổn cho local state nhỏ; `async` chỉ non-blocking chứ không làm việc chạy nhanh hơn)."
  },
  {
    "id": 99,
    "chapter": 3,
    "topic": "Stream.periodic",
    "tag": "Code Reading",
    "question": "In the snippet below, what does `break;` inside `await for` do to the `Stream.periodic` subscription?",
    "code": "await for (var n in Stream.periodic(Duration(seconds: 1), (c) => c)) {\n  print(n);\n  if (n == 5) break;\n}",
    "options": [
      "It pauses the stream forever while leaking the timer",
      "It resets `c` back to 0 and restarts the stream",
      "It throws a `StateError`",
      "It exits the loop and automatically cancels the stream subscription"
    ],
    "answer": 3,
    "explanation": "Khi thoát vòng lặp `await for` bằng `break` hoặc `return`, Dart tự động hủy (cancel) subscription của stream đó."
  },
  {
    "id": 100,
    "chapter": 3,
    "topic": "Stream Immutability",
    "tag": "Core Concept",
    "question": "When you call `var even = ticks().where((n) => n.isEven);`, what happens to the original `ticks()` stream?",
    "options": [
      "`where()` returns a new transformed Stream while leaving the source stream untouched",
      "Odd numbers are deleted from the source stream in place",
      "The source stream is converted into a `List<int>`",
      "The source stream becomes a broadcast stream automatically"
    ],
    "answer": 0,
    "explanation": "Slide 3: `where`/`map` trên Stream trả về một Stream mới, giữ nguyên stream nguồn không bị thay đổi."
  },
  {
    "id": 101,
    "chapter": 3,
    "topic": "Async Error Handling",
    "tag": "Code Reading",
    "question": "Why is `async/await` generally preferred over `.then()` chains for complex async workflows?",
    "options": [
      "`.then()` chains cannot handle errors at all",
      "`async/await` executes on multiple CPU threads automatically",
      "`async/await` produces flat, readable code that works naturally with standard `try / catch / finally` blocks",
      "`.then()` is deprecated in Dart 3"
    ],
    "answer": 2,
    "explanation": "Slide 3 Appendix: Ưu tiên `async/await` thay vì `.then()` vì code phẳng, dễ đọc và dùng được `try/catch/finally` tự nhiên."
  }
);
