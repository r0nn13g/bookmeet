import './index.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'
import Navbar from './components/NavBar.js';
import FourOhFour from './pages/FourOhFour.js';
import ShowBookings from './pages/ShowBookings.js';
import MeetingRoomById from './components/MeetingRoomById.js'
import ShowOneBooking from './pages/ShowOneBooking.js'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='*' element={<FourOhFour/>}/>
        <Route path='/' element={<Home />}/>
        <Route path="/meeting-rooms/:meetingRoomId" element={<MeetingRoomById />}/>
        <Route path="/bookings" element={<ShowBookings />}/>
        <Route path="/bookings/:id" element={<ShowOneBooking />}/>
      </Routes>
    </BrowserRouter>
  );
}