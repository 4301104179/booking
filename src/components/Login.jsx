import { Link } from 'react-router-dom'

const Login = () => (
  <div className="bg-white text-black">
    <header className="bg-booking-blue flex items-center justify-between px-4 sm:px-6 md:px-10 h-14">
      <Link className="text-white font-semibold text-sm sm:text-base" to="/">
        Booking
        <span className="font-normal">.com</span>
      </Link>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Vietnamese language"
          className="w-6 h-6 rounded-full border border-white flex items-center justify-center"
        >
          <img
            alt="Vietnam flag icon, red background with yellow star"
            className="w-4 h-3"
            src="https://storage.googleapis.com/a1aa/image/a1215cbc-f965-4ee3-1255-07e11cb12ce5.jpg"
          />
        </button>
        <button aria-label="Help" className="text-white text-lg font-normal leading-none">
          ?
        </button>
      </div>
    </header>
    <main className="max-w-md mx-auto mt-10 px-4 sm:px-6">
      <h1 className="font-semibold text-base mb-2 text-black">
        Đăng nhập hoặc tạo tài khoản
      </h1>
      <p className="text-xs mb-4 text-black">
        Bạn có thể đăng nhập tài khoản Booking.com của mình để truy cập các dịch vụ của chúng tôi.
      </p>
      <form>
        <label className="block text-xs font-semibold mb-1 text-black" htmlFor="email">
          Địa chỉ email
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-booking-button"
          id="email"
          placeholder="Nhập địa chỉ email của bạn"
          required
          type="email"
        />
        <button
          className="mt-4 w-full bg-booking-button text-white text-xs font-semibold py-2 rounded hover:bg-booking-button-hover"
          type="submit"
        >
          Tiếp tục với email
        </button>
      </form>
      <div className="relative my-6 text-center text-xs text-gray-500">
        <hr className="border-gray-300" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
          hoặc sử dụng một trong các lựa chọn này
        </span>
      </div>
      <div className="flex justify-center space-x-6">
        <button
          aria-label="Continue with Google"
          className="border border-gray-300 rounded p-3 flex items-center justify-center w-12 h-12"
        >
          <img
            alt="Google logo, multicolor G letter"
            className="w-5 h-5"
            src="https://storage.googleapis.com/a1aa/image/0e2525ce-5b2c-49e2-bc80-3a439e1745a6.jpg"
          />
        </button>
        <button
          aria-label="Continue with Apple"
          className="border border-gray-300 rounded p-3 flex items-center justify-center w-12 h-12"
        >
          <img
            alt="Apple logo, black apple icon"
            className="w-5 h-5"
            src="https://storage.googleapis.com/a1aa/image/9669171e-0fba-4785-924a-34b208f24b5d.jpg"
          />
        </button>
        <button
          aria-label="Continue with Facebook"
          className="border border-gray-300 rounded p-3 flex items-center justify-center w-12 h-12"
        >
          <img
            alt="Facebook logo, white F letter on blue background"
            className="w-5 h-5"
            src="https://storage.googleapis.com/a1aa/image/0a5d6ec2-4a1c-477d-80ca-7d5d14e19534.jpg"
          />
        </button>
      </div>
      <p className="text-center text-[10px] text-gray-500 mt-8 leading-tight">
        Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các{' '}
        <Link className="text-booking-button underline" to="#">
          Điều khoản và Điều kiện
        </Link>{' '}
        cũng như{' '}
        <Link className="text-booking-button underline" to="#">
          Chính sách An toàn và Bảo mật
        </Link>{' '}
        của chúng tôi
        <br />
        Bảo lưu mọi quyền.
        <br />
        Bản quyền (2006 - 2025) - Booking.com™
      </p>
    </main>
  </div>
)

export default Login