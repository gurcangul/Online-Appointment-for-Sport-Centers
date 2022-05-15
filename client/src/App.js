import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  AllBookings,
  MyProfile,
  SharedLayout,
  Stats,
  AddBooking,
  Calendar,
  MyProgram,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-bookings' element={<AllBookings />} />
          <Route path='my-program' element={<MyProgram />} />
          <Route path='add-booking' element={<AddBooking />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='myProfile' element={<MyProfile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
