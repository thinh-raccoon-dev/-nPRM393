window.PRM393_QUESTIONS.push(
  {
    "id": 1,
    "chapter": 1,
    "topic": "Flutter Definition",
    "tag": "Core Concept",
    "question": "What is Flutter primarily defined as?",
    "options": [
      "A JavaScript runtime that translates web templates into native OEM controls",
      "A UI toolkit developed by Google for building natively compiled apps from a single codebase",
      "An Android-only SDK written in Kotlin for rendering Material widgets",
      "A cloud backend service for deploying mobile APIs and databases"
    ],
    "answer": 1,
    "explanation": "Theo Slide 1: Flutter là một UI toolkit do Google phát triển để xây dựng ứng dụng natively compiled (Android, iOS, Web, Desktop) từ một single codebase bằng Dart và engine riêng."
  },
  {
    "id": 2,
    "chapter": 1,
    "topic": "Rendering Engine",
    "tag": "Core Concept",
    "question": "Which rendering engine does Flutter ship with to draw every pixel consistently across platforms without relying on OEM widgets?",
    "options": [
      "WebKit",
      "Skia",
      "Gecko",
      "Blink"
    ],
    "answer": 1,
    "explanation": "Flutter dùng rendering engine riêng là Skia (viết bằng C/C++) để tự vẽ toàn bộ pixel trên màn hình — không phụ thuộc OEM widgets."
  },
  {
    "id": 3,
    "chapter": 1,
    "topic": "Flutter History",
    "tag": "Fact Check",
    "question": "What was the early internal codename of the Flutter project introduced in 2015?",
    "options": [
      "Hummingbird",
      "DartUI",
      "Fuchsia",
      "Sky"
    ],
    "answer": 3,
    "explanation": "Lịch sử Flutter (Slide 1): 2015 là dự án 'Sky', 2017 Flutter Alpha, 2018 Flutter 1.0, 2021 Flutter 2.0 (thêm Web & Desktop)."
  },
  {
    "id": 4,
    "chapter": 1,
    "topic": "Flutter History",
    "tag": "Fact Check",
    "question": "Which major Flutter release in 2021 introduced Web and Desktop support alongside Dart sound null safety?",
    "options": [
      "Flutter 3.5",
      "Flutter 2.0",
      "Flutter 1.0",
      "Flutter 1.5"
    ],
    "answer": 1,
    "explanation": "Flutter 2.0 (2021) chính thức mở rộng sang Web & Desktop và đi kèm Dart null safety."
  },
  {
    "id": 5,
    "chapter": 1,
    "topic": "Architecture",
    "tag": "FPT Exam Favorite",
    "question": "From TOP to BOTTOM, what are the three layers of Flutter's architecture?",
    "options": [
      "Framework → Engine → Embedder",
      "Embedder → Engine → Framework",
      "Engine → Framework → Embedder",
      "Widgets → Skia → Dart VM"
    ],
    "answer": 0,
    "explanation": "Từ trên xuống dưới (Top → Bottom): 1. Framework (Dart) → 2. Engine (C++/Skia) → 3. Embedder (Platform-specific glue)."
  },
  {
    "id": 6,
    "chapter": 1,
    "topic": "Architecture",
    "tag": "Core Concept",
    "question": "Which layer of the Flutter architecture is written in Dart and contains Material, Cupertino, Widgets, Animation, Painting, and Gestures?",
    "options": [
      "Kernel Layer",
      "Engine Layer",
      "Framework Layer",
      "Embedder Layer"
    ],
    "answer": 2,
    "explanation": "Framework Layer được viết hoàn toàn bằng Dart — đây là tầng lập trình viên làm việc hằng ngày (Material, Cupertino, Widgets, Rendering, Animation, Gestures, Foundation)."
  },
  {
    "id": 7,
    "chapter": 1,
    "topic": "Architecture",
    "tag": "Core Concept",
    "question": "Which language is the Flutter Engine layer primarily written in, and what are its main responsibilities?",
    "options": [
      "Dart — managing StatefulWidget lifecycles and Material theming",
      "C/C++ — rendering (Skia), text layout, accessibility, and Dart runtime management",
      "JavaScript — bridging UI calls to native views",
      "Java/Swift — drawing OEM buttons and native navigation bars"
    ],
    "answer": 1,
    "explanation": "Engine Layer viết bằng C/C++, sử dụng Skia, chịu trách nhiệm rendering, text layout, accessibility, frame scheduling và quản lý Dart Runtime/Isolates."
  },
  {
    "id": 8,
    "chapter": 1,
    "topic": "Architecture",
    "tag": "Core Concept",
    "question": "What is the primary role of the Embedder layer in Flutter's architecture?",
    "options": [
      "Providing platform-specific integration such as render surface setup, input, lifecycle, and window management",
      "Providing Material 3 color schemes and widget trees",
      "Compiling Dart source code into JavaScript bundles",
      "Evaluating SQL queries on SQLite databases"
    ],
    "answer": 0,
    "explanation": "Embedder Layer là cầu nối platform-specific (Android/iOS/Windows/macOS/Linux hoặc custom như Raspberry Pi) lo render surface, input, lifecycle, native plugins và event loop interop."
  },
  {
    "id": 9,
    "chapter": 1,
    "topic": "Rendering Pipeline",
    "tag": "FPT Exam Favorite",
    "question": "Which sequence accurately describes Flutter's rendering workflow?",
    "options": [
      "Widget Tree → Render Tree → Composited Scene → GPU Rendering",
      "Widget Tree → Composited Scene → Render Tree → GPU Rendering",
      "GPU Rendering → Render Tree → Widget Tree → Composited Scene",
      "OEM Bridge → Widget Tree → DOM Tree → GPU Rendering"
    ],
    "answer": 0,
    "explanation": "Slide 1 nêu rõ luồng render: Widget Tree → Render Tree → Composited Scene → GPU Rendering."
  },
  {
    "id": 10,
    "chapter": 1,
    "topic": "Flutter vs Others",
    "tag": "Exam Trap",
    "question": "How does Flutter fundamentally differ from React Native in rendering UI components?",
    "options": [
      "Flutter ships its own rendering engine (Skia) with no OEM widgets, whereas React Native bridges JavaScript to native components",
      "Flutter translates widgets into OEM components via a JavaScript bridge, whereas React Native uses Skia",
      "Flutter can only run in a WebView, whereas React Native compiles to ARM machine code",
      "Flutter requires separate codebases for Android and iOS, whereas React Native uses one codebase"
    ],
    "answer": 0,
    "explanation": "Flutter có engine riêng (Skia), không dùng OEM widgets và không có JS bridge overhead như React Native."
  },
  {
    "id": 11,
    "chapter": 1,
    "topic": "Choosing Flutter",
    "tag": "Exam Trap",
    "question": "In which of the following scenarios is NATIVE development (Kotlin/Swift) generally preferable over Flutter?",
    "options": [
      "Building an MVP for a startup with limited native Android/iOS developers",
      "Rapid prototyping of an internal company dashboard targeting mobile and web",
      "Building a cross-platform e-commerce or booking app with shared UI and business logic",
      "Building a high-performance 3D game, real-time graphics app, or an app requiring deep OS customization and very low-level hardware access"
    ],
    "answer": 3,
    "explanation": "Theo Slide 1 ('When Native Development Is Preferable'): ứng dụng cần deep OS customization, high-performance games/real-time graphics, very low-level hardware access, hoặc strict platform-specific UI/UX nên chọn Native."
  },
  {
    "id": 12,
    "chapter": 1,
    "topic": "Native Integration",
    "tag": "Core Concept",
    "question": "When a Flutter app needs a platform-specific feature not available in pure Dart (e.g., NFC, Bluetooth, Payment SDK), how does Dart communicate with Kotlin/Java or Swift code?",
    "options": [
      "Through Hot Reload hooks",
      "Through HTML iframes",
      "Through Platform Channels",
      "Through pubspec.yaml scripts"
    ],
    "answer": 2,
    "explanation": "Flutter không loại bỏ code native mà tích hợp với Kotlin/Java (Android) hoặc Swift (iOS) thông qua Platform Channels."
  },
  {
    "id": 13,
    "chapter": 1,
    "topic": "Dart Compilation",
    "tag": "FPT Exam Favorite",
    "question": "Why does Dart support BOTH JIT (Just-In-Time) and AOT (Ahead-Of-Time) compilation for Flutter?",
    "options": [
      "JIT is only for iOS apps, while AOT is only for Android apps",
      "JIT is used for production ARM builds, while AOT enables Hot Reload during development",
      "JIT handles CSS styling, while AOT handles JSON parsing",
      "JIT enables a fast development loop (Hot Reload), while AOT compiles to native machine code for fast production performance"
    ],
    "answer": 3,
    "explanation": "Cực hay ra thi! JIT = giai đoạn dev (giúp Hot Reload dưới 1 giây); AOT = bản release/production (biên dịch sẵn ra mã máy native ARM chạy cực nhanh)."
  },
  {
    "id": 14,
    "chapter": 1,
    "topic": "Hot Reload vs Restart",
    "tag": "FPT Exam Favorite",
    "question": "What happens when you trigger Hot Reload (pressing 'r') in a running Flutter app?",
    "options": [
      "Changed Dart code is injected into the VM and the widget tree rebuilds while PRESERVING app state",
      "The entire Android Gradle / iOS Xcode build runs from scratch",
      "All dependencies in pubspec.yaml are re-downloaded and compiled",
      "The app restarts from main(), wiping all current state"
    ],
    "answer": 0,
    "explanation": "Hot Reload (r) bơm code mới vào Dart VM và dựng lại widget tree nhưng GIỮ NGUYÊN app state (keeps app state)."
  },
  {
    "id": 15,
    "chapter": 1,
    "topic": "Hot Reload vs Restart",
    "tag": "Exam Trap",
    "question": "You modified the code inside main() and updated a static initializer in your Flutter app. Why didn't Hot Reload reflect your change, and what should you use instead?",
    "options": [
      "Dart does not support modifying main(); you must recreate the project",
      "You must switch from the stable channel to the master channel",
      "Hot Reload ignores build() methods; run flutter doctor instead",
      "Hot Reload preserves existing state and does not re-execute main(); you need Hot Restart (R)"
    ],
    "answer": 3,
    "explanation": "Slide 1 nhấn mạnh: Thay đổi trong main() hoặc static initializers KHÔNG áp dụng bằng Hot Reload — phải dùng Hot Restart (R) để chạy lại từ main() và reset state."
  },
  {
    "id": 16,
    "chapter": 1,
    "topic": "Hot Reload vs Restart",
    "tag": "Exam Trap",
    "question": "Which action is REQUIRED after adding a new dependency or asset in pubspec.yaml or modifying native Android/iOS files?",
    "options": [
      "Full Restart (Stop + flutter run)",
      "Hot Reload (r)",
      "Opening the Widget Inspector in DevTools",
      "Hot Restart (R)"
    ],
    "answer": 0,
    "explanation": "Thay đổi pubspec.yaml hoặc code native (android/, ios/) bắt buộc phải Full Restart (dừng app và chạy lại flutter run)."
  },
  {
    "id": 17,
    "chapter": 1,
    "topic": "Environments",
    "tag": "Core Concept",
    "question": "Which statement accurately compares DartPad, VS Code, and Android Studio for Flutter development?",
    "options": [
      "VS Code compiles Flutter to a different runtime than Android Studio",
      "DartPad supports Android emulators and native platform plugins directly in the browser",
      "Android Studio requires installing the Dart plugin manually before installing the Flutter plugin",
      "DartPad runs in the browser with no installation for quick demos, VS Code is a lightweight IDE with extensions, and Android Studio provides the full IDE + Android SDK + Emulator"
    ],
    "answer": 3,
    "explanation": "DartPad dùng học cú pháp/demo nhanh trên web (không có emulator/plugin native); VS Code nhẹ + extensions; Android Studio đủ IDE + SDK + Emulator (cài plugin Flutter tự cài luôn Dart). Cả 3 dùng chung Flutter runtime."
  },
  {
    "id": 18,
    "chapter": 1,
    "topic": "CLI & Setup",
    "tag": "FPT Exam Favorite",
    "question": "Which CLI command checks your entire Flutter toolchain setup and reports any missing dependencies or configuration issues?",
    "options": [
      "flutter verify",
      "flutter check-env",
      "flutter inspect",
      "flutter doctor"
    ],
    "answer": 3,
    "explanation": "flutter doctor (hoặc flutter doctor -v để xem chi tiết) kiểm tra SDK, Android toolchain, Xcode, VS Code, thiết bị kết nối và báo những gì còn thiếu."
  },
  {
    "id": 19,
    "chapter": 1,
    "topic": "Setup Troubleshooting",
    "tag": "Core Concept",
    "question": "When `flutter doctor` reports an 'Android license status unknown' error, which command fixes it?",
    "options": [
      "flutter clean --android",
      "flutter doctor --android-licenses",
      "flutter upgrade --licenses",
      "flutter pub get --licenses"
    ],
    "answer": 1,
    "explanation": "Slide 1 (Common Setup Issues): Chạy `flutter doctor --android-licenses` và chấp nhận tất cả."
  },
  {
    "id": 20,
    "chapter": 1,
    "topic": "Setup Troubleshooting",
    "tag": "Core Concept",
    "question": "If your terminal displays `flutter: command not found`, what is the most likely root cause?",
    "options": [
      "You pressed 'r' instead of 'R'",
      "Android Studio Logcat is closed",
      "Dart null safety is disabled in pubspec.yaml",
      "The Flutter SDK bin folder has not been added to the system PATH environment variable"
    ],
    "answer": 3,
    "explanation": "Lỗi 'flutter: command not found' xảy ra khi chưa thêm thư mục SDK Flutter vào biến môi trường PATH."
  },
  {
    "id": 21,
    "chapter": 1,
    "topic": "Project Structure",
    "tag": "Core Concept",
    "question": "Where is the entry point of every Flutter application located by default?",
    "options": [
      "android/app/main.dart",
      "lib/main.dart",
      "src/index.dart",
      "pubspec.yaml"
    ],
    "answer": 1,
    "explanation": "lib/main.dart chứa hàm main() — điểm khởi chạy của mọi ứng dụng Flutter. Bạn sẽ làm việc 95% thời gian trong thư mục lib/."
  },
  {
    "id": 22,
    "chapter": 1,
    "topic": "Project Structure",
    "tag": "Core Concept",
    "question": "What is the primary purpose of the `pubspec.yaml` file in a Flutter project?",
    "options": [
      "Storing compiled ARM machine code for Android releases",
      "Declaring project metadata, package dependencies, SDK constraints, fonts, and assets",
      "Configuring Android Emulator virtual memory",
      "Writing unit tests for widgets"
    ],
    "answer": 1,
    "explanation": "pubspec.yaml khai báo thông tin project, dependencies từ pub.dev, assets, fonts... (Lưu ý: YAML dùng thụt lề 2 dấu cách, không dùng Tab)."
  },
  {
    "id": 23,
    "chapter": 1,
    "topic": "Project Structure",
    "tag": "Core Concept",
    "question": "Which folder in a standard Flutter project contains unit and widget test files?",
    "options": [
      "test/",
      "android/",
      "lib/",
      "spec/"
    ],
    "answer": 0,
    "explanation": "Thư mục test/ chứa các file kiểm thử (unit test, widget test)."
  },
  {
    "id": 24,
    "chapter": 1,
    "topic": "First App",
    "tag": "Code Reading",
    "question": "In the minimal Flutter 'Hello World' app below, what is the role of `runApp(const MyApp())`?",
    "code": "void main() => runApp(const MyApp());",
    "options": [
      "It checks for missing Android SDK licenses",
      "It inflates the given root widget and attaches it to the screen to start the Flutter framework",
      "It automatically creates a SQLite database",
      "It compiles Dart code into JavaScript for DartPad"
    ],
    "answer": 1,
    "explanation": "runApp() nhận root widget (thường là MyApp) và gắn nó vào màn hình, khởi chạy Flutter widget tree."
  },
  {
    "id": 25,
    "chapter": 1,
    "topic": "Widget Basics",
    "tag": "Core Concept",
    "question": "In Flutter, widgets are described as 'immutable'. What happens when a widget's UI needs to change?",
    "options": [
      "The Embedder layer directly edits the Dart source file",
      "Flutter rebuilds a new widget configuration via build() rather than mutating the old widget instance",
      "The entire app must perform a Full Restart",
      "You mutate the widget's properties directly in place without rebuilding"
    ],
    "answer": 1,
    "explanation": "Widgets là bất biến (immutable) — thay đổi giao diện đồng nghĩa với rebuild (tạo cấu hình widget mới qua build()), không mutate trực tiếp widget cũ."
  },
  {
    "id": 26,
    "chapter": 1,
    "topic": "Scaffold Anatomy",
    "tag": "Core Concept",
    "question": "Which `Scaffold` slot is used to display a slide-out side menu?",
    "options": [
      "floatingActionButton",
      "appBar",
      "drawer",
      "body"
    ],
    "answer": 2,
    "explanation": "5 slots cơ bản của Scaffold: appBar (thanh trên), body (nội dung chính), floatingActionButton (nút hành động chính), bottomNavigationBar (điều hướng tab dưới), drawer (menu trượt bên)."
  },
  {
    "id": 27,
    "chapter": 1,
    "topic": "Scaffold Anatomy",
    "tag": "Code Reading",
    "question": "Look at the snippet below. Which widget slot is responsible for placing the `+` action button floating above the bottom-right corner?",
    "code": "Scaffold(\n  appBar: AppBar(title: const Text('Movies')),\n  body: const Center(child: Text('Content here')),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n)",
    "options": [
      "bottomNavigationBar",
      "body",
      "floatingActionButton",
      "appBar"
    ],
    "answer": 2,
    "explanation": "floatingActionButton đặt nút hành động chính (primary action button) nổi ở góc dưới màn hình."
  },
  {
    "id": 28,
    "chapter": 1,
    "topic": "Best Practices",
    "tag": "Exam Trap",
    "question": "Which Flutter SDK release channel is recommended for production applications and coursework?",
    "options": [
      "master",
      "stable",
      "beta",
      "dev"
    ],
    "answer": 1,
    "explanation": "Slide 1 Appendix: Luôn pin kênh `stable` cho dự án thực tế và học tập; `beta` và `master` chỉ dành cho thử nghiệm."
  },
  {
    "id": 29,
    "chapter": 1,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Which of the following statements about Flutter is FALSE?",
    "options": [
      "Flutter uses a single language (Dart) for both UI and business logic",
      "Flutter completely replaces native development and guarantees zero Kotlin/Swift code in every real project",
      "Flutter DevTools includes a Widget Inspector for viewing the live widget tree",
      "Dart 3 ships with sound null safety enabled by default"
    ],
    "answer": 1,
    "explanation": "Bẫy kinh điển từ mục 'When NOT to Follow the Hype': Nói 'Flutter replaces native' hay 'zero native code' là SAI! Dự án thực tế thường xuyên viết thêm Kotlin/Swift qua Platform Channels."
  },
  {
    "id": 30,
    "chapter": 1,
    "topic": "Android Studio UI",
    "tag": "Core Concept",
    "question": "In Android Studio's interface overview, which panel is specifically used to view Android runtime logs and debugging output?",
    "options": [
      "Device Manager",
      "Project View",
      "Run Toolbar",
      "Logcat"
    ],
    "answer": 3,
    "explanation": "Logcat dùng xem Android logs & thông tin debug; Device Manager dùng quản lý emulator và thiết bị."
  },
  {
    "id": 31,
    "chapter": 1,
    "topic": "Emulator Setup",
    "tag": "Core Concept",
    "question": "If your Android emulator fails to start on Windows, what is the recommended fix mentioned in the setup checklist?",
    "options": [
      "Enable hardware virtualization (HAXM / Windows Hypervisor) and consider a lighter image like Pixel 3a / API 30",
      "Uninstall VS Code and delete lib/main.dart",
      "Disable sound null safety in pubspec.yaml",
      "Switch from Dart to JavaScript"
    ],
    "answer": 0,
    "explanation": "Slide 1 (Common Setup Issues): Bật virtualization (HAXM/Windows Hypervisor) và dùng máy ảo nhẹ hơn như Pixel 3a / API 30 cho PC cấu hình thấp."
  },
  {
    "id": 32,
    "chapter": 1,
    "topic": "Design Systems",
    "tag": "Core Concept",
    "question": "Which two built-in visual design widget libraries does Flutter provide out of the box for Android and iOS aesthetics?",
    "options": [
      "Material and Cupertino",
      "Chakra and AntDesign",
      "SwiftUI and Jetpack Compose",
      "Bootstrap and Tailwind"
    ],
    "answer": 0,
    "explanation": "Flutter cung cấp sẵn 2 bộ widget nền tảng: Material (Google/Android) và Cupertino (Apple/iOS)."
  },
  {
    "id": 33,
    "chapter": 1,
    "topic": "Platform-Aware UX",
    "tag": "Best Practice",
    "question": "What does Flutter's best practice 'Single codebase, platform-aware UX' recommend?",
    "options": [
      "Writing two completely separate Dart codebases for Android and iOS",
      "Sharing business logic across platforms while adapting navigation and platform idioms per platform where appropriate",
      "Using DartPad to deploy directly to the App Store and Play Store",
      "Forcing identical iOS navigation drawers onto Android and desktop with no adaptation"
    ],
    "answer": 1,
    "explanation": "Slide 1 Appendix: Dùng chung logic trên 1 codebase nhưng thích nghi điều hướng và thói quen UX (platform idioms) cho từng nền tảng."
  }
);
