import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Navbar';
import './App.css';
import Banner from './assets/Banner';
import Poster from './assets/Poster';
import Popular from './assets/Popular';
import Footer from './assets/Footer';
import About from './assets/About';
import Payment from './assets/Payment';
import Booking from './assets/Booking';
import Layout from './assets/Layout';
import Information from './assets/Information';
import Searchflight from './assets/Searchflight';
import Searchbus from './assets/Searchbus';
import Hotel from './assets/Hotel';
import Paymenthotel from './assets/Paymenthotel';
import Searchhotel from './assets/Searchhotel';
import Hover from './assets/Hover';
import Paymentbus from './assets/Paymentbus';
import LoginPopup from './assets/LoginPopup'; // ✅ this is our popup
import ProfilePage from './profile/ProfilePage'; // Import ProfilePage

function App() {
  return (
    <>
      <BrowserRouter>
        {/* ✅ Popup appears globally once */}
        <LoginPopup />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Hover />
                <Poster />
                <Popular />
                <About />
                <Information />
                <Footer />
              </>
            }
          />

          <Route element={<Layout />}>
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/searchflight" element={<Searchflight />} />
            <Route path="/booking/hotel/paymenthotel" element={<Paymenthotel />} />
            <Route path="/booking/hotel/searchhotel" element={<Searchhotel />} />
            <Route path="/booking/searchbus" element={<Searchbus />} />
            <Route path="/booking/searchbus/paymentbus" element={<Paymentbus />} />
            <Route
              path="/booking/hotel/paymenthotel/searchflight/hotel"
              element={<Hotel />}
            />
          </Route>

          {/* Add Profile Page Route */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
