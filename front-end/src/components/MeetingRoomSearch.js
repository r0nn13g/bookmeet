import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingRoomSearch = () => {
  const [capacity, setCapacity] = useState(0);
  const [floor, setFloor] = useState(0);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [notification, setNotification] = useState('');

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch available meeting rooms from your API and update the meetingRooms state
    const fetchMeetingRooms = async () => {
      try {
        const response = await axios.get(`${API}/api/meeting-rooms`);
        setMeetingRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeetingRooms();
  }, [API]);

  useEffect(() => {
  
// Filter meeting rooms where both capacity and floor match
const matchingRooms = meetingRooms.filter((room) => room.capacity >= capacity && room.floor === floor);

// Check if input is within the valid range (0 to max integer)
const isWithinRange = capacity >= 0 && floor >= 0 && Number.isInteger(capacity) && Number.isInteger(floor);

// Set notification based on the conditions
if (matchingRooms.length > 0 && isWithinRange) {
  setNotification('Meeting room available');
} else {
  setNotification('A meeting room with these requirements is not available');
}
  }, [capacity, floor, meetingRooms]);
  

  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
    <h2>Meeting Room Search</h2>
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <label>Floor:</label>
      <input
        type="number"
        value={floor}
        onChange={(e) => setFloor(Number(e.target.value))}
        min="0"
        max={floor}
      />
    </div>
    <div>
      <label>Capacity:</label>
      <input
        type="number"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        min="0"
        max="20"
      />
    </div>
    <div>
     <h4>{notification}</h4>
    </div>
  </div>
  );
};

export default MeetingRoomSearch;
