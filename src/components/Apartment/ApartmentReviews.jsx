const ApartmentReviews = ({ reviews }) => (
  <section className="mt-8 max-w-4xl">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Guest reviews</h2>
    <div className="space-y-4 text-sm text-gray-700">
      {reviews.map((review, idx) => (
        <div key={idx} className="border border-gray-300 rounded p-3">
          <p className="font-semibold">{review.name}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export default ApartmentReviews