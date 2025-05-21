import { Link } from 'react-router-dom'

const ApartmentTitle = ({ title, rating, ratingText, reviewCount }) => (
  <section className="mt-2 sm:mt-4">
    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-4xl">{title}</h1>
    <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
      <div className="flex items-center space-x-1">
        <span className="text-white bg-booking-blue rounded px-2 py-0.5 font-semibold text-sm">
          {rating}
        </span>
        <span>{ratingText}</span>
      </div>
      <span>·</span>
      <Link className="underline hover:text-booking-blue" to="#">
       Xem tất cả {reviewCount} đánh giá
      </Link>
    </div>
  </section>
)

export default ApartmentTitle