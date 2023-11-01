import React from "react";
import "../styles/home-styles.css";
import GetMeetings from "../components/GetMeetings";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="meeting-rooms-search">
      Welcome to BookMeet
      </div>
      <div className="meeting-room-container">
        Available Rooms
        <GetMeetings />
      </div>
    </div>
  )
};

export default Home;