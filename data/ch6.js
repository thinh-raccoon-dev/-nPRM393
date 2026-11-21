window.PRM393_QUESTIONS.push(
  {
    "id": 169,
    "chapter": 6,
    "topic": "Responsive vs Adaptive",
    "tag": "FPT Exam Favorite",
    "question": "What is the key distinction between Responsive UI and Adaptive UI in Flutter?",
    "options": [
      "Adaptive UI uses `Expanded`, while Responsive UI uses `Scaffold`",
      "There is no distinction; both strictly mean using `MediaQuery`",
      "Responsive UI changes layout with available space (e.g., 2 → 4 columns, Column → Row), whereas Adaptive UI changes UI components/idioms by device class (e.g., `BottomNavigationBar` → `NavigationRail`)",
      "Responsive UI is only for iOS, while Adaptive UI is only for Android"
    ],
    "answer": 2,
    "explanation": "Slide 6: Responsive = bố cục co giãn theo không gian (Column → Row, số cột grid); Adaptive = đổi thành phần giao diện theo lớp thiết bị (BottomNavigationBar → NavigationRail, Drawer → sidebar)."
  },
  {
    "id": 170,
    "chapter": 6,
    "topic": "Golden Layout Rule",
    "tag": "FPT Exam Favorite",
    "question": "Complete Flutter's golden layout rule: 'Constraints go ____. Sizes go ____. ____ sets position.'",
    "options": [
      "up; down; Child",
      "left; right; Scaffold",
      "down; up; Parent",
      "down; down; MediaQuery"
    ],
    "answer": 2,
    "explanation": "Luật vàng của Flutter Layout: **Constraints go down. Sizes go up. Parent sets position.**"
  },
  {
    "id": 171,
    "chapter": 6,
    "topic": "BoxConstraints",
    "tag": "Core Concept",
    "question": "Which `BoxConstraints` category has `minWidth == maxWidth` and `minHeight == maxHeight`, FORCING the child to adopt that exact size?",
    "options": [
      "Unbounded constraints",
      "Tight constraints",
      "Adaptive constraints",
      "Loose constraints"
    ],
    "answer": 1,
    "explanation": "3 loại `BoxConstraints` (Slide 6): **Tight** (`min == max`, ép đúng kích thước như `SizedBox(width: 100)`, `Expanded`), **Loose** (`min = 0`, có thể nhỏ hơn `max` như `Scaffold` body), **Unbounded** (`max = infinity`, như trục chính của `Row`/`ListView`)."
  },
  {
    "id": 172,
    "chapter": 6,
    "topic": "BoxConstraints",
    "tag": "Core Concept",
    "question": "Which widget typically passes UNBOUNDED constraints along its main scrolling axis?",
    "options": [
      "SizedBox(width: 100, height: 50)",
      "Expanded",
      "AspectRatio",
      "ListView (vertical axis) or Row (horizontal axis)"
    ],
    "answer": 3,
    "explanation": "`Row` (trục ngang) và `ListView` (trục dọc) cung cấp **unbounded constraints** (`max = double.infinity`)."
  },
  {
    "id": 173,
    "chapter": 6,
    "topic": "Row & Column Axes",
    "tag": "Core Concept",
    "question": "For a `Column` widget, which axis is the Main Axis and which is the Cross Axis?",
    "options": [
      "Main axis = vertical; Cross axis = horizontal",
      "It depends on `CrossAxisAlignment.stretch`",
      "Main axis = horizontal; Cross axis = vertical",
      "Both axes are vertical"
    ],
    "answer": 0,
    "explanation": "`Row`: main = ngang (horizontal), cross = dọc (vertical). `Column`: main = dọc (vertical), cross = ngang (horizontal)."
  },
  {
    "id": 174,
    "chapter": 6,
    "topic": "MainAxisAlignment",
    "tag": "Core Concept",
    "question": "How does `MainAxisAlignment.spaceEvenly` differ from `MainAxisAlignment.spaceBetween`?",
    "options": [
      "`spaceEvenly` puts double the gap at the edges",
      "`spaceEvenly` puts equal gaps between children AND at the outer edges, whereas `spaceBetween` puts NO gaps at the outer edges",
      "`spaceBetween` centers all children together with zero gap",
      "`spaceBetween` stretches children to fill the cross axis"
    ],
    "answer": 1,
    "explanation": "Slide 6: `spaceEvenly` chia khoảng trống đều nhau kể cả 2 mép ngoài; `spaceBetween` đẩy 2 phần tử đầu/cuối sát mép (không có khoảng trống ở mép)."
  },
  {
    "id": 175,
    "chapter": 6,
    "topic": "Expanded vs Flexible",
    "tag": "FPT Exam Favorite",
    "question": "What is the exact behavioral difference between `Expanded` and `Flexible` inside a `Row` or `Column`?",
    "code": "Row(children: [\n  Flexible(child: Container(width: 100)),\n  Expanded(child: Container(width: 100)),\n])",
    "options": [
      "`Expanded` is shorthand for `FlexFit.tight` (forces child to fill its flex share), while `Flexible` defaults to `FlexFit.loose` (child may remain smaller than its share)",
      "`Expanded` can only be used in `Row`, while `Flexible` can only be used in `Column`",
      "`Flexible` ignores the `flex` property completely",
      "`Flexible` forces child to fill all space, while `Expanded` lets child shrink"
    ],
    "answer": 0,
    "explanation": "Cực hay ra thi! `Expanded` = `Flexible(fit: FlexFit.tight)` (ép lấp kín phần được chia); `Flexible` mặc định `FlexFit.loose` (con có thể giữ kích thước nhỏ hơn phần được chia)."
  },
  {
    "id": 176,
    "chapter": 6,
    "topic": "Flex Shares",
    "tag": "Code Reading",
    "question": "In the `Row` below, assuming 300 px of remaining space after the thumbnail, how wide is each `Expanded` child?",
    "code": "Row(children: [\n  Container(width: 80, height: 80),\n  Expanded(flex: 2, child: Text(product.name)),\n  Expanded(child: Text(product.price)),\n])",
    "options": [
      "150 px and 150 px",
      "220 px and 80 px",
      "200 px and 100 px (default `flex` is 1, so ratio is 2:1)",
      "Throws an overflow error because `flex` is missing on the second `Expanded`"
    ],
    "answer": 2,
    "explanation": "Giá trị `flex` mặc định là `1`. Tổng số phần = `2 + 1 = 3` → 300 px chia thành `200 px` và `100 px`."
  },
  {
    "id": 177,
    "chapter": 6,
    "topic": "Text Overflow in Row",
    "tag": "Best Practice",
    "question": "A long product name `Text` inside a `Row` causes a right-edge `RenderFlex` overflow. What combination cleanly truncates the text with `...`?",
    "options": [
      "Set `maxLines: 99` on `Text` without `Flexible`",
      "Wrap `Text` in `Expanded` or `Flexible` AND set `overflow: TextOverflow.ellipsis`",
      "Wrap `Row` in a `Stack`",
      "Put `const` in front of `Row`"
    ],
    "answer": 1,
    "explanation": "`Text` trong `Row` nhận chiều rộng vô hạn nên sẽ tràn; bọc `Expanded`/`Flexible` để giới hạn chiều rộng kèm `overflow: TextOverflow.ellipsis` sẽ tự động cắt `...` gọn gàng."
  },
  {
    "id": 178,
    "chapter": 6,
    "topic": "Wrap Widget",
    "tag": "FPT Exam Favorite",
    "question": "A `Row` containing 10 category `Chip` widgets overflows horizontally on phones. Which widget automatically moves overflowing children to the next line without writing breakpoint logic?",
    "code": "Wrap(\n  spacing: 8,\n  runSpacing: 8,\n  children: genres.map((g) => Chip(label: Text(g))).toList(),\n)",
    "options": [
      "Stack",
      "Wrap",
      "AspectRatio",
      "Expanded"
    ],
    "answer": 1,
    "explanation": "`Wrap` tự động xuống dòng khi không còn đủ chỗ (`spacing`: khoảng cách giữa các phần tử cùng dòng, `runSpacing`: khoảng cách giữa các dòng)."
  },
  {
    "id": 179,
    "chapter": 6,
    "topic": "AspectRatio & FractionallySizedBox",
    "tag": "Core Concept",
    "question": "What does `FractionallySizedBox(widthFactor: 0.6, child: ...)` compute its 60% width relative to?",
    "options": [
      "60% of its immediate PARENT's available width",
      "60% of the child's intrinsic height",
      "60% of the entire physical device screen width",
      "60 logical pixels fixed"
    ],
    "answer": 0,
    "explanation": "Slide 6: `FractionallySizedBox` tính tỷ lệ phần trăm theo kích thước của **parent** (không phải theo thiết bị), còn `AspectRatio(aspectRatio: 16 / 9)` giữ tỷ lệ rộng:cao không bị méo."
  },
  {
    "id": 180,
    "chapter": 6,
    "topic": "GridView.count",
    "tag": "Core Concept",
    "question": "In `GridView.count(crossAxisCount: 2, childAspectRatio: 0.8, ...)`, what does `childAspectRatio: 0.8` define?",
    "options": [
      "Only 80% of the children are built",
      "There is an 80% gap between columns",
      "Each cell's `width / height` ratio is 0.8 (making each cell taller than it is wide)",
      "Each cell takes 80% of the screen width"
    ],
    "answer": 2,
    "explanation": "`childAspectRatio = width / height` của 1 ô grid. Giá trị `0.8 < 1` nghĩa là ô cao hơn rộng (taller cells)."
  },
  {
    "id": 181,
    "chapter": 6,
    "topic": "Responsive GridView",
    "tag": "FPT Exam Favorite",
    "question": "Using `SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 150)`, how many columns are automatically rendered in a 390 px wide viewport?",
    "code": "GridView(\n  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(\n    maxCrossAxisExtent: 150,\n  ),\n  children: ...,\n)",
    "options": [
      "2 columns (195 px each)",
      "1 column (390 px)",
      "4 columns (97.5 px each)",
      "3 columns (130 px each, since `(390 / 150).ceil() == 3`)"
    ],
    "answer": 3,
    "explanation": "Công thức Slide 6: `count = (width / maxExtent).ceil()` → `(390 / 150).ceil() = 2.6.ceil() = 3` cột, mỗi cột `130 px ≤ 150 px`!"
  },
  {
    "id": 182,
    "chapter": 6,
    "topic": "GridView.builder",
    "tag": "Core Concept",
    "question": "Why is `GridView.builder` the production default for scrolling product catalogs with 1,000 items?",
    "options": [
      "It downloads images offline automatically",
      "It builds only the visible cells (plus a small cache) lazily instead of instantiating all 1,000 widgets at startup",
      "It automatically wraps itself in a `SingleChildScrollView`",
      "It does not require a `gridDelegate`"
    ],
    "answer": 1,
    "explanation": "Giống `ListView.builder`, `GridView.builder` tạo các ô theo kiểu lazy khi cuộn tới, tiết kiệm RAM và thời gian khởi chạy. (Lưu ý `GridView` tự cuộn được sẵn, KHÔNG cần bọc `SingleChildScrollView`)."
  },
  {
    "id": 183,
    "chapter": 6,
    "topic": "Stack Paint Order",
    "tag": "Code Reading",
    "question": "In the `Stack` below, which widget is painted ON TOP (frontmost) on screen?",
    "code": "Stack(\n  alignment: Alignment.topRight,\n  children: [\n    Image.network(p.url, height: 120, fit: BoxFit.cover),\n    const SaleBadge(),\n  ],\n)",
    "options": [
      "Neither is visible without `Positioned`",
      "`Image.network` is on top because it is listed first",
      "`SaleBadge` is on top because `Stack` paints children bottom → top (last child is frontmost)",
      "They are placed side by side horizontally"
    ],
    "answer": 2,
    "explanation": "`Stack` vẽ các con theo thứ tự từ dưới lên trên (bottom → top), nên phần tử **cuối cùng** trong `children` nằm trên cùng (`SaleBadge`)."
  },
  {
    "id": 184,
    "chapter": 6,
    "topic": "Stack & Positioned",
    "tag": "Core Concept",
    "question": "In a `Stack`, what does `fit: StackFit.expand` do compared to the default `StackFit.loose`?",
    "options": [
      "It hides all `Positioned` children",
      "It enables vertical scrolling on the `Stack`",
      "It converts `Stack` into a `Wrap`",
      "It forces all non-positioned children to expand and fill the entire `Stack`"
    ],
    "answer": 3,
    "explanation": "`fit: StackFit.expand` ép mọi non-positioned child giãn kín toàn bộ `Stack`; còn `Positioned.fill` ghim cả 4 cạnh (left/top/right/bottom = 0) của 1 child cụ thể."
  },
  {
    "id": 185,
    "chapter": 6,
    "topic": "MediaQuery",
    "tag": "FPT Exam Favorite",
    "question": "In `MediaQuery.of(context)`, what is the difference between `padding` and `viewInsets`?",
    "options": [
      "`padding` is only for Android, while `viewInsets` is only for iOS",
      "`viewInsets` reports screen width in inches, while `padding` reports font size",
      "They always hold identical values",
      "`padding` reports areas obstructed by permanent system UI (notch, status bar), while `viewInsets` reports areas temporarily covered by system UI such as the on-screen keyboard"
    ],
    "answer": 3,
    "explanation": "Bảng `MediaQuery` (Slide 6): `padding` = vùng notch/status bar (safe area); `viewInsets` = vùng bị che bởi bàn phím ảo (keyboard); `size` = kích thước theo logical pixels (dp)."
  },
  {
    "id": 186,
    "chapter": 6,
    "topic": "MediaQuery Units",
    "tag": "Core Concept",
    "question": "What units does `MediaQuery.of(context).size` report width and height in?",
    "options": [
      "Millimeters",
      "Percentages of 100",
      "Raw physical hardware pixels",
      "Logical pixels (dp — device-independent pixels)"
    ],
    "answer": 3,
    "explanation": "`MediaQuery.of(context).size` trả về **logical pixels (dp)**; để quy đổi sang physical pixels, Flutter dùng `devicePixelRatio`."
  },
  {
    "id": 187,
    "chapter": 6,
    "topic": "MediaQuery Best Practice",
    "tag": "Exam Trap",
    "question": "Why should you NEVER cache `MediaQuery.of(context).size.width` once in `initState()` or a field instead of reading it inside `build()`?",
    "options": [
      "Because `MediaQuery` only works in `StatelessWidget`",
      "Because `size.width` is a `Future<double>`",
      "Reading `MediaQuery.of(context)` inside `build()` subscribes the widget to window-size changes; caching it skips updates when the user rotates or resizes the window (and `initState` cannot subscribe safely)",
      "Because `MediaQuery` returns 0 inside `build()`"
    ],
    "answer": 2,
    "explanation": "Slide 6: Gọi `MediaQuery.of(context)` trong `build()` giúp đăng ký (subscribe) widget tự động rebuild khi cửa sổ đổi kích thước hoặc xoay màn hình."
  },
  {
    "id": 188,
    "chapter": 6,
    "topic": "MediaQuery vs LayoutBuilder",
    "tag": "FPT Exam Favorite",
    "question": "A reusable `ProductCard` widget uses `MediaQuery.of(context).size.width > 600` to choose a wide layout. It looks fine on mobile, but breaks when embedded inside a 280 px desktop sidebar. Why?",
    "options": [
      "Because `ProductCard` forgot `SafeArea`",
      "Because sidebars ignore `Row` widgets",
      "Because `MediaQuery` reports the WHOLE app window width (e.g., 1200 px), NOT the 280 px parent sidebar constraints — reusable widgets should use `LayoutBuilder` instead",
      "Because `MediaQuery` does not work on desktop"
    ],
    "answer": 2,
    "explanation": "Câu hỏi Think & Discuss kinh điển của Slide 6! `MediaQuery` chỉ biết kích thước toàn cửa sổ (dùng ở root shell); widget tái sử dụng (cards, list items) PHẢI dùng `LayoutBuilder` để đọc `BoxConstraints` thực tế từ parent."
  },
  {
    "id": 189,
    "chapter": 6,
    "topic": "LayoutBuilder",
    "tag": "Code Reading",
    "question": "Look at the snippet below. What type is parameter `c` inside `LayoutBuilder`'s builder callback?",
    "code": "LayoutBuilder(\n  builder: (context, c) {\n    return c.maxWidth > 500 ? const WideCard() : const NarrowCard();\n  },\n)",
    "options": [
      "BoxConstraints",
      "Orientation",
      "Size",
      "MediaQueryData"
    ],
    "answer": 0,
    "explanation": "`LayoutBuilder` truyền `(BuildContext context, BoxConstraints constraints)` vào hàm `builder`, cho phép kiểm tra `c.maxWidth`, `c.minWidth`, `c.maxHeight`, `c.minHeight`."
  },
  {
    "id": 190,
    "chapter": 6,
    "topic": "OrientationBuilder",
    "tag": "Exam Trap",
    "question": "What actually triggers `OrientationBuilder` to report `Orientation.portrait` vs `Orientation.landscape`?",
    "options": [
      "The user's OS dark mode setting",
      "Only the device's physical gyroscope sensor on mobile",
      "The aspect ratio of the available space (height > width = portrait, width > height = landscape) — so a tall narrow desktop window also counts as portrait",
      "Only calling `setState()` manually"
    ],
    "answer": 2,
    "explanation": "Slide 6: `OrientationBuilder` dựa vào tỷ lệ khung hình (aspect ratio), không chỉ do cảm biến xoay máy — 1 cửa sổ desktop kéo hẹp cao vẫn được tính là `Orientation.portrait`."
  },
  {
    "id": 191,
    "chapter": 6,
    "topic": "Breakpoints",
    "tag": "FPT Exam Favorite",
    "question": "What are the three Material 3 window size class breakpoints highlighted in Module 6?",
    "options": [
      "Small < 300, Medium 300–500, Large ≥ 500",
      "Compact < 600, Medium 600–839, Expanded ≥ 840",
      "Tiny < 200, Normal 200–1200, Wide ≥ 1200",
      "Phone < 480, Phablet 480–1024, TV ≥ 1024"
    ],
    "answer": 1,
    "explanation": "Chuẩn Material 3 Window Classes (Slide 6): **Compact < 600**, **Medium 600–839**, **Expanded ≥ 840**."
  },
  {
    "id": 192,
    "chapter": 6,
    "topic": "SafeArea",
    "tag": "Core Concept",
    "question": "How does `SafeArea` prevent UI content from sliding under an iPhone Dynamic Island, notch, or gesture bar?",
    "options": [
      "It disables scrolling on iOS devices",
      "It shrinks all font sizes by 50%",
      "It forces the app into landscape orientation",
      "It reads `MediaQuery.padding` and automatically inserts matching inset padding around its child"
    ],
    "answer": 3,
    "explanation": "`MediaQuery.padding` báo vùng bị notch/status bar che; `SafeArea` tiêu thụ chính vùng đó để đẩy nội dung vào vùng an toàn (`minimum:` đảm bảo lề tối thiểu)."
  },
  {
    "id": 193,
    "chapter": 6,
    "topic": "Master-Detail Pattern",
    "tag": "Code Reading",
    "question": "In the Master–Detail responsive pattern below, what changes when window width exceeds 840 px vs when it is on a phone?",
    "code": "return w > 840\n  ? Row(children: [\n      Expanded(child: ProductList(onSelect: (p) => setState(() => selected = p))),\n      const VerticalDivider(width: 1),\n      Expanded(child: ProductDetail(selected)),\n    ])\n  : ProductList(onSelect: (p) => Navigator.push(context,\n      MaterialPageRoute(builder: (_) => ProductDetail(p))));",
    "options": [
      "Wide screens disable tapping on list items",
      "Both screens require two separate repositories",
      "Wide screens show list and detail side-by-side in a `Row`; narrow screens push `ProductDetail` as a new route",
      "Phones show two columns while tablets show one column"
    ],
    "answer": 2,
    "explanation": "Master–Detail: màn rộng (`w > 840`) đặt danh sách và chi tiết song song trong `Row`, màn nhỏ (phone) đẩy chi tiết bằng `Navigator.push`."
  },
  {
    "id": 194,
    "chapter": 6,
    "topic": "Adaptive Navigation",
    "tag": "FPT Exam Favorite",
    "question": "In Flutter's adaptive navigation pattern, what navigation widget typically replaces `BottomNavigationBar` once screen width reaches `>= 600` (tablet/desktop)?",
    "options": [
      "NavigationRail",
      "FloatingActionButton",
      "PopupMenuButton",
      "TabBarView"
    ],
    "answer": 0,
    "explanation": "Slide 6: Dưới 600 px dùng `BottomNavigationBar`, từ `>= 600` px chuyển sang `NavigationRail` dọc bên cạnh — cùng danh sách điểm đến nhưng thích nghi hình thức điều hướng."
  },
  {
    "id": 195,
    "chapter": 6,
    "topic": "Refactor Checklist",
    "tag": "Best Practice",
    "question": "In Session 30's 6-step Responsive Refactor Checklist, which step should you do FIRST and why is the root breakpoint switch done LAST?",
    "options": [
      "Only test at 1000 px and skip 360 px",
      "Wrap the root body in `SafeArea` first (free notch fix), remove fixed sizes/overflows next, and add root breakpoints last once inner widgets are already constraint-friendly",
      "Delete `Scaffold` first and use `Stack` everywhere",
      "Add breakpoints first, then add fixed pixel widths"
    ],
    "answer": 1,
    "explanation": "Checklist 6 bước (Slide 6): 1. `SafeArea` → 2. Đổi kích thước cứng sang `Expanded`/`Flexible` → 3. `Row` dễ tràn sang `Wrap` → 4. Grid cột cứng sang `maxCrossAxisExtent` → 5. Breakpoint ở root → 6. Test ở **360 / 600 / 1000 px**."
  },
  {
    "id": 196,
    "chapter": 6,
    "topic": "Testing Breakpoints",
    "tag": "Core Concept",
    "question": "What three test widths are recommended in Module 6 to verify your responsive layout across Compact, Medium, and Expanded window classes?",
    "options": [
      "720, 1080, 4096 px",
      "100, 200, 300 px",
      "500, 550, 599 px",
      "360 (phone), 600 (tablet portrait), and 1000 (desktop window) px"
    ],
    "answer": 3,
    "explanation": "Slide 6: Kiểm thử ở 3 mốc chuẩn **360 px** (phone), **600 px** (tablet portrait) và **1000 px** (desktop) — bằng cách kéo cửa sổ desktop hoặc widget tests với các view size nhỏ."
  },
  {
    "id": 197,
    "chapter": 6,
    "topic": "Breakpoint Code Design",
    "tag": "Best Practice",
    "question": "Why does Module 6 recommend centralizing breakpoint logic in a single helper function (e.g., `lib/breakpoints.dart`)?",
    "options": [
      "Because Dart does not allow `if` statements inside `build()`",
      "To force `setState()` on every window resize",
      "Because `MediaQuery` can only be imported once per project",
      "So breakpoint thresholds live in one decision point and don't drift apart across scattered files"
    ],
    "answer": 3,
    "explanation": "Tập trung logic breakpoint vào 1 hàm duy nhất tránh việc mỗi file viết 1 ngưỡng khác nhau gây lệch giao diện (drift)."
  },
  {
    "id": 198,
    "chapter": 6,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Why does Module 6 warn against calling `MediaQuery.of(context)` indiscriminately in every tiny widget?",
    "options": [
      "Because `MediaQuery.of(context)` requires a network call",
      "Because every `.of(context)` call subscribes that widget to rebuilds whenever any MediaQuery property changes (like keyboard opening), widening the rebuild surface unnecessarily",
      "Because `MediaQuery` throws an error inside `Column`",
      "Because `MediaQuery` only works once per app launch"
    ],
    "answer": 1,
    "explanation": "Slide 6 ('When NOT to Follow the Hype'): Gọi `MediaQuery.of(context)` tràn lan làm mở rộng diện tích rebuild không cần thiết (ví dụ bật bàn phím làm đổi `viewInsets` khiến mọi widget gọi `.of` rebuild theo)."
  },
  {
    "id": 199,
    "chapter": 6,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Which statement reflects Module 6's practical advice on responsive layouts?",
    "options": [
      "600 and 840 are strict legal requirements that may never be adjusted for your content",
      "Responsive design always requires writing twice as much conditional code",
      "You must always show a `NavigationRail` on phones",
      "Responsive design often means LESS code: delete hardcoded pixel widths and let Flutter's constraints (`Expanded`, `Wrap`, `maxCrossAxisExtent`) do the work"
    ],
    "answer": 3,
    "explanation": "Slide 6: Làm responsive thường ít code hơn — chỉ cần bỏ các kích thước cứng (fixed pixel widths = code smell) và để cơ chế constraints xử lý!"
  },
  {
    "id": 200,
    "chapter": 6,
    "topic": "Overflow Diagnostics",
    "tag": "Code Reading",
    "question": "Three `Container(width: 150, height: 150)` widgets are placed inside a `Row` on a 360 px wide screen. What exact error message does Flutter display?",
    "code": "Row(children: [\n  Container(width: 150, height: 150),\n  Container(width: 150, height: 150),\n  Container(width: 150, height: 150),\n])",
    "options": [
      "`BoxConstraints assertion failed by 150 pixels`",
      "`StateError: Row cannot hold more than 2 Containers`",
      "`A RenderFlex overflowed by 90 pixels on the right` (450 px − 360 px = 90 px)",
      "No error; each container shrinks to 120 px automatically"
    ],
    "answer": 2,
    "explanation": "Ví dụ nguyên văn Slide 6: 3 × 150 px = 450 px đặt trong cửa sổ 360 px → `RenderFlex overflowed by 90 pixels on the right` vì `Container` kích thước cố định không thể tự thu nhỏ."
  },
  {
    "id": 201,
    "chapter": 6,
    "topic": "CrossAxisAlignment",
    "tag": "Core Concept",
    "question": "Inside a `Column`, which property forces all child cards/buttons to stretch full width across the horizontal axis?",
    "options": [
      "textDirection: TextDirection.ltr",
      "crossAxisAlignment: CrossAxisAlignment.stretch",
      "mainAxisSize: MainAxisSize.max",
      "mainAxisAlignment: MainAxisAlignment.stretch"
    ],
    "answer": 1,
    "explanation": "Trong `Column`, trục phụ (cross axis) là chiều ngang → `crossAxisAlignment: CrossAxisAlignment.stretch` kéo giãn các phần tử con kín chiều ngang."
  }
);
