import React from "react";
import "../styles/home-styles.css";
import GetMeetings from "../components/GetMeetings";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="meeting-room-container">
        Available Rooms
        <GetMeetings />
        <p style={{fontSize: '12px', margin:'10px'}}>Please select a room to book a new meeting for that room.</p>
      </div>
    </div>
  )
};

export default Home;