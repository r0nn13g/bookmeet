import React from "react";
// import axios from 'axios';
import "../styles/meetingroom-styles.css";

const MeetingRooms = () => {
  return (
    <div className="meeting-rooms-wrapper">
      <div className="meeting-rooms-desc-container">
        <b id="meeting-room-description">
          Meeting Room A
        </b>
      </div>
      <div className="meeting-rooms-capacity-container">
        Capacity:
      </div>
      <div className="meeting-rooms-floor-container">
        Floor:
      </div>
    </div>
  )
};

export default MeetingRooms;