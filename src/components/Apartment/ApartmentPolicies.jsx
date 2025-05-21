const ApartmentPolicies = ({ policies }) => (
  <section className="mt-8 max-w-4xl">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Policies</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
      <div>
        <h3 className="font-semibold mb-2">Check-in & Check-out</h3>
        <ul className="space-y-1">
          {policies.checkInOut.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Cancellation</h3>
        <p>{policies.cancellation}</p>
      </div>
    </div>
  </section>
)

export default ApartmentPolicies