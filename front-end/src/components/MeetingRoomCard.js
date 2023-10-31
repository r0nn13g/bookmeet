import React from "react";
import { Link } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const MeetingRoomCard = ({ meeting }) => {
  return (
    <Link className="meeting-room-link" to={`/meeting-rooms/${meeting.id}`}>
      <div className="meeting-rooms-wrapper">
        <div className="meeting-rooms-desc-container">
          <b id="meeting-room-desc">{meeting.name}</b>
        </div>
        <div className="meeting-rooms-capacity-container">
          <PeopleIcon />
          <b id="meeting-room-capacity">Capacity: {meeting.capacity}</b>
        </div>
        <div className="meeting-rooms-floor-container">
          <CorporateFareIcon />
          <b id="meeting-room-floors">Floor: {meeting.floor}</b>
        </div>
      </div>
    </Link>
  );
};

export default MeetingRoomCard;
