import axios from "axios";
import React from 'react';
import '../styles/booking-forms-styles.css';
import '../styles/booking-card-styles.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  
  // Get the day, month, year, hours, and o
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  // Format the date and time
  const formattedDate = `${month}/${day}/${year}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return `${formattedDate} ${formattedTime}`;
}

const BookingForm = () => {
  const API = process.env.REACT_APP_API_URL;
  let { meetingRoomId } = useParams();
  console.log("meeting room id: ", meetingRoomId);
  const [booking, setBooking] =  useState({
    meetingroomid: meetingRoomId,
    meetingname: "",
    startdatetime: "",
    enddatetime: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const addBooking = async (booking) => {
    console.log(booking);
    const roomExists = bookings.some((item) => item.meetingname === booking.meetingname);
    
    if (roomExists) {
      setErrorMessage("Room name already exists");
      return;
    }

    if (!booking.meetingname || !booking.startdatetime || !booking.enddatetime) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    try {
      await axios.post(`${API}/api/bookings`, { ...booking, booking });
      setSuccessMessage("Booked successfully!");
      setErrorMessage("");
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
  
  const handleDelete = async (bookingid) => {
    try {
      await axios.delete(`${API}/api/bookings/${bookingid}`);
      console.log("success")
      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Booking", booking)
  
  const lastTwoBookings = bookings.slice(-3).reverse();


  return (
    <div className="meeting-forms-wrapper">
      <h2 style={{color:'gray'}}>Book a meeting.</h2>
      <form onSubmit={handleSubmit}>
        <div className="meeting-name-forms">
          <label>Meeting name: </label>
          <input
            type="text"
            name="meetingname"
            value={booking.meetingname}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-start-time-forms">
          <label>Start: </label>
          <input
            type="datetime-local"
            name="startdatetime"
            value={booking.startdatetime}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-end-time-forms">
          <label>End: </label>
          <input
            type="datetime-local"
            name="enddatetime"
            value={booking.enddatetime}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Book</button>
      </form>
   
      {errorMessage && ( 
        <div className="error-message">
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}

      {successMessage && (
        <div className="success-message">
          <p style={{ color: "green" }}>{successMessage}</p>
        </div>
      )}

        <div className='bookings' style={{marginTop: "50px"}}>
          {lastTwoBookings.map((item) => (
            
            <div className="booking-rooms-wrapper"key={item.bookingid}>
              {console.log("booking id:", item.bookingid)}
              <div className='booking-meetingname-container'>
                <b id="booking-room-desc">{item.meetingname}</b>
              </div>
              <div className='booking-startdate-container'>
                {/* <AccessTimeIcon/>  */}
                <h4 id="booking-room-startdate">{formatDate(item.startdatetime)}</h4>
            </div>
            <div className='booking-enddate-container'>
              {/* <AccessTimeIcon/>
         */}
              <h4 id="booking-room-enddate">{formatDate(item.enddatetime)}</h4>
            </div>
            <div className="delete-btn">
            <button onClick={() => handleDelete(item.bookingid)}
             style={{ borderRadius:"10px"}}>cancel</button>
             </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookingForm;