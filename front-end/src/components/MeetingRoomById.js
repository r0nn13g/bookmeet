import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/meetingroom-styles.css";
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BookingForm from "./BookingForm";

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

const MeetingRoomById = () => {
  const [meeting, setMeeting] = useState([]);
  let { meetingRoomId } = useParams();

  useEffect(() => {
    axios.get(`${API}/api/meeting-rooms/${meetingRoomId}`)
      .then((res) => {
          setMeeting(res.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, [meetingRoomId]);

  console.log(meeting)
            return(
              <>
              {meeting.map((meeting, id) => {
                 return(
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
                    )
                  })}
                  <BookingForm/>     
                  </>
              )
};

export default MeetingRoomById;