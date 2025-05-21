import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CarRental from './components/CarRentalPage/CarRental'
import Login from './components/Login'
import ApartmentDetail from './components/Apartment/ApartmentDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car-rental" element={<CarRental />} />
      <Route path="/login" element={<Login />} />
      <Route path="/apartment/:id" element={<ApartmentDetail />} />
    </Routes>
  )
}

export default App