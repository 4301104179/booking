const Promotions = () => (
  <section className="max-w-[1200px] mx-auto px-4 mt-14">
    <h2 className="font-semibold text-xl mb-6">Ưu đãi</h2>
    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
      <div className="flex-1 border border-gray-200 rounded-lg p-6 flex items-center space-x-6">
        <img
          alt="Two people smiling and enjoying a vacation"
          className="w-24 h-24 rounded object-cover"
          src="https://storage.googleapis.com/a1aa/image/ea225f1c-8603-4797-6313-94d51f9d9eeb.jpg"
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">Kỳ nghỉ nghỉ chất lượng</h3>
          <p className="text-sm text-gray-600">
            Tận hưởng ưu đãi 25% tại các khách sạn hàng đầu
          </p>
        </div>
      </div>
      <div className="flex-1 bg-booking-promo rounded-lg p-6 text-white flex items-center space-x-6">
        <img
          alt="Happy family with kids enjoying a vacation"
          className="w-24 h-24 rounded object-cover"
          src="https://storage.googleapis.com/a1aa/image/104f1a5b-1171-4811-9eda-90f17e82d37f.jpg"
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">Thông báo giữ vé máy bay Genius</h3>
          <p className="text-sm">
            Giữ vé máy bay dễ dàng hơn với chương trình Genius
          </p>
          <button
            className="mt-3 border border-white rounded px-4 py-2 text-sm font-semibold hover:bg-white hover:text-booking-promo"
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Promotions