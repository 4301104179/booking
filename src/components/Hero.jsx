const Hero = () => (
  <section className="relative w-full">
    <img
      alt="Family walking at resort at sunset with warm lighting and wooden cabins"
      className="w-full h-[450px] object-cover"
      src="https://storage.googleapis.com/a1aa/image/052d6802-a22d-465b-7ccc-7963319fc568.jpg"
    />
    <div className="absolute top-20 left-6 sm:left-16 max-w-lg sm:max-w-xl text-white drop-shadow-lg">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-[400px] sm:max-w-none">
        Thư giãn trọn vẹn <br />tại nhà nghỉ dưỡng
      </h1>
      <p className="mt-3 text-lg sm:text-xl max-w-[400px] sm:max-w-none">
        Quây quần bên nhau trong không gian của riêng
      </p>
      <button
        className="mt-6 bg-booking-button px-7 py-3 rounded text-white font-semibold text-lg hover:bg-booking-button-hover"
        type="button"
      >
        Khám phá
      </button>
    </div>
  </section>
)

export default Hero