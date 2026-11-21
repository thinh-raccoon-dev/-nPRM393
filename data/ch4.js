window.PRM393_QUESTIONS.push(
  {
    "id": 102,
    "chapter": 4,
    "topic": "Three Trees",
    "tag": "FPT Exam Favorite",
    "question": "In Flutter's internal rendering architecture, which of the three trees keeps the identity of each widget slot and SURVIVES widget rebuilds?",
    "options": [
      "BuildContext tree",
      "Element tree",
      "Material tree",
      "Widget tree"
    ],
    "answer": 1,
    "explanation": "Ba cây trong Flutter (Slide 4): Widget tree (immutable, tạo mới rất rẻ), Element tree (giữ identity cho từng vị trí, liên kết Widget với RenderObject và SỐNG SÓT qua các lần rebuild), Render tree (layout & painting)."
  },
  {
    "id": 103,
    "chapter": 4,
    "topic": "Three Trees",
    "tag": "Core Concept",
    "question": "Which tree in Flutter is responsible for low-level layout calculations and pixel painting?",
    "options": [
      "Route tree",
      "Element tree",
      "Widget tree",
      "Render tree (RenderObjects)"
    ],
    "answer": 3,
    "explanation": "Render tree chứa các đối tượng cấp thấp thực hiện layout và painting (vẽ pixel)."
  },
  {
    "id": 104,
    "chapter": 4,
    "topic": "Stateless vs Stateful",
    "tag": "Exam Trap",
    "question": "Which statement accurately describes mutability in a `StatefulWidget`?",
    "options": [
      "Both `StatelessWidget` and `StatefulWidget` are immutable; mutable state lives in the companion `State<T>` object which survives rebuilds",
      "A `State<T>` object is destroyed and recreated on every `setState()` call",
      "`StatelessWidget` supports calling `setState()` inside its `build()` method",
      "The `StatefulWidget` subclass itself is mutable and its fields should change directly"
    ],
    "answer": 0,
    "explanation": "Cả StatelessWidget lẫn StatefulWidget đều immutable! State có thể thay đổi nằm ở đối tượng `State<T>` đi kèm và tồn tại xuyên suốt các lần rebuild."
  },
  {
    "id": 105,
    "chapter": 4,
    "topic": "State Lifecycle",
    "tag": "FPT Exam Favorite",
    "question": "Which `State` lifecycle method runs ONCE when the State object is inserted into the tree and is the right place for one-time controller/listener setup?",
    "options": [
      "build()",
      "dispose()",
      "initState()",
      "setState()"
    ],
    "answer": 2,
    "explanation": "Lifecycle cơ bản (Slide 4): `createState()` → `initState()` (setup 1 lần: controllers, listeners) → `build()` (chạy mỗi lần rebuild) → `setState()` → `dispose()` (dọn dẹp khi gỡ vĩnh viễn)."
  },
  {
    "id": 106,
    "chapter": 4,
    "topic": "State Lifecycle",
    "tag": "Core Concept",
    "question": "A developer increments a counter field `qty++` inside `onPressed` without wrapping it in `setState()`. What happens on screen?",
    "code": "onPressed: () { qty++; }",
    "options": [
      "Flutter throws a compile-time error",
      "The app automatically performs a Hot Restart",
      "The UI updates immediately because Dart tracks field mutations automatically",
      "The `qty` variable changes in memory, but Flutter does NOT mark the widget dirty so the UI stays stale"
    ],
    "answer": 3,
    "explanation": "Slide 4 (Common Errors): Quên `setState()` khiến giá trị biến đổi trong bộ nhớ nhưng Flutter không gọi lại `build()`, nên giao diện không cập nhật."
  },
  {
    "id": 107,
    "chapter": 4,
    "topic": "State Lifecycle",
    "tag": "Core Concept",
    "question": "In which lifecycle method must you call `.dispose()` on a `TextEditingController` to avoid memory leaks?",
    "options": [
      "dispose()",
      "createState()",
      "initState()",
      "build()"
    ],
    "answer": 0,
    "explanation": "Mọi controller (`TextEditingController`, `AnimationController`, `FocusNode`) phải được giải phóng trong `dispose()` của `State`."
  },
  {
    "id": 108,
    "chapter": 4,
    "topic": "MaterialApp",
    "tag": "Core Concept",
    "question": "Which property of `MaterialApp` removes the red 'DEBUG' ribbon in the top-right corner during development?",
    "options": [
      "debugMode: false",
      "showDebugRibbon: false",
      "debugShowCheckedModeBanner: false",
      "hideBanner: true"
    ],
    "answer": 2,
    "explanation": "`debugShowCheckedModeBanner: false` trong `MaterialApp` giúp ẩn băng rôn DEBUG góc trên bên phải."
  },
  {
    "id": 109,
    "chapter": 4,
    "topic": "MaterialApp",
    "tag": "Core Concept",
    "question": "Besides defining the first screen (`home`), what two major app-wide systems does `MaterialApp` own?",
    "options": [
      "SQLite database and HTTP client",
      "Dart JIT compiler and Skia GPU threads",
      "App Theme (`ThemeData`) and root `Navigator`",
      "Device GPS and Camera plugins"
    ],
    "answer": 2,
    "explanation": "Slide 4: `MaterialApp` là gốc của ứng dụng Material — nó sở hữu hệ thống Theme, root Navigator và các cấu hình mặc định của Material widgets."
  },
  {
    "id": 110,
    "chapter": 4,
    "topic": "Scaffold & SnackBar",
    "tag": "Code Reading",
    "question": "Which Flutter API is the standard way to display a `SnackBar` toast message from anywhere inside a `Scaffold`?",
    "code": "ScaffoldMessenger.of(context).showSnackBar(\n  const SnackBar(content: Text('Cart is empty')),\n);",
    "options": [
      "Scaffold.of(context).toast(...)",
      "ScaffoldMessenger.of(context).showSnackBar(...)",
      "AppBar.of(context).notify(...)",
      "MaterialApp.showToast(context, ...)"
    ],
    "answer": 1,
    "explanation": "`ScaffoldMessenger.of(context).showSnackBar(...)` là API chuẩn để hiển thị SnackBar từ bất kỳ widget nào bên dưới."
  },
  {
    "id": 111,
    "chapter": 4,
    "topic": "BottomNavigationBar",
    "tag": "Best Practice",
    "question": "According to Material guidance in Module 4, what is the ideal number of tabs for a `BottomNavigationBar`, and where should extra navigation items go?",
    "options": [
      "1 tab only; anything more goes in `appBar`",
      "6–10 tabs; fewer than 6 belong in a `SnackBar`",
      "2–5 tabs; more destinations belong in a `Drawer`",
      "Exactly 8 tabs on mobile phones"
    ],
    "answer": 2,
    "explanation": "Slide 4: Sweet spot của `BottomNavigationBar` là **2–5 tab**; nếu nhiều hơn hãy đặt vào `Drawer`."
  },
  {
    "id": 112,
    "chapter": 4,
    "topic": "ListView",
    "tag": "FPT Exam Favorite",
    "question": "What is the key performance difference between `ListView(children: [...])` and `ListView.builder(...)`?",
    "options": [
      "`ListView(children:)` builds EVERY child up front eagerly, whereas `ListView.builder` lazily builds only visible items as the user scrolls",
      "`ListView(children:)` scrolls horizontally while `ListView.builder` scrolls vertically",
      "`ListView.builder` cannot be used with `Card` or `ListTile`",
      "`ListView(children:)` does not support scrolling"
    ],
    "answer": 0,
    "explanation": "`ListView(children:)` tạo toàn bộ widget ngay từ đầu (eager — hợp list tĩnh nhỏ); `ListView.builder` xây dựng lười (lazy — bắt buộc cho list dài/dữ liệu động)."
  },
  {
    "id": 113,
    "chapter": 4,
    "topic": "ListView.separated",
    "tag": "Code Reading",
    "question": "Which `ListView` constructor specifically takes BOTH an `itemBuilder` and a `separatorBuilder` (for example, to insert a `Divider()` between rows)?",
    "code": "ListView.separated(\n  itemCount: menu.length,\n  separatorBuilder: (_, __) => const Divider(),\n  itemBuilder: (context, i) => ListTile(title: Text(menu[i].name)),\n)",
    "options": [
      "ListView.cards",
      "ListView.builderWithDivider",
      "ListView.separated",
      "ListView.divided"
    ],
    "answer": 2,
    "explanation": "`ListView.separated` tương tự `ListView.builder` nhưng cung cấp thêm `separatorBuilder` để chèn `Divider()` giữa các hàng."
  },
  {
    "id": 114,
    "chapter": 4,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "When is a plain `ListView(children: [...])` often a BETTER choice than `ListView.builder`?",
    "options": [
      "When displaying a small, fixed static menu of ~5 known items where simplicity beats builder boilerplate",
      "Never; `ListView(children:)` is deprecated",
      "When displaying 10,000 products fetched from a REST API",
      "When rendering an infinite social media feed"
    ],
    "answer": 0,
    "explanation": "Mục 'When NOT to Follow the Hype' (Slide 4): Với danh sách tĩnh ít phần tử (VD: 5 dòng cố định), `ListView(children:)` gọn hơn và nhanh tương đương; chỉ dùng `builder` khi dữ liệu dài/động."
  },
  {
    "id": 115,
    "chapter": 4,
    "topic": "Card & ListTile",
    "tag": "Core Concept",
    "question": "In a Material `ListTile`, which slot places a widget (such as a `CircleAvatar` or dish icon) at the START (left) of the row, and which places an action icon at the END (right)?",
    "options": [
      "`start` and `end`",
      "`leading` and `trailing`",
      "`header` and `footer`",
      "`prefix` and `suffix`"
    ],
    "answer": 1,
    "explanation": "Các slot chuẩn của `ListTile`: `leading` (bên trái), `title`, `subtitle`, `trailing` (bên phải), và `onTap`."
  },
  {
    "id": 116,
    "chapter": 4,
    "topic": "Images",
    "tag": "Core Concept",
    "question": "Which `Image.network` parameter controls how an image scales and crops to fill its bounding box (e.g., `BoxFit.cover`)?",
    "options": [
      "crop",
      "scaleMode",
      "fit",
      "aspect"
    ],
    "answer": 2,
    "explanation": "`Image.network(url, fit: BoxFit.cover)` — tham số `fit` (kiểu `BoxFit`) điều khiển cách ảnh lấp đầy hộp chứa."
  },
  {
    "id": 117,
    "chapter": 4,
    "topic": "Buttons",
    "tag": "FPT Exam Favorite",
    "question": "How do you DISABLE an `ElevatedButton`, `FilledButton`, `TextButton`, or `IconButton` in Flutter?",
    "options": [
      "Set `enabled: false`",
      "Set `disabled: true`",
      "Set `onPressed: null`",
      "Wrap it in a `StatelessWidget`"
    ],
    "answer": 2,
    "explanation": "Trong Flutter, truyền `onPressed: null` sẽ tự động vô hiệu hóa (disable) nút bấm và đổi style mờ đi (rất hay dùng khi đang submit form/API!)."
  },
  {
    "id": 118,
    "chapter": 4,
    "topic": "Buttons",
    "tag": "Core Concept",
    "question": "Which button widget is most appropriate for a low-emphasis secondary action like 'Clear order' or 'Cancel'?",
    "options": [
      "RadioListTile",
      "FloatingActionButton",
      "ElevatedButton",
      "TextButton"
    ],
    "answer": 3,
    "explanation": "Slide 4: `ElevatedButton` cho hành động chính (Add to cart), `TextButton` cho hành động ít nhấn mạnh (Clear order), `IconButton` cho nút chỉ có icon (AppBar actions, xóa hàng)."
  },
  {
    "id": 119,
    "chapter": 4,
    "topic": "TextField",
    "tag": "Core Concept",
    "question": "In `InputDecoration` for a `TextField`, how does `labelText` differ visually from `hintText`?",
    "options": [
      "They are identical aliases",
      "`hintText` stays visible permanently above the box, whereas `labelText` disappears when typing",
      "`labelText` floats above the field when focused/filled, whereas `hintText` is placeholder text shown only when the field is empty",
      "`labelText` displays red validation errors, whereas `hintText` sets the initial text value"
    ],
    "answer": 2,
    "explanation": "`labelText` nổi (floats) lên trên khi người dùng nhập; `hintText` là chữ gợi ý mờ chỉ hiện lúc ô trống."
  },
  {
    "id": 120,
    "chapter": 4,
    "topic": "Checkbox vs Switch",
    "tag": "Code Reading",
    "question": "Look at the `Checkbox` callback below. Why is the parameter `v` typed as `bool?` instead of non-nullable `bool`?",
    "code": "Checkbox(\n  value: takeaway,\n  onChanged: (bool? v) => setState(() => takeaway = v!),\n)",
    "options": [
      "Because Dart does not have a non-nullable `bool` type",
      "Because `setState` requires nullable parameters",
      "Because `Checkbox` can return a `String` when unchecked",
      "Because `Checkbox` supports an optional tristate mode (true, false, or null indeterminate), so `onChanged` always delivers `bool?`"
    ],
    "answer": 3,
    "explanation": "`Checkbox` hỗ trợ `tristate` nên callback `onChanged` nhận `bool?` (khác với `Switch` chỉ có bật/tắt nên nhận `bool`)."
  },
  {
    "id": 121,
    "chapter": 4,
    "topic": "RadioListTile",
    "tag": "Exam Trap",
    "question": "A student creates two `RadioListTile<String>` widgets ('M' and 'L'), and BOTH appear selected at the same time when running the app. What is the most likely bug?",
    "options": [
      "They used `setState()` inside `onChanged`",
      "`RadioListTile` only accepts `int`, not `String`",
      "They forgot to wrap each radio in a `Card`",
      "The tiles do not share the same `groupValue` state variable (or each has its own separate variable matching its `value`)"
    ],
    "answer": 3,
    "explanation": "Slide 4 (Common Errors): Mọi `RadioListTile<T>` trong cùng một nhóm chọn đơn BẮT BUỘC phải chia sẻ chung kiểu `<T>` và chung 1 biến `groupValue`."
  },
  {
    "id": 122,
    "chapter": 4,
    "topic": "Slider",
    "tag": "Core Concept",
    "question": "In Flutter's `Slider` widget, what two effects does setting `divisions: 3` have (with `min: 0`, `max: 3`)?",
    "options": [
      "It hides the slider track on Android",
      "It splits the slider into 3 separate widgets and disables `onChanged`",
      "It converts `value` from `double` to `String`",
      "It makes the slider snap to discrete steps and enables the floating `label` bubble"
    ],
    "answer": 3,
    "explanation": "Thuộc tính `divisions` biến `Slider` liên tục thành các nấc rời rạc (discrete) VÀ bật bong bóng hiển thị `label` khi kéo."
  },
  {
    "id": 123,
    "chapter": 4,
    "topic": "Date Picker",
    "tag": "FPT Exam Favorite",
    "question": "What return type does `showDatePicker(...)` produce, and what does a `null` result signify?",
    "options": [
      "`Future<String>` — returns `'CANCELLED'` when dismissed",
      "`DateTime` — throws an exception if the user taps Cancel",
      "`Stream<DateTime>` — emits `null` every second until confirmed",
      "`Future<DateTime?>` — `null` means the user cancelled the dialog (a normal outcome, not an error)"
    ],
    "answer": 3,
    "explanation": "`showDatePicker` trả về `Future<DateTime?>`. Nếu user bấm Cancel, kết quả là `null` — phải kiểm tra `if (date != null)` trước khi `setState`."
  },
  {
    "id": 124,
    "chapter": 4,
    "topic": "Time Picker",
    "tag": "Core Concept",
    "question": "How should you display a picked `TimeOfDay` value so it automatically respects the user's device 12-hour or 24-hour clock format?",
    "options": [
      "DateFormat.time(pickupTime)",
      "pickupTime.toLocaleString()",
      "pickupTime.toIso8601String()",
      "pickupTime.format(context)"
    ],
    "answer": 3,
    "explanation": "`pickupTime!.format(context)` định dạng giờ tự động theo cài đặt 12h/24h của thiết bị."
  },
  {
    "id": 125,
    "chapter": 4,
    "topic": "Chaining Pickers",
    "tag": "Best Practice",
    "question": "In a booking flow where the user picks a date and immediately picks a time, what is the recommended async pattern?",
    "options": [
      "Call `showDatePicker` inside `initState()` before the widget mounts",
      "Call `showDatePicker` and `showTimePicker` simultaneously inside `Future.wait`",
      "Store `BuildContext` in a global static variable to reuse next week",
      "`await` the date picker → if not `null`, `await` the time picker → if not `null`, call `setState` once with both values"
    ],
    "answer": 3,
    "explanation": "Slide 4: `await` date → nếu khác null, `await` time → `setState` 1 lần với cả 2 giá trị (chỉ 1 lần rebuild, tránh trạng thái nửa vời; bấm Cancel bước nào cũng giữ nguyên lựa chọn cũ)."
  },
  {
    "id": 126,
    "chapter": 4,
    "topic": "Material 3 Theming",
    "tag": "FPT Exam Favorite",
    "question": "What is the modern Material 3 way (default since Flutter 3.16) to generate a complete, accessible color palette from a single brand color?",
    "options": [
      "MaterialApp(backgroundColor: Colors.orange)",
      "Colors.generatePalette(Colors.orange)",
      "ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange))",
      "ThemeData(primarySwatch: Colors.orange)"
    ],
    "answer": 2,
    "explanation": "`ColorScheme.fromSeed(seedColor: ...)` tự động sinh đầy đủ bảng màu Material 3 hài hòa và đạt chuẩn tương phản (accessibility contrast) từ 1 màu seed."
  },
  {
    "id": 127,
    "chapter": 4,
    "topic": "Dark Mode",
    "tag": "Code Reading",
    "question": "Where must the boolean state `dark` live when toggling `MaterialApp.themeMode` between `ThemeMode.dark` and `ThemeMode.light`?",
    "code": "MaterialApp(\n  theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange)),\n  darkTheme: ThemeData(colorScheme: ColorScheme.fromSeed(\n    seedColor: Colors.orange, brightness: Brightness.dark)),\n  themeMode: dark ? ThemeMode.dark : ThemeMode.light,\n  home: const MenuScreen(),\n)",
    "options": [
      "Inside `MenuScreen`'s local private `State` only",
      "In a `StatefulWidget` (or state holder) ABOVE `MaterialApp` so `MaterialApp` rebuilds with the new `themeMode`",
      "Inside `pubspec.yaml`",
      "Inside a `StatelessWidget` without `setState`"
    ],
    "answer": 1,
    "explanation": "Biến `dark` điều khiển `themeMode` của `MaterialApp` phải nằm ở state PHÍA TRÊN `MaterialApp` (VD: biến `CanteenApp` thành `StatefulWidget`)."
  },
  {
    "id": 128,
    "chapter": 4,
    "topic": "Dark Mode",
    "tag": "Core Concept",
    "question": "Which `ThemeMode` value makes a Flutter app automatically follow the operating system's Light/Dark appearance setting?",
    "options": [
      "ThemeMode.device",
      "ThemeMode.auto",
      "ThemeMode.system",
      "ThemeMode.adaptive"
    ],
    "answer": 2,
    "explanation": "`ThemeMode.system` giúp app tự động theo chế độ sáng/tối của hệ điều hành — đây là mặc định thường dùng trong production."
  },
  {
    "id": 129,
    "chapter": 4,
    "topic": "Reading Theme",
    "tag": "Best Practice",
    "question": "How should a widget retrieve themed text styles or colors instead of hardcoding `Colors.orange` in 20 places?",
    "options": [
      "GlobalTheme.instance.font",
      "MaterialApp.currentTheme.colors",
      "Theme.of(context).textTheme.headlineSmall and Theme.of(context).colorScheme.secondaryContainer",
      "Scaffold.of(context).primaryColor"
    ],
    "answer": 2,
    "explanation": "Luôn đọc màu và kiểu chữ qua `Theme.of(context).colorScheme` và `Theme.of(context).textTheme` (`headlineSmall`, `titleMedium`, `bodyMedium`). Không hardcode màu!"
  },
  {
    "id": 130,
    "chapter": 4,
    "topic": "Spacing Polish",
    "tag": "Core Concept",
    "question": "What is the difference in typical layout usage between `Padding` and `SizedBox`?",
    "options": [
      "`Padding` wraps around a single child to give it inset space, while `const SizedBox(height: 16)` inserts a fixed empty gap between children in a `Column`/`Row`",
      "`Padding` creates an empty gap between two siblings, while `SizedBox` only adds color borders",
      "`SizedBox` can only be used inside `AppBar`",
      "`Padding` cannot use `const`"
    ],
    "answer": 0,
    "explanation": "`Padding` bọc quanh 1 widget con (`EdgeInsets.symmetric/all`); `const SizedBox(height: 16)` tạo khoảng trống cố định giữa các widget trong `Column`/`Row`."
  },
  {
    "id": 131,
    "chapter": 4,
    "topic": "Common Errors",
    "tag": "FPT Exam Favorite",
    "question": "You place a `ListView` directly inside a `Column` and see yellow-and-black overflow stripes / an unbounded height error. What is the standard fix?",
    "options": [
      "Add `debugShowCheckedModeBanner: false`",
      "Wrap the `ListView` inside an `Expanded` widget so it receives bounded vertical constraints",
      "Replace `Column` with `Scaffold`",
      "Call `Hot Reload` twice"
    ],
    "answer": 1,
    "explanation": "Lỗi kinh điển (Slide 4 & 6): `Column` truyền chiều cao vô hạn (unbounded) xuống con, còn `ListView` muốn giãn tối đa → bọc `ListView` bằng `Expanded` để giới hạn không gian còn lại!"
  },
  {
    "id": 132,
    "chapter": 4,
    "topic": "Common Errors",
    "tag": "Core Concept",
    "question": "What do the famous yellow-and-black diagonal stripes in Flutter debug mode signify?",
    "options": [
      "A `RenderFlex` overflow layout signal — the widget exceeded its available space (not a hard crash)",
      "A failed HTTP 500 request",
      "A Dart syntax compilation failure",
      "A missing `pubspec.yaml` image asset"
    ],
    "answer": 0,
    "explanation": "Sọc vàng-đen là cảnh báo `RenderFlex overflow` — một tín hiệu lỗi layout (không làm crash app), banner còn ghi rõ tên widget bị tràn bao nhiêu pixel."
  },
  {
    "id": 133,
    "chapter": 4,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Why does Module 4 caution against hand-picking custom colors, shadows, and gradients per screen instead of relying on Material theme defaults?",
    "options": [
      "Because Flutter forbids custom colors on Android",
      "Per-screen overrides break consistency, and hand-picked colors often fail accessibility contrast checks that Material defaults already pass",
      "Because shadows cannot be rendered by Skia",
      "Because `ColorScheme.fromSeed` only supports grayscale"
    ],
    "answer": 1,
    "explanation": "Slide 4 ('When NOT to Follow the Hype'): Tự chế màu từng màn hình làm mất tính nhất quán và rất dễ trượt chuẩn tương phản (accessibility contrast) mà Material mặc định đã đảm bảo."
  },
  {
    "id": 134,
    "chapter": 4,
    "topic": "Picker BuildContext",
    "tag": "Exam Trap",
    "question": "Why might calling `showDatePicker(context: context, ...)` fail if invoked with the `BuildContext` from above `MaterialApp`?",
    "options": [
      "Because `firstDate` cannot be in the current year",
      "Because `showDatePicker` can only be called in `StatelessWidget`",
      "Because `showDatePicker` requires an active internet connection",
      "Because `showDatePicker` requires an ancestor `MaterialLocalizations` / `Navigator` provided by `MaterialApp`"
    ],
    "answer": 3,
    "explanation": "Cả `showDatePicker` và `showTimePicker` đều cần một `BuildContext` hợp lệ nằm BÊN DƯỚI `MaterialApp` (nơi có `Navigator` và `MaterialLocalizations`)."
  }
);
