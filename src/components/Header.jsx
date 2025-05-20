import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    return (
        <header className="bg-booking-blue text-white">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2 text-sm sm:text-base">
                <div className="flex items-center space-x-4">
                    <Link className="flex items-center" to="#">
                        <img
                            alt="Booking.com logo in white on blue background"
                            className="w-[90px] h-[30px]"
                            src="https://storage.googleapis.com/a1aa/image/64e68077-9211-4e49-2815-8f544073fcc3.jpg"
                        />
                    </Link>
                    <nav className="hidden md:flex space-x-6 font-semibold">
                        <Link className="hover:underline" to="/">Chỗ ở</Link>
                        <Link className="hover:underline" to="#">Chuyến bay</Link>
                        <Link className="hover:underline" to="/car-rental">Thuê xe</Link>
                        <Link className="hover:underline" to="#">Taxi sân bay</Link>
                        <Link className="hover:underline" to="#">Điểm đến</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <button
                        aria-label="Language and currency"
                        className="flex items-center space-x-1 hover:underline"
                    >
                        <i className="fas fa-globe"></i>
                        <span>VNĐ</span>
                        <i className="fas fa-chevron-down text-xs"></i>
                    </button>
                    <Link className="hover:underline" to="/login">Đăng nhập</Link>
                    <Link
                        className="bg-white text-booking-blue px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100"
                        to="/login"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header