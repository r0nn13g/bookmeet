import React from "react";
import { Link } from "react-router-dom";
import '../styles/booking-card-styles.css'

const BookingRoomCard = ({ oneBooking }) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    
    // Get the day, month, year, hours, and o
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  
    // Format the date and time
    const formattedDate = `${month}/${day}/${year}`;
    const formattedTime = `${hours}:${minutes} ${ampm}`;
  
    return `${formattedDate} ${formattedTime}`;
  }
  console.log(oneBooking)
  return (
    <Link className="booking-room-link" to={`/booking-rooms/${oneBooking.bookingid}`}>
      <div className="booking-rooms-wrapper">
        <div className="booking-meetingname-container">
          <b id="booking-room-desc">{oneBooking.meetingname}</b>
        </div>
        <div className="booking-startdate-container">
          {/* <PeopleIcon /> */}
          <b id="booking-room-startdate">Start:{formatDate(oneBooking.startdatetime)}</b>
        </div>
        <div className="booking-enddate-container">
          {/* <CorporateFareIcon /> */}
          <b id="booking-room-enddate">End: {formatDate(oneBooking.enddatetime)}</b>
        </div>
      </div>
    </Link>
  );
};

export default BookingRoomCard;
