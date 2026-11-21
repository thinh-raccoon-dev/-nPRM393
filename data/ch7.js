window.PRM393_QUESTIONS.push(
  {
    "id": 202,
    "chapter": 7,
    "topic": "TextField vs TextFormField",
    "tag": "FPT Exam Favorite",
    "question": "When should you use `TextFormField` instead of a plain `TextField` in Flutter?",
    "options": [
      "When the input lives inside a `Form` widget and needs coordinated `validator` / `onSaved` / `reset()` support",
      "`TextField` is deprecated and replaced everywhere by `TextFormField`",
      "Only when accepting numeric phone numbers",
      "Only when building a standalone search bar outside any `Form`"
    ],
    "answer": 0,
    "explanation": "Slide 7: `TextField` dùng cho ô nhập đơn lẻ (VD: search bar); `TextFormField` bọc `TextField` trong `FormField` để tham gia `Form` (`validate()`, `save()`, `reset()`)."
  },
  {
    "id": 203,
    "chapter": 7,
    "topic": "Form & GlobalKey",
    "tag": "FPT Exam Favorite",
    "question": "What is the role of `final _formKey = GlobalKey<FormState>();` attached to `Form(key: _formKey, ...)`?",
    "options": [
      "It shares the exact same key across multiple `Form` widgets on different screens",
      "It acts as a unique identifier to access the `Form`'s `FormState` from outside (e.g., inside a Submit button's `onPressed`) to call `validate()`, `save()`, or `reset()`",
      "It encrypts every password field inside the form",
      "It automatically saves all fields to SQLite"
    ],
    "answer": 1,
    "explanation": "`GlobalKey<FormState>` giúp code bên ngoài (như nút Submit) truy cập `FormState` qua `_formKey.currentState`. Lưu ý: mỗi `Form` chỉ dùng 1 key riêng, KHÔNG dùng chung 1 key cho 2 `Form`!"
  },
  {
    "id": 204,
    "chapter": 7,
    "topic": "FormState Methods",
    "tag": "FPT Exam Favorite",
    "question": "What does `_formKey.currentState!.validate()` return?",
    "options": [
      "A `Future<bool>` after calling the backend server",
      "`true` if at least one field is non-empty",
      "`true` ONLY if EVERY field's `validator` returned `null`; otherwise `false` (and displays each field's inline `errorText`)",
      "A `Map<String, String>` of all field values"
    ],
    "answer": 2,
    "explanation": "3 phương thức của `FormState`: `validate()` chạy tất cả validator và chỉ trả `true` khi MỌI trường trả về `null`; `save()` gọi mọi `onSaved`; `reset()` đưa về `initialValue`."
  },
  {
    "id": 205,
    "chapter": 7,
    "topic": "FormState Methods",
    "tag": "Core Concept",
    "question": "Which `FormState` method invokes every child `TextFormField`'s `onSaved` callback?",
    "options": [
      "_formKey.currentState!.save()",
      "_formKey.currentState!.reset()",
      "_formKey.currentState!.commit()",
      "_formKey.currentState!.validate()"
    ],
    "answer": 0,
    "explanation": "`_formKey.currentState!.save()` kích hoạt callback `onSaved` của toàn bộ các `FormField` con trong Form."
  },
  {
    "id": 206,
    "chapter": 7,
    "topic": "FormState Methods",
    "tag": "Core Concept",
    "question": "What does calling `_formKey.currentState!.reset()` do to all fields inside the `Form`?",
    "options": [
      "Submits the form to the repository",
      "Resets every field back to its `initialValue` and clears validation errors",
      "Deletes the `GlobalKey` from memory",
      "Disposes all `TextEditingController` instances"
    ],
    "answer": 1,
    "explanation": "`reset()` đưa tất cả field về lại `initialValue` ban đầu và xóa thông báo lỗi hiện tại."
  },
  {
    "id": 207,
    "chapter": 7,
    "topic": "GlobalKey Null Safety",
    "tag": "Code Reading",
    "question": "When should you write `_formKey.currentState?.validate() ?? false` instead of `_formKey.currentState!.validate()`?",
    "options": [
      "Only inside `StatelessWidget`",
      "Whenever the `Form` might be conditionally unmounted or not currently on screen, avoiding a null-check crash",
      "Never — `!` is always safer",
      "Only when `autovalidateMode` is `always`"
    ],
    "answer": 1,
    "explanation": "Slide 7: Dùng `currentState!` chỉ khi chắc chắn Form đang hiển thị trên màn hình; dùng `?.` nếu Form có thể bị ẩn/unmount để tránh crash."
  },
  {
    "id": 208,
    "chapter": 7,
    "topic": "TextEditingController",
    "tag": "Core Concept",
    "question": "What does a `TextEditingController` allow your Dart code to do with a text field?",
    "options": [
      "Read `.text`, write `.text = ...`, `.clear()`, and attach listeners (since it implements `Listenable`)",
      "Change the app's `ThemeMode`",
      "Persist drafts to SharedPreferences automatically",
      "Automatically validate regex patterns without a `validator`"
    ],
    "answer": 0,
    "explanation": "`TextEditingController` sở hữu nội dung text của 1 ô nhập: đọc `.text`, gán `.text = ...`, xóa `.clear()`, và lắng nghe thay đổi (`Listenable`)."
  },
  {
    "id": 209,
    "chapter": 7,
    "topic": "Disposal Discipline",
    "tag": "FPT Exam Favorite",
    "question": "Look at the `dispose()` override below. What is the CORRECT ordering rule for disposing controllers?",
    "code": "@override\nvoid dispose() {\n  _name.dispose();\n  _email.dispose();\n  super.dispose();\n}",
    "options": [
      "Call `dispose()` inside `build()`",
      "Dispose every `TextEditingController` and `FocusNode` BEFORE calling `super.dispose()` LAST",
      "`TextEditingController` does not need `dispose()` because Dart has garbage collection",
      "`super.dispose()` must be called FIRST before disposing controllers"
    ],
    "answer": 1,
    "explanation": "Slide 7: Luôn gọi `c.dispose()` cho mọi controller và `FocusNode` TRƯỚC, rồi gọi `super.dispose()` CUỐI CÙNG để giải phóng tài nguyên native, tránh memory leak."
  },
  {
    "id": 210,
    "chapter": 7,
    "topic": "Disposal Errors",
    "tag": "Exam Trap",
    "question": "What happens if code attempts to read `controller.text` AFTER `controller.dispose()` has already been called?",
    "options": [
      "Flutter throws an assertion/error: `'A TextEditingController was used after being disposed'`",
      "It automatically re-creates the controller",
      "It returns `null`",
      "It safely returns an empty string `''`"
    ],
    "answer": 0,
    "explanation": "Slide 7 (Disposal Discipline): Sau khi `dispose()`, mọi thao tác đọc/ghi `controller.text` sẽ ném lỗi `'A TextEditingController was used after being disposed'`."
  },
  {
    "id": 211,
    "chapter": 7,
    "topic": "Input Contracts",
    "tag": "Core Concept",
    "question": "How do `inputFormatters` (such as `FilteringTextInputFormatter.digitsOnly`) differ from a `validator` on a `TextFormField`?",
    "options": [
      "They perform the exact same task and cannot be used together",
      "`validator` hides password dots, while `inputFormatters` displays red error messages",
      "`inputFormatters` reject/filter disallowed characters AS THE USER TYPES, whereas `validator` checks the overall semantic meaning (e.g., length, format, rules)",
      "`inputFormatters` run on the backend server only"
    ],
    "answer": 2,
    "explanation": "Slide 7: `inputFormatters` lọc/chặn ký tự ngay lúc gõ (VD: chỉ cho nhập số); `validator` kiểm tra ý nghĩa/quy tắc nghiệp vụ của chuỗi."
  },
  {
    "id": 212,
    "chapter": 7,
    "topic": "Keyboard & Password",
    "tag": "Core Concept",
    "question": "Which two `TextFormField` properties hide typed password characters and hint password managers to autofill an email address respectively?",
    "options": [
      "`obscureText: true` and `autofillHints: [AutofillHints.email]`",
      "`isPassword: true` and `keyboardType: TextInputType.text`",
      "`hidden: true` and `autoComplete: 'email'`",
      "`mask: '*'` and `labelText: 'Email'`"
    ],
    "answer": 0,
    "explanation": "`obscureText: true` ẩn ký tự mật khẩu; `autofillHints` (`AutofillHints.email`) báo OS/trình quản lý mật khẩu tự điền; `keyboardType` chọn layout bàn phím (`emailAddress`, `phone`, `number`)."
  },
  {
    "id": 213,
    "chapter": 7,
    "topic": "Validator Contract",
    "tag": "FPT Exam Favorite",
    "question": "What is the exact Dart type signature and return convention of a `TextFormField` `validator`?",
    "options": [
      "`Future<String?> Function(String)` — returns `'OK'` when valid",
      "`String? Function(String? value)` — `null` = VALID; non-null `String` = error message shown as `errorText`",
      "`bool Function(String)` — `true` = valid, `false` = invalid",
      "`void Function(String?)` — throws an exception when invalid"
    ],
    "answer": 1,
    "explanation": "Bẫy kinh điển! `validator` có kiểu `String? Function(String?)`: trả về **`null`** là **HỢP LỆ**, trả về chuỗi bất kỳ (kể cả `''`) sẽ hiện lỗi màu đỏ (`errorText`)!"
  },
  {
    "id": 214,
    "chapter": 7,
    "topic": "Validator Code",
    "tag": "Code Reading",
    "question": "Look at the email validator below. Why does it start with `final text = value?.trim() ?? '';`?",
    "code": "validator: (value) {\n  final text = value?.trim() ?? '';\n  if (text.isEmpty) return 'Email is required';\n  if (!_emailRegex.hasMatch(text)) return 'Enter a valid email';\n  return null;\n}",
    "options": [
      "Because `RegExp` only matches uppercase strings",
      "Because `value` is nullable (`String?`) and users might enter accidental leading/trailing spaces",
      "Because `trim()` encrypts the email address",
      "Because Dart Strings cannot call `isEmpty` without `trim()`"
    ],
    "answer": 1,
    "explanation": "`value` có kiểu `String?` nên phải null-check (`?? ''`) và `.trim()` để loại bỏ khoảng trắng thừa (tránh người dùng nhập toàn dấu cách vẫn vượt qua `isEmpty`)."
  },
  {
    "id": 215,
    "chapter": 7,
    "topic": "Regex Performance",
    "tag": "Best Practice",
    "question": "Why should a validation `RegExp` be declared as a top-level `final` constant rather than constructed inside the `validator` callback?",
    "options": [
      "So the regular expression is compiled ONCE instead of wasting CPU recompiling it on every single keystroke",
      "Because `TextFormField` rejects inline `RegExp`",
      "Because top-level `RegExp` validates on the server automatically",
      "Because `RegExp` cannot be created inside closures in Dart"
    ],
    "answer": 0,
    "explanation": "Slide 7: Viết `RegExp` làm hằng top-level `final` để tránh phải biên dịch lại biểu thức chính quy sau mỗi phím gõ!"
  },
  {
    "id": 216,
    "chapter": 7,
    "topic": "Regex Anatomy",
    "tag": "Code Reading",
    "question": "In the regex `r'^[w.+-]+@[w-]+.[w.-]+$'`, what do the `^` and `$` anchors enforce?",
    "options": [
      "They make the regex case-insensitive",
      "They match only uppercase letters",
      "They allow spaces anywhere inside the email",
      "They require the pattern to match the ENTIRE string from start (`^`) to end (`$`)"
    ],
    "answer": 3,
    "explanation": "`^` là đầu chuỗi và `$` là cuối chuỗi — bắt buộc toàn bộ chuỗi phải khớp pattern (không cho phép chuỗi rác dính trước/sau email)."
  },
  {
    "id": 217,
    "chapter": 7,
    "topic": "Confirm Password Validator",
    "tag": "Code Reading",
    "question": "In the confirm-password helper below, how does `confirmValidator(_password.text)` access the current password value to compare against?",
    "code": "String? Function(String?) confirmValidator(String password) {\n  return (value) {\n    if (value == null || value.isEmpty) return 'Please confirm password';\n    if (value != password) return 'Passwords do not match';\n    return null;\n  };\n}",
    "options": [
      "By reading SharedPreferences",
      "By mutating `GlobalKey` directly",
      "By returning a closure that captures the `password` argument and satisfies the standard `String? Function(String?)` signature",
      "By calling `FormState.reset()`"
    ],
    "answer": 2,
    "explanation": "Đây là closure (hàm trả về hàm validator chuẩn) bắt giữ giá trị `password` từ `_password.text` để đối chiếu."
  },
  {
    "id": 218,
    "chapter": 7,
    "topic": "AutovalidateMode",
    "tag": "FPT Exam Favorite",
    "question": "Which `AutovalidateMode` is recommended for multi-field forms so users don't see aggressive red errors on first paint before typing anything?",
    "options": [
      "AutovalidateMode.always",
      "AutovalidateMode.never",
      "AutovalidateMode.onUserInteraction",
      "AutovalidateMode.immediate"
    ],
    "answer": 2,
    "explanation": "`AutovalidateMode.disabled` (chỉ kiểm tra khi gọi `validate()`), `always` (đỏ ngay lúc vừa mở màn hình → UX tệ), **`onUserInteraction`** (khuyên dùng: kiểm tra sau khi user đã tương tác với field)."
  },
  {
    "id": 219,
    "chapter": 7,
    "topic": "Validation UX",
    "tag": "Best Practice",
    "question": "Which of the following is the BEST validation error message according to Module 7 UX guidelines?",
    "options": [
      "`ERROR_400_INVALID_FIELD`",
      "`Password must be at least 8 characters`",
      "`Invalid input`",
      "`You failed to type your password correctly!`"
    ],
    "answer": 1,
    "explanation": "Thông báo lỗi tốt (Slide 7): ngắn gọn (short), cụ thể đúng trường (specific), lịch sự (polite — không đổ lỗi kiểu 'You failed...'), hiển thị ngay dưới field (`errorText`)."
  },
  {
    "id": 220,
    "chapter": 7,
    "topic": "onSaved vs Controllers",
    "tag": "Core Concept",
    "question": "When does using `TextEditingController` shine compared to relying solely on `onSaved` + `_formKey.currentState!.save()`?",
    "options": [
      "When you do not want to use `StatefulWidget`",
      "When you need the field's text BEFORE submission — such as live character counters, confirm-password matching, or saving drafts",
      "When you want `Form.validate()` to skip the field",
      "When you want to avoid calling `dispose()`"
    ],
    "answer": 1,
    "explanation": "`onSaved` + `save()` hợp khi chỉ cần gom dữ liệu 1 lần lúc submit; `TextEditingController` tỏa sáng khi cần đọc/sửa text bất cứ lúc nào (drafts, live counters, confirm password)."
  },
  {
    "id": 221,
    "chapter": 7,
    "topic": "Client vs Server Validation",
    "tag": "Exam Trap",
    "question": "Why must the backend server re-validate EVERY field even after Flutter's client-side `FormState.validate()` passes?",
    "options": [
      "Because Dart `RegExp` does not run on iOS",
      "Because Flutter skips `validator` in release AOT builds",
      "Because client-side validation is ONLY for UX convenience — client requests can be modified, replayed, or bypassed, and only the server knows rules like 'email already taken' (OWASP)",
      "Because `GlobalKey` clears form values before HTTP POST"
    ],
    "answer": 2,
    "explanation": "Cực hay ra thi (OWASP Input Validation): Client validation chỉ là UX, KHÔNG phải bảo mật! Server phải kiểm tra lại toàn bộ và xử lý lỗi nghiệp vụ (email đã tồn tại, sự kiện hết chỗ)."
  },
  {
    "id": 222,
    "chapter": 7,
    "topic": "Async Submit Guard",
    "tag": "Code Reading",
    "question": "In the async `_submit()` handler below, what THREE protections prevent double-submits and disposed-widget crashes?",
    "code": "Future<void> _submit() async {\n  if (_submitting) return;\n  if (!(_formKey.currentState?.validate() ?? false)) return;\n  setState(() => _submitting = true);\n  try {\n    await widget.repo.register(...);\n  } finally {\n    if (mounted) setState(() => _submitting = false);\n  }\n}",
    "options": [
      "`rethrow`, `late`, and `dynamic`",
      "Re-entrance guard `if (_submitting) return;`, disabled button (`onPressed: _submitting ? null : _submit`), and `if (mounted)` check after `await`",
      "`Hot Reload`, `const`, and `Form.reset()`",
      "`GlobalKey`, `StreamBuilder`, and `SafeArea`"
    ],
    "answer": 1,
    "explanation": "3 lớp bảo vệ chuẩn cho async submit (Slide 7): cờ `_submitting` chống double-tap + disable nút (`onPressed: null`) + check `if (mounted)` sau `await` trước khi gọi `setState`/dùng `context`."
  },
  {
    "id": 223,
    "chapter": 7,
    "topic": "Draft Serialization",
    "tag": "Code Reading",
    "question": "Why does `BookingDraft.fromJson` use `json['name'] as String? ?? ''` instead of `json['name'] as String`?",
    "code": "factory BookingDraft.fromJson(Map<String, dynamic> json) => BookingDraft(\n  name: json['name'] as String? ?? '',\n  email: json['email'] as String? ?? '',\n  phone: json['phone'] as String? ?? '',\n);",
    "options": [
      "Because Dart forbids casting to `String`",
      "To convert numbers into strings automatically",
      "To delete empty keys from the JSON map",
      "To tolerate missing or null keys safely on a fresh install or partial draft without crashing"
    ],
    "answer": 3,
    "explanation": "Khi app mới cài đặt hoặc bản nháp thiếu key, `as String? ?? ''` cho kết quả chuỗi rỗng an toàn thay vì crash `TypeError`."
  },
  {
    "id": 224,
    "chapter": 7,
    "topic": "Draft Lifecycle Save",
    "tag": "FPT Exam Favorite",
    "question": "Which mixin and `AppLifecycleState` value should you observe to automatically save a form draft right before the OS might kill the backgrounded app?",
    "code": "class _BookingFormState extends State<BookingForm>\n    with WidgetsBindingObserver {\n  @override\n  void didChangeAppLifecycleState(AppLifecycleState state) {\n    if (state == AppLifecycleState.paused) saveDraft(...);\n  }\n}",
    "options": [
      "`ChangeNotifier` + `AppLifecycleState.inactive`",
      "`WidgetsBindingObserver` + `AppLifecycleState.paused`",
      "`SingleTickerProviderStateMixin` + `AppLifecycleState.resumed`",
      "`AutomaticKeepAliveClientMixin` + `AppLifecycleState.detached`"
    ],
    "answer": 1,
    "explanation": "Slide 7: Mixin `WidgetsBindingObserver` lắng nghe `didChangeAppLifecycleState` — `AppLifecycleState.paused` kích hoạt khi app rời foreground (thời điểm an toàn cuối cùng trước khi Android kill tiến trình)."
  },
  {
    "id": 225,
    "chapter": 7,
    "topic": "Focus Management",
    "tag": "Core Concept",
    "question": "What is the role of `FocusNode` and `FocusScope.of(context)` in a Flutter form?",
    "options": [
      "To encrypt text inside `TextEditingController`",
      "To validate regex patterns",
      "To zoom into product images",
      "`FocusNode` is a handle to which field currently receives keystrokes; `FocusScope` moves focus between nodes (`requestFocus`) or dismisses the keyboard (`unfocus`)"
    ],
    "answer": 3,
    "explanation": "`FocusNode` xác định ô nào đang nhận phím gõ (nhớ `dispose()`!), còn `FocusScope.of(context)` điều chuyển focus (`requestFocus`) hoặc ẩn bàn phím (`unfocus`)."
  },
  {
    "id": 226,
    "chapter": 7,
    "topic": "Keyboard Actions",
    "tag": "Code Reading",
    "question": "In the snippet below, what happens when the user taps the 'Next' button on the mobile soft keyboard?",
    "code": "TextFormField(\n  focusNode: _nameFocus,\n  textInputAction: TextInputAction.next,\n  onFieldSubmitted: (_) =>\n      FocusScope.of(context).requestFocus(_emailFocus),\n)",
    "options": [
      "The form immediately submits to the API",
      "Flutter pushes a new route",
      "`onFieldSubmitted` fires and programmatically moves keyboard focus to `_emailFocus` while keeping the keyboard open",
      "The keyboard closes and clears the name field"
    ],
    "answer": 2,
    "explanation": "`textInputAction: TextInputAction.next` đổi nhãn phím hành động thành 'Next'; khi bấm, `onFieldSubmitted` chạy và chuyển focus sang `_emailFocus` mượt mà."
  },
  {
    "id": 227,
    "chapter": 7,
    "topic": "Dismissing Keyboard",
    "tag": "FPT Exam Favorite",
    "question": "What is the standard Flutter pattern to dismiss the on-screen keyboard when the user taps empty space outside any form field?",
    "options": [
      "Call `_formKey.currentState!.reset()` on tap",
      "Wrap `Scaffold` in a `GestureDetector(onTap: () => FocusScope.of(context).unfocus(), ...)`",
      "Call `Navigator.pop(context)` on tap",
      "Set `obscureText: false`"
    ],
    "answer": 1,
    "explanation": "Slide 7: Bọc `Scaffold` trong `GestureDetector(onTap: () => FocusScope.of(context).unfocus())` để chạm ra ngoài tự động hạ bàn phím mà không xóa text đã nhập."
  },
  {
    "id": 228,
    "chapter": 7,
    "topic": "Form Scroll Safety",
    "tag": "Best Practice",
    "question": "Why MUST a multi-field `Form` live inside a scrollable container like `ListView` or `SingleChildScrollView`?",
    "options": [
      "Because the on-screen keyboard steals up to half the screen height — without scrolling, fields and the Submit button get covered or cause RenderFlex overflow",
      "Because `FocusNode` only works inside `ListView`",
      "Because `ListView` automatically validates all `TextFormField` children",
      "Because `Form` throws a compile error inside `Scaffold.body` otherwise"
    ],
    "answer": 0,
    "explanation": "Bàn phím ảo chiếm tới nửa màn hình; đặt `Form` trong `ListView` hoặc `SingleChildScrollView` giúp người dùng cuộn thấy các ô nhập và nút Submit, tránh lỗi overflow."
  },
  {
    "id": 229,
    "chapter": 7,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Why does Module 7 advise AGAINST calling `setState(() {})` on every single keystroke of a `TextFormField`?",
    "options": [
      "Because `setState` deletes the text inside `TextEditingController`",
      "Because `setState` disables `AutovalidateMode`",
      "Because rebuilding the entire form on every keypress is wasteful when `TextEditingController` already holds and notifies changes cleanly",
      "Because `onChanged` cannot call `setState`"
    ],
    "answer": 2,
    "explanation": "Slide 7 ('When NOT to Follow the Hype'): Gọi `setState` sau mỗi phím gõ làm rebuild cả cái form không cần thiết — controller đã tự quản lý và thông báo phần thay đổi rồi."
  },
  {
    "id": 230,
    "chapter": 7,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "What breaks if two separate `Form` widgets mounted at the same time share the exact same `GlobalKey<FormState>` instance?",
    "options": [
      "Both forms merge into one larger form seamlessly",
      "Nothing breaks; sharing one `GlobalKey` is recommended",
      "Flutter throws a duplicate `GlobalKey` assertion/collision error because a `GlobalKey` must be globally unique across the entire widget tree",
      "The second form automatically creates its own key"
    ],
    "answer": 2,
    "explanation": "Mỗi `GlobalKey` phải duy nhất toàn cây widget! Dùng chung 1 `GlobalKey<FormState>` cho 2 Form gây xung đột/rebuild collision."
  },
  {
    "id": 231,
    "chapter": 7,
    "topic": "Form Layout Patterns",
    "tag": "Core Concept",
    "question": "According to Module 7, which form layout pattern is the default recommendation for forms with 10 or fewer fields (like a registration/booking form)?",
    "options": [
      "A `GridView.count` with 5 columns",
      "A 10-step wizard with 1 field per page",
      "A non-scrollable fixed-height `Container`",
      "A single-page scrollable form (`ListView` / `SingleChildScrollView`)"
    ],
    "answer": 3,
    "explanation": "Slide 7 (Form Layout Patterns): Form ≤ 10 trường dùng single-page scrollable form (có thể nhóm thành các section như 'Personal Info' / 'Account Info'); form rất dài mới chia multi-step wizard."
  },
  {
    "id": 232,
    "chapter": 7,
    "topic": "Server Rejection UX",
    "tag": "Best Practice",
    "question": "When local validation passes and the user submits, but the server rejects with `BookingException('Email already taken')`, what should the UI do?",
    "options": [
      "Keep the user on the form with their typed input intact and display the specific server error message (via inline error or SnackBar)",
      "Clear every input field and navigate back to the splash screen",
      "Silently ignore the exception in an empty `catch {}`",
      "Force-crash the app so Crashlytics logs it"
    ],
    "answer": 0,
    "explanation": "Slide 7: Khi server từ chối, giữ người dùng ở lại form, TUYỆT ĐỐI không xóa dữ liệu họ đã mất công gõ, và hiển thị rõ lý do lỗi."
  },
  {
    "id": 233,
    "chapter": 7,
    "topic": "Keyboard Action Done",
    "tag": "Core Concept",
    "question": "On the LAST field of a form, which `TextInputAction` value should you use instead of `TextInputAction.next`?",
    "options": [
      "TextInputAction.previous",
      "TextInputAction.tab",
      "TextInputAction.none",
      "TextInputAction.done"
    ],
    "answer": 3,
    "explanation": "Các trường trước dùng `TextInputAction.next` để nhảy tiếp; trường cuối cùng dùng `TextInputAction.done` để đóng bàn phím hoặc gọi `_submit()`."
  },
  {
    "id": 234,
    "chapter": 7,
    "topic": "When NOT to Follow Hype",
    "tag": "Exam Trap",
    "question": "Why does Module 7 warn against setting `autovalidateMode: AutovalidateMode.always` on every form by default?",
    "options": [
      "Because it disables all validators",
      "Because painting red error text immediately on first open before the user touches any field feels harsh and makes users think something is already broken",
      "Because it only runs when `dispose()` is called",
      "Because it requires an active Wi-Fi connection"
    ],
    "answer": 1,
    "explanation": "Slide 7: `AutovalidateMode.always` bôi đỏ ngay từ lúc vừa mở màn hình khiến người dùng khó chịu — hãy dùng `onUserInteraction` (hoặc `disabled` chờ bấm submit)."
  }
);
