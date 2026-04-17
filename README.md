# Landing Page: Hà Đô Centrosa - Tòa Jasmine

Đây là trang web giới thiệu dành cho cư dân sinh sống tại chung cư Hà Đô Centrosa, tòa Jasmine. Thiết kế sử dụng tông màu chủ đạo là trắng kem, xanh lá nhạt và vàng nhằm mang lại cảm giác hiện đại, sang trọng, và minh bạch.

## Công nghệ sử dụng
- **HTML5**: Cấu trúc nội dung chuẩn SEO và ngữ nghĩa.
- **CSS3 (Vanilla)**: Tách biệt trong `style.css` với việc sử dụng CSS Variables (biến) cho màu sắc, font chữ. Hệ thống class linh hoạt, responsive mượt mà thông qua media queries.
- **JavaScript (Vanilla)**: Chịu trách nhiệm cho hiệu ứng cuộn trang, thanh menu di động (ẩn/hiện) và xử lý biểu mẫu (submit button click) giả lập.

## Yêu cầu môi trường
Ứng dụng sử dụng cấu trúc thuần HTML/CSS/JS nên **bạn không cần cài đặt** Node.js hay React. Chỉ cần có một trình duyệt web.

## Hướng dẫn chạy

### Cách 1: Chạy trực tiếp trên trình duyệt
Bước 1: Mở thư mục chứa source code.
Bước 2: Click đúp vào file `index.html`. Trình duyệt sẽ mở trực tiếp trang web lên.

### Cách 2: Chạy thông qua trình chủ cục bộ (Virtual Live Server)
Nếu bạn đang sử dụng VSCode, hãy cài đặt extension **Live Server** (Ext ID: `ritwickdey.liveserver`) và click nút "Go Live" ở góc dưới bên phải màn hình.
Hoặc sử dụng `http-server` (nếu đã cài Node.js):
```bash
npx http-server ./
```

## Chú giải cấu trúc
- `index.html`: Cấu trúc chính bao gồm Header (Menu), Hero block, các section Giới thiệu, Tin tức, Văn bản, Pháp luật, và Form liên hệ.
- `style.css`: Nơi duy trì mọi thuộc tính đồ họa ấn tượng nhất. Cấu hình biến môi trường nằm ở đầu tệp (:root).
- `script.js`: Script nhỏ gọn bắt hành động và gán class thực thi hiệu ứng.
- `assets/`: Khu vực chứa hình ảnh.

---

> _Thiết kế bởi Yến Linh_
