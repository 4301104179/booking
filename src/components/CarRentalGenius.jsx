const CarRentalGenius = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <h2 className="font-extrabold text-base mb-3">Đi nhiều hơn, chi ít hơn</h2>
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-md p-4 shadow-sm">
      <div className="max-w-xl text-sm text-gray-700">
        <p className="font-semibold mb-1">Đăng nhập để tiết kiệm</p>
        <p>Chỉ cần tìm nhãn Genius xanh lam để tiết kiệm 10% cho một số xe thuê</p>
        <div className="mt-2 space-x-2">
          <button
            className="bg-booking-button text-white px-3 py-1.5 rounded text-sm font-semibold hover:bg-booking-button-hover"
            type="button"
          >
            Đăng nhập
          </button>
          <button
            className="text-booking-button text-sm font-normal hover:underline"
            type="button"
          >
            Đăng ký
          </button>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <img
          alt="Hộp quà Genius màu xanh với confetti và nền xanh dương"
          className="w-[100px] h-[80px] object-contain"
          src="https://storage.googleapis.com/a1aa/image/80589fa5-818f-4002-30db-2f4fb889d6ea.jpg"
        />
      </div>
    </div>
  </section>
)

export default CarRentalGenius