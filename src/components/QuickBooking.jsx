const quickBookingData = [
  "TP Hồ Chí Minh",
  "Đà Nẵng",
  "Phan Rang",
  "Hội An",
  "Huế",
  "Đồng Hới",
]

const QuickBooking = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <h2 className="font-semibold text-xl mb-6">Lên kế hoạch đặt phòng và nhanh chóng</h2>
    <div className="flex flex-wrap gap-6 text-sm text-gray-700">
      {quickBookingData.map((city, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-2 cursor-pointer hover:underline border border-gray-200 rounded px-3 py-2"
        >
          <i className="fas fa-map-marker-alt text-booking-button"></i>
          <span>{city}</span>
        </div>
      ))}
    </div>
  </section>
)

export default QuickBooking