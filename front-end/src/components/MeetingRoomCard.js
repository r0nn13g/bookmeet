import React from "react";
import { Link } from "react-router-dom";
import '../styles/meeting-room-styles.css'
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';


const MeetingRoomCard = ({ meeting, onDelete }) => {

  return (
    <Link className="meeting-room-link" to={`/meeting-rooms/${meeting.id}`}>
      <div className="meeting-rooms-wrapper">
        <div className="meeting-rooms-desc-container">
          <h4 id="meeting-room-desc">{meeting.name}</h4>
        </div>
        <div className="meeting-rooms-capacity-container">
          <PeopleIcon />
          <b id="meeting-room-capacity">Capacity: {meeting.capacity}</b>
        </div>
        <div className="meeting-rooms-floor-container">
          <CorporateFareIcon />
          <b id="meeting-room-floors">Floor: {meeting.floor}</b>
        </div>
        <div>
        </div>
      </div>
    </Link> 
  );
};

export default MeetingRoomCard;
