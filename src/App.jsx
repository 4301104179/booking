import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CarRental from './components/CarRental'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car-rental" element={<CarRental />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App