window.PRM393_QUESTIONS.push(
  {
    "id": 34,
    "chapter": 2,
    "topic": "Variables",
    "tag": "FPT Exam Favorite",
    "question": "What is the key difference between `final` and `const` in Dart?",
    "options": [
      "`const` can hold `DateTime.now()`, whereas `final` cannot",
      "There is no difference; they are exact aliases",
      "`final` is a runtime constant assigned once, whereas `const` is a compile-time constant",
      "`final` can be reassigned multiple times, whereas `const` is assigned once"
    ],
    "answer": 2,
    "explanation": "`final` là hằng số lúc runtime (chỉ gán 1 lần, có thể gán giá trị tính lúc chạy như `DateTime.now()`); `const` là hằng số lúc compile-time."
  },
  {
    "id": 35,
    "chapter": 2,
    "topic": "Variables",
    "tag": "Code Reading",
    "question": "Which of the following declarations causes a COMPILE-TIME error in Dart?",
    "code": "final a = DateTime.now();\nconst b = 3.14159;\nconst c = DateTime.now();\nvar d = 'FPT';",
    "options": [
      "var d = 'FPT';",
      "const c = DateTime.now();",
      "const b = 3.14159;",
      "final a = DateTime.now();"
    ],
    "answer": 1,
    "explanation": "`DateTime.now()` chỉ biết giá trị lúc runtime nên không thể gán cho `const` (compile-time constant). Phải dùng `final`."
  },
  {
    "id": 36,
    "chapter": 2,
    "topic": "Type System",
    "tag": "FPT Exam Favorite",
    "question": "How does `dynamic` differ from `Object` in Dart's type system?",
    "options": [
      "`dynamic` checks types at compile time, while `Object` skips all compile-time checks",
      "`dynamic` and `Object` behave identically at compile time",
      "`Object` can only hold numbers, while `dynamic` can hold strings",
      "`dynamic` skips all compile-time type checks (resolved at runtime), whereas `Object` is the base class that still enforces compile-time checks"
    ],
    "answer": 3,
    "explanation": "Slide 2 nhấn mạnh: `dynamic` tắt toàn bộ kiểm tra kiểu lúc compile-time; `Object` là lớp cha của mọi đối tượng nhưng VẪN được kiểm tra kiểu lúc compile-time."
  },
  {
    "id": 37,
    "chapter": 2,
    "topic": "Type System",
    "tag": "Code Reading",
    "question": "What happens when the following Dart code is compiled?",
    "code": "var name = 'FPT University';\nname = 2026;",
    "options": [
      "It causes a compile-time error because `var` inferred `name` as `String`",
      "It compiles and changes `name` to an `int` at runtime",
      "It compiles but throws a runtime `FormatException`",
      "It converts `2026` automatically into `'2026'`"
    ],
    "answer": 0,
    "explanation": "`var` suy luận kiểu tĩnh lúc compile-time (`String`), không phải `dynamic`! Do đó gán `int` vào biến `String` sẽ báo lỗi compile-time."
  },
  {
    "id": 38,
    "chapter": 2,
    "topic": "Core Types",
    "tag": "Core Concept",
    "question": "Which Dart type is specifically used for functions or expressions that NEVER finish normally (because they always throw an exception)?",
    "options": [
      "void",
      "dynamic",
      "Never",
      "Null"
    ],
    "answer": 2,
    "explanation": "Theo bảng More Types (Slide 2): `Never` dùng cho biểu thức/hàm không bao giờ kết thúc bình thường (luôn `throw`); `void` nghĩa là không có giá trị trả về."
  },
  {
    "id": 39,
    "chapter": 2,
    "topic": "Null Safety",
    "tag": "Code Reading",
    "question": "What will happen when compiling the following Dart snippet with sound null safety enabled?",
    "code": "String name = 'Nam';\nname = null;",
    "options": [
      "It produces a compile-time error because `String` is non-nullable by default",
      "It runs and sets `name` to an empty string `''`",
      "It compiles cleanly with only a linter warning",
      "It compiles and throws a `NullPointerException` at runtime"
    ],
    "answer": 0,
    "explanation": "Dart thực thi Sound Null Safety lúc compile-time: mặc định biến không được chứa `null` trừ khi khai báo `String?`."
  },
  {
    "id": 40,
    "chapter": 2,
    "topic": "Null Safety",
    "tag": "Code Reading",
    "question": "What is the console output of the following Dart snippet?",
    "code": "String? nickname;\nprint(nickname?.length);\nprint(nickname ?? 'no alias');",
    "options": [
      "Compile-time error on line 2",
      "Throws a runtime exception on line 2",
      "0 and ''",
      "null and no alias"
    ],
    "answer": 3,
    "explanation": "`?.` (safe call) trả về `null` khi `nickname` là null; `??` (fallback/null-coalescing) trả về `'no alias'` khi vế trái null."
  },
  {
    "id": 41,
    "chapter": 2,
    "topic": "Null Safety",
    "tag": "Exam Trap",
    "question": "Why do the course slides warn against using the `!` (null assertion) operator everywhere?",
    "code": "String? nickname;\nprint(nickname!.length);",
    "options": [
      "Because `!` does not solve null safety — it merely moves the crash from compile time to a runtime exception if the value is null",
      "Because `!` is deprecated in Dart 3",
      "Because `!` slows down AOT compilation by 50%",
      "Because `!` converts `null` into the boolean `false`"
    ],
    "answer": 0,
    "explanation": "Bẫy từ 'When NOT to Follow the Hype': `!` (force unwrap) chỉ đẩy lỗi từ compile-time sang crash lúc runtime nếu giá trị thực sự là null. Hãy ưu tiên `?` và `??`."
  },
  {
    "id": 42,
    "chapter": 2,
    "topic": "Null Safety",
    "tag": "Code Reading",
    "question": "What does the `??=` operator do in the snippet below?",
    "code": "String? label;\nlabel ??= 'Default';\nlabel ??= 'Updated';\nprint(label);",
    "options": [
      "Prints `Default`",
      "Prints `Updated`",
      "Throws a compile-time error",
      "Prints `null`"
    ],
    "answer": 0,
    "explanation": "`??=` chỉ gán giá trị nếu biến đang là `null`. Dòng 2 gán `'Default'`; đến dòng 3 `label` đã khác null nên bỏ qua → in `'Default'`."
  },
  {
    "id": 43,
    "chapter": 2,
    "topic": "Operators",
    "tag": "Code Reading",
    "question": "What is the value of `result` after executing the following Dart code?",
    "code": "int score = 85;\nint result = score ~/ 2;",
    "options": [
      "42",
      "42.5",
      "Compile error because `/` returns double",
      "43"
    ],
    "answer": 0,
    "explanation": "Toán tử `~/` trong Dart là phép chia lấy phần nguyên (integer division): `85 ~/ 2` cho ra `int` bằng `42`."
  },
  {
    "id": 44,
    "chapter": 2,
    "topic": "Strings",
    "tag": "Code Reading",
    "question": "What does the following Dart code print?",
    "code": "String name = 'Dart';\nprint('Len: ${name.length}');",
    "options": [
      "Len: 4",
      "Len: name.length",
      "Compile error because single quotes do not support interpolation",
      "Len: ${name.length}"
    ],
    "answer": 0,
    "explanation": "Cả `'...'` và `\"...\"` đều hỗ trợ string interpolation với `$var` hoặc `${expr}`. `'Dart'.length` bằng `4`."
  },
  {
    "id": 45,
    "chapter": 2,
    "topic": "Functions",
    "tag": "Core Concept",
    "question": "In Dart, what is the arrow function syntax `int add(int a, int b) => a + b;` strictly equivalent to?",
    "options": [
      "A function that supports multiple statements without braces",
      "An asynchronous function that returns a Future",
      "`int add(int a, int b) { return a + b; }` (single-expression shorthand)",
      "A factory constructor"
    ],
    "answer": 2,
    "explanation": "Cú pháp mũi tên `=> expr` tương đương chính xác `{ return expr; }` và chỉ dùng cho thân hàm có đúng 1 biểu thức."
  },
  {
    "id": 46,
    "chapter": 2,
    "topic": "Parameters",
    "tag": "FPT Exam Favorite",
    "question": "Which Dart function signature defines an OPTIONAL POSITIONAL parameter with a default value?",
    "options": [
      "void f({int a = 0})",
      "void f(int a = 0)",
      "void f({required int a})",
      "void f([int a = 0])"
    ],
    "answer": 3,
    "explanation": "Ngoặc vuông `[...]` là optional positional parameter; ngoặc nhọn `{...}` là named parameter."
  },
  {
    "id": 47,
    "chapter": 2,
    "topic": "Parameters",
    "tag": "Code Reading",
    "question": "Given the constructor below, which call is VALID in Dart?",
    "code": "class Student {\n  String name;\n  int age;\n  int grade;\n  Student({required this.name, required this.age, this.grade = 0});\n}",
    "options": [
      "Student('Charlie', 18)",
      "Student(age: 18, name: 'Charlie')",
      "Student(name: 'Charlie', grade: 9)",
      "Student(grade: 8)"
    ],
    "answer": 1,
    "explanation": "Với named parameters, thứ tự truyền không quan trọng (`age` trước `name` vẫn hợp lệ), nhưng các tham số có `required` (`name` và `age`) bắt buộc phải truyền; `grade` có default = 0 nên có thể bỏ qua."
  },
  {
    "id": 48,
    "chapter": 2,
    "topic": "First-Class Functions",
    "tag": "Code Reading",
    "question": "What does the following Dart program output?",
    "code": "int square(int n) => n * n;\nvoid runTwice(int Function(int) f, int v) {\n  print(f(f(v)));\n}\nvoid main() => runTwice(square, 3);",
    "options": [
      "81",
      "9",
      "18",
      "27"
    ],
    "answer": 0,
    "explanation": "Functions là first-class objects: `square(3)` = 9, sau đó `square(9)` = `81`."
  },
  {
    "id": 49,
    "chapter": 2,
    "topic": "Collections",
    "tag": "Code Reading",
    "question": "What is printed by the following code involving a Dart `Set`?",
    "code": "Set<int> s = {1, 2, 2, 3, 1};\nprint(s.length);",
    "options": [
      "3",
      "5",
      "Compile error due to duplicate literals",
      "2"
    ],
    "answer": 0,
    "explanation": "`Set` chỉ lưu các phần tử duy nhất (unique): `{1, 2, 3}` → `s.length` là `3`."
  },
  {
    "id": 50,
    "chapter": 2,
    "topic": "Collections",
    "tag": "FPT Exam Favorite",
    "question": "What is an important characteristic of Dart's `map()` and `where()` methods on a `List`?",
    "options": [
      "They mutate the original list in place and return `void`",
      "They can only be used on `List<String>`",
      "They immediately allocate a new `Set` on a background thread",
      "They return a lazy `Iterable` — transformations do not execute until consumed (e.g., via `.toList()` or iteration)"
    ],
    "answer": 3,
    "explanation": "`map` và `where` trả về một `Iterable` hoạt động theo cơ chế LAZY — không chạy cho đến khi được tiêu thụ bởi `.toList()`, `forEach`, `.length`..."
  },
  {
    "id": 51,
    "chapter": 2,
    "topic": "Collections",
    "tag": "Code Reading",
    "question": "What is the output of this chained functional collection expression?",
    "code": "var nums = [1, 2, 3, 4];\nvar res = nums.where((n) => n > 1).map((n) => n * 10).toList();\nprint(res);",
    "options": [
      "(20, 30, 40)",
      "[10, 20, 30, 40]",
      "[20, 30, 40]",
      "[2, 3, 4]"
    ],
    "answer": 2,
    "explanation": "`where((n) => n > 1)` giữ lại `2, 3, 4`; `.map((n) => n * 10)` nhân 10 thành `[20, 30, 40]`."
  },
  {
    "id": 52,
    "chapter": 2,
    "topic": "Collection Literals",
    "tag": "Code Reading",
    "question": "What does the following Dart list literal produce?",
    "code": "var base = [1, 2];\nvar list = [\n  ...base,\n  if (false) 99,\n  for (var x in base) x * 10,\n];\nprint(list);",
    "options": [
      "Compile error: `if` and `for` are illegal inside list literals",
      "[1, 2, 10, 20]",
      "[[1, 2], 10, 20]",
      "[1, 2, 99, 10, 20]"
    ],
    "answer": 1,
    "explanation": "Spread `...base` trải `1, 2`; `if (false) 99` bị bỏ qua; `for` thêm `10, 20` → `[1, 2, 10, 20]`."
  },
  {
    "id": 53,
    "chapter": 2,
    "topic": "Const Immutability",
    "tag": "Exam Trap",
    "question": "What happens when the following Dart code runs?",
    "code": "void main() {\n  const list = [1, 2, 3];\n  list.add(4);\n  print(list);\n}",
    "options": [
      "Resets `list` to `[4]`",
      "Throws an `UnsupportedError` at runtime because a `const` list is deeply unmodifiable",
      "Silently ignores `add(4)` and prints `[1, 2, 3]`",
      "Prints `[1, 2, 3, 4]`"
    ],
    "answer": 1,
    "explanation": "Khác với `final list = [1, 2, 3]` (vẫn gọi `.add(4)` được), `const list = [1, 2, 3]` bất biến hoàn toàn (deeply immutable) → gọi `.add()` sẽ báo `UnsupportedError: Cannot add to an unmodifiable list`."
  },
  {
    "id": 54,
    "chapter": 2,
    "topic": "Constructors",
    "tag": "Core Concept",
    "question": "What is the Dart syntax `Student(this.name, this.age);` formally called?",
    "options": [
      "Extension constructor",
      "Factory redirect",
      "Initializing formal parameters",
      "Late binding"
    ],
    "answer": 2,
    "explanation": "Slide 2 gọi `this.name, this.age` trong danh sách tham số constructor là **initializing formals**, giúp gán thẳng vào field mà không cần thân hàm."
  },
  {
    "id": 55,
    "chapter": 2,
    "topic": "Constructors",
    "tag": "FPT Exam Favorite",
    "question": "How many unnamed constructors can a single Dart class declare, and how do you provide additional constructors?",
    "options": [
      "Unlimited unnamed constructors via method overloading",
      "Only ONE unnamed constructor; additional ones must be Named Constructors (e.g., `Student.withName(...)`)",
      "Zero unnamed constructors; every constructor must have a name",
      "Up to two unnamed constructors: one positional and one named"
    ],
    "answer": 1,
    "explanation": "Dart KHÔNG có constructor overloading như Java! Mỗi class chỉ có DUY NHẤT 1 unnamed constructor; muốn thêm phải dùng Named Constructors."
  },
  {
    "id": 56,
    "chapter": 2,
    "topic": "Constructors",
    "tag": "Code Reading",
    "question": "In the constructor `Student.withName(this.name) : age = 0, grade = 0;`, what is `: age = 0, grade = 0` called?",
    "options": [
      "An initializer list",
      "A generic constraint",
      "A lambda return expression",
      "A mixin clause"
    ],
    "answer": 0,
    "explanation": "Phần sau dấu `:` trước thân constructor là **initializer list**, chạy trước thân constructor để khởi tạo các trường `final` hoặc non-nullable."
  },
  {
    "id": 57,
    "chapter": 2,
    "topic": "Factory Constructors",
    "tag": "FPT Exam Favorite",
    "question": "What is the primary purpose of a `factory` constructor in Dart (such as `factory Shape.fromJson(...)`)?",
    "options": [
      "To give the constructor control over which instance to return — enabling caching, JSON parsing, or returning a subclass",
      "To bypass the need for `super()` calls in abstract classes",
      "To force Dart to allocate a brand-new object on the heap every single time",
      "To make all fields inside the class automatically mutable"
    ],
    "answer": 0,
    "explanation": "`factory` constructor tự quyết định instance nào sẽ được trả về (caching/singleton, parse JSON `fromJson`, hoặc trả về subclass) thay vì luôn tạo mới trực tiếp."
  },
  {
    "id": 58,
    "chapter": 2,
    "topic": "Privacy in Dart",
    "tag": "Core Concept",
    "question": "In the class below, what does the underscore in `Shape._(this.kind);` signify in Dart?",
    "code": "class Shape {\n  final String kind;\n  Shape._(this.kind);\n}",
    "options": [
      "The constructor runs asynchronously",
      "The constructor is static and global",
      "The constructor is library-private, restricting direct creation from outside the library",
      "The constructor is deprecated"
    ],
    "answer": 2,
    "explanation": "Trong Dart không có từ khóa `private`; định danh bắt đầu bằng dấu gạch dưới `_` là private trong phạm vi thư viện (library-private)."
  },
  {
    "id": 59,
    "chapter": 2,
    "topic": "Extensions",
    "tag": "Exam Trap",
    "question": "Which statement about Dart `extension` methods is TRUE?",
    "code": "extension NumberParsing on String {\n  int parseInt() => int.parse(this);\n}",
    "options": [
      "Extensions can add new instance fields (state) to existing classes like `String`",
      "Extensions replace inheritance and composition in Flutter widgets",
      "Extension methods are resolved statically at compile time, cannot add state, and cannot be overridden",
      "Extensions modify the original Dart SDK bytecode at runtime"
    ],
    "answer": 2,
    "explanation": "Slide 2 & 'When NOT to Follow the Hype': Extension được phân giải tĩnh lúc compile-time (static resolution), KHÔNG thể thêm state (field) và KHÔNG thể override."
  },
  {
    "id": 60,
    "chapter": 2,
    "topic": "Exceptions",
    "tag": "Code Reading",
    "question": "In the Dart exception block below, what do `e` and `s` represent, and what does `rethrow` do?",
    "code": "try {\n  var v = int.parse('abc');\n} on FormatException catch (e, s) {\n  print(e);\n  rethrow;\n} finally {\n  print('cleanup');\n}",
    "options": [
      "`e` is the exit code, `s` is a String message; `rethrow` silently swallows the error",
      "`e` is the line number, `s` is the source file; `rethrow` stops the `finally` block from running",
      "`e` is the exception object, `s` is the StackTrace; `rethrow` propagates the original exception upward while `finally` still runs",
      "`on FormatException` catches every possible error type including `OutOfMemoryError`"
    ],
    "answer": 2,
    "explanation": "`catch (e, s)` bắt exception `e` và stack trace `s`; `rethrow` ném lại lỗi lên caller (giữ nguyên stack trace); khối `finally` LUÔN chạy để dọn dẹp."
  },
  {
    "id": 61,
    "chapter": 2,
    "topic": "Error Handling Best Practice",
    "tag": "Best Practice",
    "question": "According to Effective Dart best practices in Module 2, what should you NEVER do when catching errors?",
    "options": [
      "Use `on SpecificException` to handle known error types",
      "Use an empty bare `catch {}` block that silently swallows errors",
      "Log an error and `rethrow` it to a higher layer",
      "Use `finally` to close open resources"
    ],
    "answer": 1,
    "explanation": "Slide 2 Appendix: Không bao giờ dùng `catch {}` rỗng nuốt lỗi âm thầm; hãy bắt đúng loại lỗi, log, rethrow hoặc chuyển đổi sang lỗi domain."
  },
  {
    "id": 62,
    "chapter": 2,
    "topic": "Intro Async",
    "tag": "Core Concept",
    "question": "Where is the `await` keyword legally allowed to appear in Dart?",
    "options": [
      "Only inside a `StatelessWidget.build()` method",
      "Only inside functions marked with `async` (or `async*`)",
      "Only inside a class constructor",
      "Inside any synchronous or asynchronous function"
    ],
    "answer": 1,
    "explanation": "`await` chỉ được phép sử dụng bên trong hàm có đánh dấu `async` (hoặc `async*`)."
  },
  {
    "id": 63,
    "chapter": 2,
    "topic": "Intro Async",
    "tag": "Exam Trap",
    "question": "Which statement about `async` and `await` in Dart is FALSE?",
    "options": [
      "`await` pauses the current function without freezing the UI event loop",
      "An `async` function returns a `Future`",
      "`Future<T>` represents a promise of a value of type `T` available later",
      "`async/await` automatically runs CPU-heavy Dart code in parallel across multiple CPU cores"
    ],
    "answer": 3,
    "explanation": "Cực hay bẫy! Slide 2 & 3 khẳng định: `async/await` KHÔNG chạy song song đa luồng — nó chỉ non-blocking trên 1 event loop duy nhất. Song song CPU cần Isolates."
  },
  {
    "id": 64,
    "chapter": 2,
    "topic": "Loops",
    "tag": "Core Concept",
    "question": "Which loop construct is specifically designed for read-only iteration over any Dart `Iterable`?",
    "options": [
      "factory loop",
      "do-catch",
      "for (var x in items)",
      "switch (items)"
    ],
    "answer": 2,
    "explanation": "`for-in` dùng để duyệt read-only trên mọi `Iterable` (List, Set, kết quả của `map`/`where`)."
  },
  {
    "id": 65,
    "chapter": 2,
    "topic": "OOP",
    "tag": "Code Reading",
    "question": "In the class hierarchy below, what does `Duck(super.name, this.age);` do?",
    "code": "class Animal {\n  final String name;\n  Animal(this.name);\n}\nclass Duck extends Animal {\n  final int age;\n  Duck(super.name, this.age);\n}",
    "options": [
      "It overrides `name` to make it nullable",
      "It forwards the first constructor argument directly to the `Animal` superclass constructor",
      "It creates a new static property called `super.name`",
      "It mixes in `Animal` without inheritance"
    ],
    "answer": 1,
    "explanation": "Super parameter `super.name` (Dart 2.17+) chuyển tiếp trực tiếp tham số lên constructor của lớp cha `Animal`."
  },
  {
    "id": 66,
    "chapter": 2,
    "topic": "Linting & Style",
    "tag": "Best Practice",
    "question": "What package ships with new Flutter projects to enforce Effective Dart style and catch potential bugs as lint warnings?",
    "options": [
      "flutter_lints",
      "dart_checker",
      "strict_dart",
      "pub_guard"
    ],
    "answer": 0,
    "explanation": "Slide 2 Appendix: Các dự án Flutter mặc định tích hợp `flutter_lints` để đảm bảo chuẩn Effective Dart."
  },
  {
    "id": 67,
    "chapter": 2,
    "topic": "Rule of Thumb",
    "tag": "Best Practice",
    "question": "What is the recommended variable-declaration priority rule in Dart?",
    "options": [
      "`dynamic` first, then `var`, then `const`",
      "`var` everywhere for maximum flexibility",
      "`final` only for strings, `const` only for integers",
      "`const` when possible, `final` otherwise, and `var` only when the value must change"
    ],
    "answer": 3,
    "explanation": "Rule of thumb (Slide 2): Ưu tiên `const` khi có thể, sau đó là `final`, và chỉ dùng `var` khi giá trị thực sự cần thay đổi."
  }
);
