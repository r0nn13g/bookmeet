import React from "react";
import "../styles/home-styles.css";
import GetMeetings from "../components/GetMeetings";
import MeetingRoomSearch from "../components/MeetingRoomSearch";

const Home = () => {
  return (
    <div className="home-wrapper">
        <MeetingRoomSearch/>
      <div className="meeting-room-container">
        <h3>Available Meeting Rooms</h3>
        <GetMeetings />
        <b style={{fontSize: '12px', margin:'10px', color: "white", textAlign: "center"}}>Please select a room to book a new meeting for that room.</b>
      </div>
    </div>
  )
};

export default Home;