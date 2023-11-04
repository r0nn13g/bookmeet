import axios from 'axios';
import "../styles/meetingroom-styles.css";
import MeetingRoomCard from "./MeetingRoomCard";
import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

const GetMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/meeting-rooms`)
      .then((res) => {
        setMeetings(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(meetings)

  return (
    <>
      {meetings.map((meeting) => (
        <MeetingRoomCard key={meeting.id} meeting={meeting} />
        ))}
    </>
  );
};

export default GetMeetings;
