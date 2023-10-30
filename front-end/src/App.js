import './index.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'
import Navbar from './components/NavBar.js';
import FourOhFour from './pages/FourOhFour.js';
import ShowBookings from './pages/ShowBookings.js';
import ShowRooms from './pages/ShowRooms.js';
import ShowOneRoom from './pages/ShowOneRoom.js'
import ShowOneBooking from './pages/ShowOneBooking.js'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='*' element={<FourOhFour/>}/>
        <Route path='/' element={<Home />}/>
        <Route path="/meeting-rooms" element={<ShowRooms />}/>
        <Route path="/bookings" element={<ShowBookings />}/>
        <Route path="/meeting-rooms/:id" element={<ShowOneRoom />}/>
        <Route path="/bookings/:id" element={<ShowOneBooking />}/>
      </Routes>
    </BrowserRouter>
  );
}
