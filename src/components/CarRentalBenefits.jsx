const benefitsData = [
  {
    img: "https://storage.googleapis.com/a1aa/image/9d26008c-dc2f-4b04-4301-ada0059dc891.jpg",
    title: "Chúng tôi sẵn sàng hỗ trợ bạn",
    description: "Hỗ trợ khách hàng bằng hơn 30 ngôn ngữ",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/84531981-36d4-42e4-588a-6e65540d8187.jpg",
    title: "Miễn phí hủy xe",
    description: "Lên đến 48 giờ trước khi nhận xe, đối với hầu hết đơn đặt",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/94a058fe-d647-47a8-5ada-1249d5a98b75.jpg",
    title: "Hơn 5 triệu đánh giá",
    description: "Bởi khách hàng thật đã được xác minh",
  },
]

const CarRentalBenefits = () => (
  <section className="bg-gray-50 mt-10 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0">
      {benefitsData.map((benefit, idx) => (
        <div key={idx} className="flex items-center space-x-3 max-w-xs">
          <img
            alt={benefit.title}
            className="w-12 h-12 rounded-full object-cover"
            src={benefit.img}
          />
          <div className="text-xs text-gray-700">
            <p className="font-semibold text-gray-900 leading-tight">{benefit.title}</p>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default CarRentalBenefits