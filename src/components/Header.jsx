// import { Link, useLocation } from 'react-router-dom'

// const Header = () => {
//     const location = useLocation()
//     return (
//         <header className="bg-booking-blue text-white">
//             <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2 text-sm sm:text-base">
//                 <div className="flex items-center space-x-4">
//                     <Link className="flex items-center" to="#">
//                         <img
//                             alt="Booking.com logo in white on blue background"
//                             className="w-[90px] h-[30px]"
//                             src="https://storage.googleapis.com/a1aa/image/64e68077-9211-4e49-2815-8f544073fcc3.jpg"
//                         />
//                     </Link>
//                     <nav className="hidden md:flex space-x-6 font-semibold">
//                         <Link className="hover:underline" to="/">Chỗ ở</Link>
//                         <Link className="hover:underline" to="#">Chuyến bay</Link>
//                         <Link className="hover:underline" to="/car-rental">Thuê xe</Link>
//                         <Link className="hover:underline" to="#">Taxi sân bay</Link>
//                         <Link className="hover:underline" to="#">Điểm đến</Link>
//                     </nav>
//                 </div>
//                 <div className="flex items-center space-x-4 text-sm">
//                     <button
//                         aria-label="Language and currency"
//                         className="flex items-center space-x-1 hover:underline"
//                     >
//                         <i className="fas fa-globe"></i>
//                         <span>VNĐ</span>
//                         <i className="fas fa-chevron-down text-xs"></i>
//                     </button>
//                     <Link className="hover:underline" to="/login">Đăng nhập</Link>
//                     <Link
//                         className="bg-white text-booking-blue px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100"
//                         to="/login"
//                     >
//                         Đăng ký
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header

import { Link } from 'react-router-dom'

const Header = () => (
    <header className="bg-booking-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-20">
                <div className="flex items-center space-x-8">
                    <Link className="font-extrabold text-lg leading-none select-none" to="/">
                        Booking
                        <span className="font-normal">.com</span>
                    </Link>
                    <ul className="hidden md:flex items-center space-x-6 text-sm font-normal">
                        <li>
                            <button
                                aria-current="page"
                                className="flex items-center space-x-1 border border-white rounded-full px-4 py-1 text-white text-sm font-normal cursor-default"
                            >
                                <i className="fas fa-car text-white text-base"></i>
                                <span>Lưu trú</span>
                            </button>
                        </li>
                        <li>
                            <Link to="/car-rental">
                                <span>Thuê xe</span>
                            </Link>
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

export default Header