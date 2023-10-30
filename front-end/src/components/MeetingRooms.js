import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "../styles/meetingroom-styles.css";
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

console.log(API);


const MeetingRooms = () => {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    axios.get(`${API}/api/meeting-rooms`)
      .then((res) => {
          setMeetings(res.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(meetings)

  return (
          <>         
          {meetings.map((meeting, id) => {
            console.log(meeting)
            console.log(meeting.roomid)
            return(
                <Link className="meeting-room-link" key={meeting.roomid} to={`/meeting-rooms/${meeting.roomid}`}>
              <div className="meeting-rooms-wrapper">
              <div className="meeting-rooms-desc-container">
                <b id="meeting-room-desc">
                  {meeting.name}
                </b>
              </div>
              <div className="meeting-rooms-capacity-container">
                <PeopleIcon/>
                <b id="meeting-room-capacity">
                  Capacity: {meeting.capacity}
                </b>
              </div>
              <div className="meeting-rooms-floor-container">
              <CorporateFareIcon/> 
              <b id="meeting-room-floors">
                Floor: {meeting.floor}
              </b>
              </div>
              </div>
                </Link>
            )
          })}
          </>
  )
};

export default MeetingRooms;