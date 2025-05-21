const CarRentalSearch = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
    <form
      action="#"
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 max-w-5xl bg-white rounded-md p-2 border border-yellow-500 shadow-md"
      method="GET"
    >
      <label className="sr-only" htmlFor="location">
        Địa điểm nhận xe
      </label>
      <div className="flex items-center border border-yellow-500 rounded-md px-3 py-2 flex-grow min-w-[150px]">
        <i className="fas fa-search text-gray-400 mr-2"></i>
        <input
          autoComplete="off"
          className="bg-transparent placeholder-gray-400 text-black text-sm w-full focus:outline-none"
          id="location"
          name="location"
          placeholder="Quà điểm nhận xe"
          type="search"
        />
      </div>
      <div className="flex items-center border border-yellow-500 rounded-md px-3 py-2 min-w-[130px]">
        <i className="far fa-calendar-alt text-gray-400 mr-2"></i>
        <div className="flex flex-col text-xs text-gray-700">
          <span className="font-semibold text-black">Ngày nhận xe</span>
          <span>Th 6, 23 thg 5</span>
        </div>
      </div>
      <div className="flex items-center border border-yellow-500 rounded-md px-3 py-2 min-w-[90px]">
        <i className="far fa-clock text-gray-400 mr-2"></i>
        <div className="flex flex-col text-xs text-gray-700">
          <span className="font-semibold text-black">10:00</span>
        </div>
      </div>
      <div className="flex items-center border border-yellow-500 rounded-md px-3 py-2 min-w-[130px]">
        <i className="far fa-calendar-alt text-gray-400 mr-2"></i>
        <div className="flex flex-col text-xs text-gray-700">
          <span className="font-semibold text-black">Ngày trả xe</span>
          <span>Th 2, 26 thg 5</span>
        </div>
      </div>
      <div className="flex items-center border border-yellow-500 rounded-md px-3 py-2 min-w-[90px]">
        <i className="far fa-clock text-gray-400 mr-2"></i>
        <div className="flex flex-col text-xs text-gray-700">
          <span className="font-semibold text-black">10:00</span>
        </div>
      </div>
      <button
        className="bg-booking-button text-white px-5 py-2 rounded text-sm font-semibold whitespace-nowrap hover:bg-booking-button-hover"
        type="submit"
      >
        Tìm kiếm
      </button>
    </form>
    <div className="mt-2 flex items-center space-x-4 text-sm">
      <label className="flex items-center space-x-2 cursor-pointer select-none">
        <input className="w-4 h-4 border-gray-300 rounded" type="checkbox" />
        <span>Trả xe tại địa điểm khác</span>
      </label>
      <label className="flex items-center space-x-2 cursor-pointer select-none">
        <input
          aria-checked="true"
          checked
          className="w-4 h-4 border-gray-300 rounded"
          type="checkbox"
        />
        <span>Người lái xe tuổi từ 30 - 65?</span>
      </label>
    </div>
  </section>
)

export default CarRentalSearch