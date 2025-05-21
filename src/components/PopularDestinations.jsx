import { Link } from 'react-router-dom'

const popularDestinationsData = [
  {
    id: '1',
    title: 'TP Hồ Chí Minh',
    img: 'https://storage.googleapis.com/a1aa/image/e4ede131-93d8-4ec1-6af7-9dc01fb8544d.jpg',
    size: 'large',
  },
  {
    id: '2',
    title: 'Đà Nẵng',
    img: 'https://storage.googleapis.com/a1aa/image/5091d64b-bb91-43cd-855d-268d1a20888d.jpg',
    size: 'large',
  },
  {
    id: '3',
    title: 'Vũng Tàu',
    img: 'https://storage.googleapis.com/a1aa/image/1553b5c3-ad3e-4961-5f49-6603ab203e6e.jpg',
    size: 'small',
  },
  {
    id: '4',
    title: 'Hà Nội',
    img: 'https://storage.googleapis.com/a1aa/image/b7d05a56-033c-4f4c-1805-0e728c373a92.jpg',
    size: 'small',
  },
  {
    id: '5',
    title: 'Đà Lạt',
    img: 'https://storage.googleapis.com/a1aa/image/23c7544d-d727-40d8-3fe3-02a0f40bd0cb.jpg',
    size: 'small',
  },
  {
    id: '6',
    title: 'Extra destination 1',
    img: 'https://storage.googleapis.com/a1aa/image/99ca1dd4-d6a5-47db-d24f-179166cd90be.jpg',
    size: 'small',
    hiddenOnMobile: true,
  },
  {
    id: '7',
    title: 'Extra destination 2',
    img: 'https://storage.googleapis.com/a1aa/image/ae1edd11-ca4c-4a25-af34-95a7e4b08651.jpg',
    size: 'small',
    hiddenOnMobile: true,
  },
]

const PopularDestinations = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <h2 className="font-semibold text-xl mb-6">Điểm đến đang thịnh hành</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      {popularDestinationsData
        .filter((item) => item.size === 'large')
        .map((item) => (
          <Link
            key={item.id}
            to={`/apartment/${item.id}`}
            className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition"
          >
            <img
              alt={`${item.title} scenic view`}
              className="w-full h-56 object-cover"
              src={item.img}
            />
            <div className="absolute top-3 left-3 text-white font-semibold text-2xl drop-shadow-lg">
              {item.title}
              <span className="ml-2 text-xl">🇻🇳</span>
            </div>
          </Link>
        ))}
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
      {popularDestinationsData
        .filter((item) => item.size === 'small')
        .map((item) => (
          <Link
            key={item.id}
            to={`/apartment/${item.id}`}
            className={`relative rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition ${
              item.hiddenOnMobile ? 'hidden sm:block' : ''
            }`}
          >
            <img
              alt={`${item.title} scenic view`}
              className="w-full h-36 object-cover"
              src={item.img}
            />
            <div className="absolute top-2 left-2 text-white font-semibold text-lg drop-shadow-lg">
              {item.title}
              <span className="ml-1 text-lg">🇻🇳</span>
            </div>
          </Link>
        ))}
    </div>
  </section>
)

export default PopularDestinations