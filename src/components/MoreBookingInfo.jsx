const MoreBookingInfo = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg p-8">
      <div className="text-white bg-booking-button rounded-full w-36 h-36 flex items-center justify-center text-center text-xl font-semibold leading-tight">
        Tìm cottage <br />cho chuyến đi tới
      </div>
      <div className="flex-1 sm:ml-10 mt-6 sm:mt-0 w-full sm:w-auto">
        <input
          aria-label="Search destination input"
          className="w-full border border-gray-300 rounded px-4 py-3 text-base outline-none"
          placeholder="Nhập điểm đến"
          type="text"
        />
      </div>
      <button
        className="bg-booking-button text-white px-8 py-3 rounded font-semibold text-lg hover:bg-booking-button-hover mt-6 sm:mt-0"
        type="submit"
      >
        Tìm kiếm
      </button>
    </div>
  </section>
)

export default MoreBookingInfo