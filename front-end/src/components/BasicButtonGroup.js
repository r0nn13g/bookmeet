import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function BasicButtonGroup() {
  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        {/* Use Link component to navigate to specific routes */}
        <Link to="/meeting-rooms">
          <Button>Meetings</Button>
        </Link>
        <Link to="/bookings">
          <Button>Bookings</Button>
        </Link>
        <Link to="/new-room">
          <Button>Create</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
