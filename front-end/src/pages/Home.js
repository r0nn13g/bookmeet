import React from "react";
import "../styles/home-styles.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MeetingRooms from '../components/MeetingRooms.js';


const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="button-group-container">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Meeting Rooms</Button>
          <Button>Bookings</Button>
          <Button>New Room</Button>
        </ButtonGroup>

      </div>
      <div className="meeting-room-container">
        <MeetingRooms />
      </div>
    </div>
  )
};

export default Home;