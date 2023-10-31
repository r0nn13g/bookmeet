import React, { useState, useEffect } from "react";
import axios from 'axios';
import MeetingRoomCard from "./MeetingRoomCard";
import "../styles/meetingroom-styles.css";

// Importing environmental variable
const API = process.env.REACT_APP_API_URL;

const MeetingRooms = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/meeting-rooms`)
      .then((res) => {
        setMeetings(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      {meetings.map((meeting) => (
        <MeetingRoomCard key={meeting.id} meeting={meeting} />
        ))}
    </>
  );
};

export default MeetingRooms;
