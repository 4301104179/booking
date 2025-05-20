import CarRentalHeader from './CarRentalHeader'
import CarRentalHero from './CarRentalHero'
import CarRentalSearch from './CarRentalSearch'
import CarRentalGenius from './CarRentalGenius'
import CarRentalBenefits from './CarRentalBenefits'
import CarRentalFAQ from './CarRentalFAQ'
import CarRentalLinks from './CarRentalLinks'
import CarRentalFooter from './CarRentalFooter'

const CarRental = () => (
  <div className="bg-white text-gray-900">
    <CarRentalHeader />
    <main>
      <CarRentalHero />
      <CarRentalSearch />
      <CarRentalGenius />
      <CarRentalBenefits />
      <CarRentalFAQ />
      <CarRentalLinks />
      <CarRentalFooter />
    </main>
  </div>
)

export default CarRental