import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/meetingroom-styles.css";
// import MeetingRooms from "../components/MeetingRooms";

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

const ShowOneRoom = () => {
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
                <div className="booked-room-wrapper">
                <div className="booked-rooms-desc-container">
                  <b id="booked-room-name">
                    {booking.meetingname}
                  </b>
                </div>
                <div className="booked-room-time-container">
                  <b id="booked-start-time">
                    Start Time: {booking.startdatetime}
                  </b>
                  &nbsp;
                  <b id="booked-end-time">
                  End Time: {booking.enddatetime}
                  </b>
                </div>
                <div className="booked-attendees-container">
                {booking.attendees}
                </div>
                </div>
                    )
                  })}
                  </>
              )
};

export default ShowOneRoom;