import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/meeting-forms-styles.css';

const MeetingForm = () => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [booking, setBooking] =  useState({
    meetingname: "",
    startdatetime: "",
    enddatetime: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const addBooking = (newBooking) => {
    // Format the date and time fields before sending them to the API
    const formattedBooking = {
      ...newBooking,
      startdatetime: formatDateTime(newBooking.startdatetime),
      enddatetime: formatDateTime(newBooking.enddatetime),
    };

    axios.post(`${API}/bookings`, formattedBooking)
      .then(() => navigate("/bookings"));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking(booking);
    console.log(booking.meetingname)
  };

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
    </div>
  );
}

export default MeetingForm;
