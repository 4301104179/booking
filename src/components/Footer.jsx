import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: "Phổ biến với du khách từ Việt Nam",
    links: [
      "Khách sạn TP Hồ Chí Minh",
      "Khách sạn Hà Nội",
      "Khách sạn Đà Nẵng",
      "Khách sạn Hội An",
      "Khách sạn Vũng Tàu",
    ],
  },
  {
    title: "Khám phá",
    links: [
      "Điểm đến hàng đầu",
      "Khách sạn giá rẻ",
      "Khách sạn sang trọng",
      "Khách sạn gần sân bay",
      "Khách sạn có hồ bơi",
    ],
  },
  {
    title: "Dịch vụ khách hàng",
    links: [
      "Trợ giúp đặt phòng",
      "Chính sách hủy",
      "Thanh toán an toàn",
      "Liên hệ hỗ trợ",
      "Đánh giá khách sạn",
    ],
  },
  {
    title: "Về Booking.com",
    links: [
      "Giới thiệu",
      "Sự nghiệp",
      "Tin tức",
      "Đối tác",
      "Chính sách bảo mật",
    ],
  },
  {
    title: "Điều khoản",
    links: [
      "Điều khoản sử dụng",
      "Chính sách cookie",
      "Chính sách quyền riêng tư",
      "Quyền sở hữu trí tuệ",
      "Báo cáo vấn đề",
    ],
  },
  {
    title: "Kết nối với chúng tôi",
    links: [
      { label: "Facebook", icon: "fab fa-facebook-f", href: "#" },
      { label: "Twitter", icon: "fab fa-twitter", href: "#" },
      { label: "Instagram", icon: "fab fa-instagram", href: "#" },
      { label: "YouTube", icon: "fab fa-youtube", href: "#" },
    ],
    isSocial: true,
  },
]

const Footer = () => (
  <footer className="max-w-[1200px] mx-auto px-4 mt-14 text-xs text-gray-600">
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 border-b border-gray-300 pb-8">
      {footerLinks.map((section, idx) => (
        <div key={idx}>
          <h3 className="font-semibold mb-3">{section.title}</h3>
          {section.isSocial ? (
            <ul className="flex space-x-5 text-lg">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    aria-label={link.label}
                    className="hover:text-booking-button"
                    to={link.href}
                  >
                    <i className={link.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link className="hover:underline" to="#">{link}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-gray-500 text-xs space-y-3 sm:space-y-0">
      <div>© 2024 Booking.com™. All rights reserved.</div>
      <div className="flex space-x-6">
        <Link className="hover:underline" to="#">Privacy</Link>
        <Link className="hover:underline" to="#">Terms</Link>
        <Link className="hover:underline" to="#">Sitemap</Link>
      </div>
    </div>
  </footer>
)

export default Footer