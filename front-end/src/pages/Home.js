import React from "react";
import MeetingRooms from '../components/MeetingRooms.js';
// import "../styles/video-styles.css";

const Home = () => {
  return (
    <div className="home-wrapper">
        <b>
         Home
        </b>
      <div className="meeting-room-container">
        <MeetingRooms />
      </div>
    </div>
  )
};

export default Home;