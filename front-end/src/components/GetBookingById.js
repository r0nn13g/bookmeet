import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/booking-card-styles.css";

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

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

const GetBookingById = () => {
  const [oneBooking, setOneBooking] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/api/bookings/${id}`)
      .then((res) => {
          setOneBooking(res.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, [id]);

  console.log(oneBooking)
            return(
              <>         
              {oneBooking.map((booking, id) => {
                 return(
                <div className="booking-rooms-wrapper">
                <div className="booking-meetingname-container">
                  <b id="booking-room-name">
                    {booking.meetingname}
                  </b>
                </div>
                
                
                <div className="booking-startdate-container">
                  <b id="booking-room-startdate">
                    Start Time: {formatDate(booking.startdatetime)}
                  </b>
                </div>

                <div className="booking-enddate-container">
                  <b id="booking-room-enddate">
                  End Time: {formatDate(booking.enddatetime)}
                  </b>
                </div>


                </div>
                    )
                  })}
                  </>
              )
};

export default GetBookingById;