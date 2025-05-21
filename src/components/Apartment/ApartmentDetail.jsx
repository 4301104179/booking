import { useParams } from 'react-router-dom'
import ApartmentHeader from './ApartmentHeader'
import ApartmentBreadcrumb from './ApartmentBreadcrumb'
import ApartmentTitle from './ApartmentTitle'
import ApartmentGallery from './ApartmentGallery'
import ApartmentDescription from './ApartmentDescription'
import ApartmentBooking from './ApartmentBooking'
import ApartmentDetails from './ApartmentDetails'
import ApartmentPolicies from './ApartmentPolicies'
import ApartmentReviews from './ApartmentReviews'
import ApartmentFooter from './ApartmentFooter'

// Mock data for demonstration
const mockApartment = {
  id: '1',
  title: 'Beautiful & Spacious Apartment in New York',
  rating: '8.9',
  ratingText: 'Xuất sắc',
  reviewCount: 123,
  images: [
    {
      src: 'https://storage.googleapis.com/a1aa/image/9c8e1340-cf48-4498-b0ee-f7ac5ba7caf0.jpg',
      alt: 'Living room with sofa and large window showing city view',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/bf60c2b0-14f1-46a5-1caa-3196f5680a96.jpg',
      alt: 'Kitchen with modern appliances and wooden cabinets',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/2ed12040-2211-4857-70c0-29e908a40b1b.jpg',
      alt: 'Bedroom with double bed and bedside lamps',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/7a8df7f0-f376-46a1-7a7c-4dea633a6117.jpg',
      alt: 'Bathroom with shower and white tiles',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/722c9a1b-b7d3-4735-1115-1f6bbd51b6d1.jpg',
      alt: 'Balcony view overlooking city skyline',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/1aa840d3-7cae-4fba-02af-e6362de05608.jpg',
      alt: 'Dining area with table and chairs',
    },
  ],
  description: [
    'Nằm tại vị trí thuận tiện ở trung tâm TP. Hồ Chí Minh, Morden LeParc Hotel & Spa cung cấp các phòng có điều hòa, khu vườn, Wi-Fi miễn phí và sân hiên. Khách sạn 3 sao này có dịch vụ phòng và quầy lễ tân 24 giờ. Đây là chỗ nghỉ không hút thuốc và tọa lạc cách Chợ Bến Thành 4 phút đi bộ',
    'Tất cả các căn tại khách sạn được trang bị khu vực ghế ngồi, TV màn hình phẳng và két an toàn. Tại Morden LeParc Hotel & Spa, tất cả các phòng đều được thiết kế có phòng tắm riêng với đồ vệ sinh cá nhân miễn phí và máy sấy tóc.',
    'Chỗ nghỉ có trung tâm chăm sóc sức khỏe, bao gồm phòng xông hơi khô.'
  ],
  rooms: [
    {
      type: 'Phòng Superior Giường Đôi',
      price: '$120',
      availability: 'Còn trống',
      status: 'available',
    },
    {
      type: 'Phòng Superior Có Giường Cỡ Queen',
      price: '$220',
      availability: 'Đã đặt',
      status: 'sold-out',
    },
    {
      type: 'Căn hộ gia đình',
      price: '$180',
      availability: 'Còn trống',
      status: 'available',
    },
  ],
  details: {
    general: ['Free WiFi', 'Air conditioning', 'Heating', 'Non-smoking rooms', 'Elevator'],
    bathroom: ['Private bathroom', 'Shower', 'Hairdryer', 'Free toiletries'],
    kitchen: ['Kitchenette', 'Microwave', 'Refrigerator', 'Stovetop'],
  },
  policies: {
    checkInOut: ['Check-in: From 3:00 PM', 'Check-out: Until 11:00 AM'],
    cancellation: 'Free cancellation within 48 hours of booking.',
  },
  reviews: [
    { name: 'John D.', text: 'Great location and very clean apartment. Would stay again!' },
    { name: 'Maria S.', text: 'Spacious rooms and comfortable beds. The balcony view was amazing.' },
    { name: 'Alex P.', text: 'Helpful host and easy check-in process. Highly recommend.' },
  ],
}

const ApartmentDetail = () => {
  const { id } = useParams()
  // In a real app, fetch apartment data based on id. Using mock data here.
  const apartment = mockApartment

  return (
    <div className="bg-white text-gray-900">
      <ApartmentHeader />
      <main className="max-w-7xl mx-auto px-3 pb-10">
        <ApartmentBreadcrumb title={apartment.title} />
        <ApartmentTitle
          title={apartment.title}
          rating={apartment.rating}
          ratingText={apartment.ratingText}
          reviewCount={apartment.reviewCount}
        />
        <ApartmentGallery images={apartment.images} />
        <ApartmentDescription description={apartment.description} />
        <ApartmentBooking rooms={apartment.rooms} />
        <ApartmentDetails details={apartment.details} />
        <ApartmentPolicies policies={apartment.policies} />
        <ApartmentReviews reviews={apartment.reviews} />
        <ApartmentFooter />
      </main>
      text
    </div>
  )
}

export default ApartmentDetail