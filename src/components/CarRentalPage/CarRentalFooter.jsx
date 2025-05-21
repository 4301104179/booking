const footerData = [
  {
    title: "Hỗ trợ",
    links: [
      "Các câu hỏi thường gặp về virus corona (COVID-19)",
      "Quản lí các chuyến đi của bạn",
      "Dịch vụ khách hàng",
      "Trung tâm thông tin bảo mật",
    ],
  },
  {
    title: "Khám phá thêm",
    links: [
      "Chương trình khách hàng thân thiết Genius",
      "Ưu đãi theo mùa và dịp lễ",
      "Bài viết về du lịch",
      "Booking.com dành cho Doanh Nghiệp",
      "Cho thuê xe hơi",
      "Tìm chuyến bay",
    ],
  },
  {
    title: "Điều khoản và cài đặt",
    links: [
      "Bảo mật & Cookie",
      "Điều khoản và điều kiện",
      "Tranh chấp đối tác",
      "Chính sách chống Nô lệ Hiện đại",
      "Chính sách về Quyền con người",
    ],
  },
  {
    title: "Dành cho đối tác",
    links: [
      "Đăng nhập vào trang Extranet",
      "Trợ giúp đối tác",
      "Đăng chờ nghỉ của Quý vị",
      "Trở thành đối tác phân phối",
    ],
  },
  {
    title: "Về chúng tôi",
    links: [
      "Về Booking.com",
      "Chúng tôi hoạt động như thế nào",
      "Du lịch bền vững",
      "Truyền thông",
      "Cơ hội việc làm",
      "Quan hệ cổ đông",
      "Liên hệ công ty",
    ],
  },
]

const CarRentalFooter = () => (
  <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-[11px] text-gray-600 leading-tight">
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 border-t border-gray-200 pt-6 pb-10">
      {footerData.map((section, idx) => (
        <div key={idx}>
          <h4 className="font-semibold mb-2 text-gray-900">{section.title}</h4>
          <ul className="space-y-1">
            {section.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex items-center space-x-2 text-xs text-gray-600 mb-4">
      <img
        alt="Cờ Việt Nam"
        className="w-4 h-4 object-contain"
        src="https://storage.googleapis.com/a1aa/image/3df26acb-b448-4da6-5a41-bc9a65e3548f.jpg"
      />
      <span>VNĐ</span>
    </div>
    <p className="text-center text-[9px] text-gray-400 mb-4">
      Booking.com Transport, Ltd là một phần của Booking Holdings Inc, tập đoàn đứng đầu thế giới về du lịch trực tuyến và các dịch vụ liên quan.
      <br />
      Bản quyền © 1996 – 2023 Booking.com™ Bảo lưu quyền.
    </p>
    <div className="flex justify-center space-x-4">
      <img
        alt="Logo Booking.com màu xanh dương"
        className="h-5 object-contain"
        src="https://storage.googleapis.com/a1aa/image/c9dccf26-430b-461a-51eb-4d8e3ba55651.jpg"
      />
      <img
        alt="Logo priceline màu xanh dương"
        className="h-5 object-contain"
        src="https://storage.googleapis.com/a1aa/image/fb2ddb39-9d5f-490c-4f8e-e5f8a6766a9f.jpg"
      />
      <img
        alt="Logo KAYAK màu cam"
        className="h-5 object-contain"
        src="https://storage.googleapis.com/a1aa/image/98552729-2bfe-4ade-793a-9dcd75491629.jpg"
      />
      <img
        alt="Logo agoda nhiều màu"
        className="h-5 object-contain"
        src="https://storage.googleapis.com/a1aa/image/ce059739-53f0-497f-a403-2d54cc621bb2.jpg"
      />
      <img
        alt="Logo OpenTable màu đỏ"
        className="h-5 object-contain"
        src="https://storage.googleapis.com/a1aa/image/220b5ee0-6308-4e91-e80d-f0e1d10dc7f2.jpg"
      />
    </div>
  </footer>
)

export default CarRentalFooter