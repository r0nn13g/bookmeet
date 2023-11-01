import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/booking-forms-styles.css';


function formatDate(inputDate) {
  const date = new Date(inputDate);
  
  // Get the day, month, year, hours, and minutes
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  // Format the date and time
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return `${formattedDate} ${formattedTime}`;
}

const BookingForm = () => {
  // const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  let { meetingRoomId } = useParams();
  console.log(meetingRoomId);
  const [booking, setBooking] =  useState({
    meetingroomid: meetingRoomId,
    meetingname: "",
    startdatetime: "",
    enddatetime: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [bookings, setBookings] = useState([]);


  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const addBooking = async (booking) => {
    console.log(booking);
    try {
      await axios.post(`${API}/api/bookings`, { ...booking, booking });
      setSuccessMessage("Booking created successfully!");
      console.log("success");
      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${API}/api/bookings`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking(booking);
    fetchBookings(); // Fetch bookings after adding a new one
  };

  useEffect(() => {
    fetchBookings(); // Fetch bookings when the component mounts
    // eslint-disable-next-line
  }, []); 
  console.log(booking)
  
  const lastTwoBookings = bookings.slice(-2).reverse();

  return (
    <div className="meeting-forms-wrapper">
      <h1>Book Meeting Room</h1>
      <form onSubmit={handleSubmit}>
        <div className="meeting-name-forms">
          <label>Meeting Name:</label>
          <input
            type="text"
            name="meetingname"
            value={booking.meetingname}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-start-time-forms">
          <label>Start:</label>
          <input
            type="datetime-local"
            name="startdatetime"
            value={booking.startdatetime}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-end-time-forms">
          <label>End:</label>
          <input
            type="datetime-local"
            name="enddatetime"
            value={booking.enddatetime}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Create Meeting</button>
      </form>
      {successMessage && (
        <div className="success-message">
          <p style={{color: "green"}}>{successMessage}</p>
        </div>
      )}
        <div>
        <h2>Bookings</h2>
        
          {lastTwoBookings.map((item) => (
            <div className="last-two-bookings-container"key={item.bookingid}>
              <div className='last-two-meeting-names'>
                <h4>{item.meetingname}</h4>
              </div>
              <div className='last-two-start-dates'>
              <b>Start:</b> {formatDate(item.startdatetime)}
            </div>
            <div className='last-two-end-dates'>
              <b>End:</b> {formatDate(item.enddatetime)}
            </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookingForm;
