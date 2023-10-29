const express = require('express');
const rooms = express.Router();
const {getAllMeetingRooms, createMeetingRoom, getRoomBookings } = require("../queries/meetingRooms.js")

// List all meeting rooms
rooms.get('/api/meeting-rooms', async (req, res) => {
  try {
    const allMeetingRooms = await getAllMeetingRooms();
    res.status(200).json(allMeetingRooms);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a meeting room
rooms.post('/api/meeting-rooms', async (req, res) => {
  const { name, capacity, floor } = req.body;
  try {
    const newRoom = await createMeetingRoom(name, capacity, floor);
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Retrieve a meeting room by id
rooms.get('/api/meeting-rooms/:id', async (req, res) => {
  const roomId = req.params.id;
  try {
    const meetingRoom = await getMeetingRoomById(roomId);
    if (meetingRoom) {
      res.status(200).json(meetingRoom);
    } else {
      res.status(404).json({ error: 'Meeting room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// View room bookings
rooms.get('/api/bookings/:roomId', async (req, res) => {
  const roomId = req.params.roomId;
  try {
    const roomBookings = await getRoomBookings(roomId);
    res.status(200).json(roomBookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = rooms;