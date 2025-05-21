const ApartmentGallery = ({ images }) => (
  <section className="mt-4 max-w-4xl">
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {images.map((image, idx) => (
        <img
          key={idx}
          alt={image.alt}
          className="rounded-lg object-cover w-full h-48 sm:h-60"
          src={image.src}
        />
      ))}
    </div>
  </section>
)

export default ApartmentGallery