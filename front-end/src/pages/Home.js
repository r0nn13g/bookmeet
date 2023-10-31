import React from "react";
import "../styles/home-styles.css";
import ButtonsGrouped from "../components/ButtonsGrouped";
import MeetingRooms from "../components/MeetingRooms";

const Home = () => {
  return (
    <div className="home-wrapper">
      <ButtonsGrouped />
      <div className="meeting-rooms-search">
      Welcome to BookMeet
      </div>
      <div className="meeting-room-container">
        Available Rooms
        <MeetingRooms />
      </div>
    </div>
  )
};

export default Home;