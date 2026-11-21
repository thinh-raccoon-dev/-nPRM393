# -nPRM393

**PRM393 Exam Studio** — Web app ôn thi trắc nghiệm **100% tiếng Anh** môn **PRM393 (Mobile Development — Flutter & Dart)** dành cho sinh viên ĐH FPT.

## Tính năng chính
- **300 câu hỏi trắc nghiệm tiếng Anh** phủ đều **9 chương** bám sát slide bài giảng & dạng đề FE / Progress Test / Quizlet (gồm 70 câu đọc code Dart/Flutter có syntax highlighting và 112 câu bẫy hay ra thi).
- **Tùy chỉnh số câu hỏi linh hoạt**: Nút chọn nhanh (`10`, `25 PT`, `50 FE`, `100`, `Tất cả`), thanh trượt và ô nhập số trực tiếp.
- **Lọc câu hỏi thông minh**: Chọn từng chương (1–9), lọc câu chưa nắm, bẫy thi FPT, câu đọc code hoặc câu từng làm sai.
- **2 chế độ làm bài**:
  - **Luyện tập (Practice)**: Chấm điểm & giải thích chi tiết ngay sau mỗi câu.
  - **Thi thử (Exam SEB)**: Đếm ngược thời gian, chấm thang điểm 10 chuẩn qua môn FPT (≥ 5.0) và phân tích độ chính xác theo từng chương.
- **Tiện ích đi kèm**: Ôn tóm tắt 9 chương có tìm kiếm từ khóa, ngân hàng câu sai & cắm cờ lưu tự động trên `localStorage`, phím tắt (`A–D` / `1–4`, `←`/`→`, `F`), Light / Dark mode.

## Chạy & Deploy
Dự án là web tĩnh thuần HTML/CSS/JS (không cần build):
- **Chạy local**: Mở trực tiếp `index.html` hoặc chạy `python -m http.server 5500`.
- **Deploy GitHub Pages**: Vào **Settings → Pages → Build and deployment → Branch: `main` / `/ (root)` → Save**.
- **Deploy Vercel / Netlify**: Import repo này và deploy trực tiếp (không cần build command).
