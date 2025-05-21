const ApartmentDetails = ({ details }) => (
  <section className="mt-8 max-w-4xl">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Property details</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
      {Object.entries(details).map(([category, items], idx) => (
        <div key={idx}>
          <h3 className="font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default ApartmentDetails