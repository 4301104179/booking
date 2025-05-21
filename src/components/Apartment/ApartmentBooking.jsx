const ApartmentBooking = ({ rooms }) => (
  <section className="mt-8 max-w-4xl border border-gray-300 rounded-lg p-4">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Loại chỗ nghỉ</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border-r border-gray-300">Room Type</th>
            <th className="px-3 py-2 border-r border-gray-300">Price per night</th>
            <th className="px-3 py-2 border-r border-gray-300">Availability</th>
            <th className="px-3 py-2">Select</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, idx) => (
            <tr key={idx} className="border-t border-gray-300">
              <td className="px-3 py-2 border-r border-gray-300">{room.type}</td>
              <td className="px-3 py-2 border-r border-gray-300">{room.price}</td>
              <td
                className={`px-3 py-2 border-r border-gray-300 font-semibold ${
                  room.status === 'available' ? 'text-green-700' : 'text-red-600'
                }`}
              >
                {room.availability}
              </td>
              <td className="px-3 py-2">
                <button
                  className={`px-3 py-1 rounded w-full text-center text-sm font-semibold ${
                    room.status === 'available'
                      ? 'bg-booking-blue text-white hover:bg-booking-button-hover transition'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={room.status !== 'available'}
                >
                  {room.status === 'available' ? 'Đặt ngay' : 'Đặt ngay'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default ApartmentBooking