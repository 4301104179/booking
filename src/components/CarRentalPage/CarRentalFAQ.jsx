const faqData = [
  "Tại sao tôi nên đặt thuê xe ở Việt Nam với Booking.com?",
  "Tôi có thể đặt xe cho bạn đời, bạn bè, đồng nghiệp, v.v. của mình không?",
  "Tôi cần chuẩn bị gì để thuê một chiếc xe?",
  "Tôi cần xem xét những gì khi lựa chọn một chiếc xe?",
  "Tôi có đủ tuổi để thuê xe?",
  "Tất cả các loại phí có được bao gồm trong giá thuê xe không?",
]

const CarRentalFAQ = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <h3 className="font-extrabold text-base mb-4">Các câu hỏi thường gặp</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-900">
      {faqData.map((question, idx) => (
        <div key={idx} className="border border-gray-300 rounded-md p-3">
          <button
            aria-expanded="false"
            className="w-full flex justify-between items-center font-semibold"
            type="button"
          >
            <span>{question}</span>
            <i className="fas fa-chevron-down text-gray-600"></i>
          </button>
        </div>
      ))}
    </div>
  </section>
)

export default CarRentalFAQ