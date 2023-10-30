import React from "react";
import "../styles/home-styles.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Buttons = () => {
  return (
      <div className="button-group-container">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Meeting Rooms</Button>
          <Button>Bookings</Button>
          <Button>New Room</Button>
        </ButtonGroup>
      </div>
  )
};

export default Buttons;