import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/meetingroom-styles.css';
import MeetingRoomCard from './MeetingRoomCard';


const MeetingRoomForm = () => {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [meeting, setMeeting] = useState({
    id: id,
    name: "",
    capacity: 0,
    floor: 0,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [newMeetings, setNewMeetings] = useState([]);

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.name]: e.target.value });
  };

  const addMeetingRoom = async () => {
    try {
      const response = await axios.post(`${API}/api/meeting-rooms`, meeting);
      const createdMeeting = response.data;
      setNewMeetings([...newMeetings, createdMeeting]);
      setSuccessMessage("Meeting room created successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeetingRoom();
  };

  useEffect(() => {
    const fetchNewMeetings = async () => {
      try {
        const response = await axios.get(`${API}/api/meeting-rooms`);
        setNewMeetings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewMeetings();
  }, [API]);

  const lastTwoMeetings = newMeetings.slice(-2).reverse();

  return (
    <>
    <div className="meeting-forms-wrapper">
      <h2>Create New Meeting Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="meeting-name-forms">
          <label>Meeting Name:</label>
          <input
            type="text"
            name="name"
            value={meeting.name}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-start-time-forms">
          <label>Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={meeting.capacity}
            onChange={handleChange}
          />
        </div>

        <div className="meeting-end-time-forms">
          <label>Floor</label>
          <input
            type="number"
            name="floor"
            value={meeting.floor}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Create</button>
      </form>
      {successMessage && (
        <div className="success-message">
          <p style={{color: "green"}}>{successMessage}</p>
        </div>
      )}
        <div>
        <h2>Meeting Rooms</h2>
          {lastTwoMeetings.map((meeting) => (
            <MeetingRoomCard key={meeting.id} meeting={meeting} />
          ))}
      </div>
    </div>
    </>
  );
}

export default MeetingRoomForm;
