import React from "react";
// import axios from 'axios';
import "../styles/meetingroom-styles.css";
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const MeetingRooms = () => {
  return (
    <div className="meeting-rooms-wrapper">
      <div className="meeting-rooms-desc-container">
        <b id="meeting-room-desc">
          Meeting Room A
        </b>
      </div>
      <div className="meeting-rooms-capacity-container">
        <PeopleIcon/>
        <b id="meeting-room-capacity">
          Capacity:
        </b>
      </div>
      <div className="meeting-rooms-floor-container">
       <CorporateFareIcon/> 
       <b id="meeting-room-floors">
        Floor:
       </b>
      </div>
    </div>
  )
};

export default MeetingRooms;