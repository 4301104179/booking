const accommodationData = [
  {
    title: "Khách sạn",
    img: "https://storage.googleapis.com/a1aa/image/7cbcf0f3-ea29-4827-afb0-583de6ba9441.jpg",
  },
  {
    title: "Căn hộ",
    img: "https://storage.googleapis.com/a1aa/image/1412abd9-d105-4378-4ab6-423eb0a00bfa.jpg",
  },
  {
    title: "Resort",
    img: "https://storage.googleapis.com/a1aa/image/96518bf0-9c29-4d36-a36c-80f38e6fbc1e.jpg",
  },
  {
    title: "B&b",
    img: "https://storage.googleapis.com/a1aa/image/ddb3b6b0-cce3-415b-e810-f2464d368458.jpg",
  },
]

const AccommodationTypes = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <h2 className="font-semibold text-xl mb-6">Tin thiết loại chỗ nghỉ</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {accommodationData.map((item, idx) => (
        <div key={idx} className="cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            alt={`${item.title} accommodation`}
            className="w-full h-36 object-cover"
            src={item.img}
          />
          <p className="mt-3 text-base font-semibold px-1">{item.title}</p>
        </div>
      ))}
    </div>
  </section>
)

export default AccommodationTypes