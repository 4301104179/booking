const SearchBar = () => (
  <section className="max-w-[1200px] mx-auto px-4 -mt-14 relative z-20">
    <form
      aria-label="Search form"
      className="bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center p-5 space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="flex items-center border border-gray-300 rounded px-4 py-3 w-full sm:w-auto sm:flex-1">
        <i className="fas fa-bed text-gray-400 mr-3 text-lg"></i>
        <input
          aria-label="Destination input"
          className="w-full outline-none text-base"
          placeholder="Bạn muốn đi đâu?"
          type="text"
        />
      </div>
      <div className="flex items-center border border-gray-300 rounded px-4 py-3 w-full sm:w-auto sm:flex-1">
        <i className="fas fa-calendar-alt text-gray-400 mr-3 text-lg"></i>
        <input
          aria-label="Check-in date input"
          className="w-full outline-none text-base"
          placeholder="Ngày nhận phòng"
          type="text"
        />
      </div>
      <div className="flex items-center border border-gray-300 rounded px-4 py-3 w-full sm:w-auto sm:flex-1">
        <i className="fas fa-calendar-alt text-gray-400 mr-3 text-lg"></i>
        <input
          aria-label="Check-out date input"
          className="w-full outline-none text-base"
          placeholder="Ngày trả phòng"
          type="text"
        />
      </div>
      <div className="flex items-center border border-gray-300 rounded px-4 py-3 w-full sm:w-auto sm:flex-1">
        <i className="fas fa-user-friends text-gray-400 mr-3 text-lg"></i>
        <input
          aria-label="Guests and rooms input"
          className="w-full outline-none text-base"
          placeholder="Người và phòng"
          type="text"
        />
      </div>
      <button
        className="bg-booking-button text-white px-8 py-3 rounded font-semibold text-lg hover:bg-booking-button-hover w-full sm:w-auto"
        type="submit"
      >
        Tìm
      </button>
    </form>
  </section>
)

export default SearchBar