import React from "react";
import "../styles/home-styles.css";
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Buttons = () => {
  return (
      <div className="button-group-container">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Link to="/meeting-rooms">
            <Button>Meeting Rooms</Button>
          </Link>
          <Link to="/bookings">
            <Button>Bookings</Button>
          </Link>
          <Link to="/new-room">
            <Button>New Room</Button>
          </Link>
        </ButtonGroup>
      </div>
  )
};

export default Buttons;