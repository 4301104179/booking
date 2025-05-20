import Header from './Header'
import Hero from './Hero'
import SearchBar from './SearchBar'
import Promotions from './Promotions'
import AccommodationTypes from './AccommodationTypes'
import QuickBooking from './QuickBooking'
import PopularDestinations from './PopularDestinations'
import ExploreVietnam from './ExploreVietnam'
import MoreBookingInfo from './MoreBookingInfo'
import Footer from './Footer'

const Home = () => (
  <div className="bg-white text-gray-900">
    <Header />
    <Hero />
    <SearchBar />
    <Promotions />
    <AccommodationTypes />
    <QuickBooking />
    <PopularDestinations />
    <ExploreVietnam />
    <MoreBookingInfo />
    <Footer />
  </div>
)

export default Home