import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../styles/meeting-forms-styles.css';

const MeetingForm = () => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  let { meetingRoomId } = useParams();
  console.log(meetingRoomId);
  const [booking, setBooking] =  useState({
    meetingname: "",
    startdatetime: "",
    enddatetime: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

    const addBooking = (booking) =>{
      console.log(booking);
    axios.post(`${API}/bookings`,  {...booking, meetingRoomId} )
      .then(() =>  console.log("success"))
      .catch((error) => console.log(error))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking(booking);
    console.log(booking.startdatetime)
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
