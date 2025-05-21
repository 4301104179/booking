const ApartmentDescription = ({ description }) => (
  <section className="mt-6 max-w-4xl text-gray-700 text-sm sm:text-base leading-relaxed">
    {description.map((paragraph, idx) => (
      <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
        {paragraph}
      </p>
    ))}
  </section>
)

export default ApartmentDescription