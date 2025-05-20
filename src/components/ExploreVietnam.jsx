const exploreVietnamData = [
  {
    title: "TP Hồ Chí Minh",
    img: "https://storage.googleapis.com/a1aa/image/0e4faea2-e0b4-4893-82f9-7444a36e2050.jpg",
  },
  {
    title: "Hà Nội",
    img: "https://storage.googleapis.com/a1aa/image/2d909748-56cc-4930-8d91-867d8958bb23.jpg",
  },
  {
    title: "Vũng Tàu",
    img: "https://storage.googleapis.com/a1aa/image/9b5e0528-8740-47e0-8588-7af5e7cb88d5.jpg",
  },
  {
    title: "Đà Nẵng",
    img: "https://storage.googleapis.com/a1aa/image/c0bb8c25-dbe5-4ba3-d132-5d61dad1c558.jpg",
  },
  {
    title: "Hội An",
    img: "https://storage.googleapis.com/a1aa/image/b417ef11-6c2f-4dbe-2161-5ba6ff6dab0c.jpg",
  },
]

const benefits = [
  {
    text: "Đặt lại dễ dàng, hoàn tiền ngay lập tức",
    icon: "https://storage.googleapis.com/a1aa/image/437b8b9d-ae38-43d3-b1d6-d90ff6634751.jpg",
  },
  {
    text: "Hoàn 1 triệu đặt phòng đầu tiên",
    icon: "https://storage.googleapis.com/a1aa/image/437b8b9d-ae38-43d3-b1d6-d90ff6634751.jpg",
  },
  {
    text: "Đặt và nhận điểm thưởng",
    icon: "https://storage.googleapis.com/a1aa/image/437b8b9d-ae38-43d3-b1d6-d90ff6634751.jpg",
  },
]

const ExploreVietnam = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <h2 className="font-semibold text-xl mb-6">Khám phá Việt Nam</h2>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-8">
      {exploreVietnamData.map((item, idx) => (
        <div key={idx} className="cursor-pointer text-center text-sm text-gray-700">
          <img
            alt={`${item.title} city view`}
            className="rounded object-cover w-full h-24 mb-2"
            src={item.img}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap justify-between text-sm text-gray-600 space-y-3 sm:space-y-0">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex items-center space-x-3 w-full sm:w-auto">
          <img
            alt="Checkmark icon"
            className="w-6 h-6"
            src={benefit.icon}
          />
          <p>{benefit.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export default ExploreVietnam