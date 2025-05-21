import { Link } from 'react-router-dom'

const ApartmentBreadcrumb = ({ title }) => (
  <div className="max-w-7xl mx-auto px-3 py-3 text-xs sm:text-sm text-gray-600">
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center space-x-1 sm:space-x-2">
      <Link className="hover:underline" to="/">
        Trang chủ
      </Link>
      <span>/</span>
      <Link className="hover:underline" to="#">
        Căn hộ
      </Link>
      <span>/</span>
      <Link className="hover:underline" to="#">
        Việt Nam
      </Link>
      <span>/</span>
      <span className="font-semibold text-gray-900 truncate max-w-[12rem] sm:max-w-xs">{title}</span>
    </nav>
  </div>
)

export default ApartmentBreadcrumb