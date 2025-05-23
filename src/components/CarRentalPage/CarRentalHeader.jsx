import { Link } from 'react-router-dom'

const CarRentalHeader = () => (
    <header className="bg-booking-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-20">
                <div className="flex items-center space-x-8">
                    <Link className="font-extrabold text-lg leading-none select-none" to="/">
                        Booking
                        <span className="font-normal">.com</span>
                    </Link>
                    <ul className="hidden md:flex items-center space-x-6 text-sm font-normal">
                        <li className="flex items-center space-x-1 cursor-pointer">
                            <i className="fas fa-car-side text-white text-base"></i>
                            <Link to="/">
                                <span>Lưu trú</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                aria-current="page"
                                className="flex items-center space-x-1 border border-white rounded-full px-4 py-1 text-white text-sm font-normal cursor-default"
                            >
                                <i className="fas fa-car text-white text-base"></i>
                                <span>Thuê xe</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center space-x-4 text-sm font-normal">
                    <span>VNĐ</span>
                    <Link className="bg-white text-booking-blue rounded px-3 py-1.5 font-semibold hover:bg-gray-100" to="/login">
                        Đăng ký
                    </Link>
                    <Link className="bg-white text-booking-blue rounded px-3 py-1.5 font-semibold hover:bg-gray-100" to="/login">
                        Đăng nhập
                    </Link>
                </div>
            </nav>
        </div>
    </header>
)

export default CarRentalHeader