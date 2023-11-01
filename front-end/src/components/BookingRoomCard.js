import React from "react";
import { Link } from "react-router-dom";

const BookingRoomCard = ({ oneBooking }) => {
  console.log(oneBooking)
  return (
    <Link className="meeting-room-link" to={`/meeting-rooms/${oneBooking.bookingid}`}>
      <div className="meeting-rooms-wrapper">
        <div className="meeting-rooms-desc-container">
          <b id="meeting-room-desc">{oneBooking.meetingname}</b>
        </div>
        <div className="meeting-rooms-capacity-container">
          {/* <PeopleIcon /> */}
          <b id="meeting-room-capacity">Start: {oneBooking.startdatetime}</b>
        </div>
        <div className="meeting-rooms-floor-container">
          {/* <CorporateFareIcon /> */}
          <b id="meeting-room-floors">End: {oneBooking.enddatetime}</b>
        </div>
      </div>
    </Link>
  );
};

export default BookingRoomCard;
