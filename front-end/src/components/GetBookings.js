import React, { useState, useEffect } from "react";
import axios from 'axios';
import BookingRoomCard from "./BookingRoomCard";
import "../styles/meetingroom-styles.css";

const API = process.env.REACT_APP_API_URL;

const GetBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/bookings`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
      <>
      {bookings.map((oneBooking) => (
        <BookingRoomCard key={oneBooking.id} oneBooking={oneBooking} />
        ))}
    </>
  );
};

export default GetBookings;