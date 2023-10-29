const express = require('express');
const roomsRouter = express.Router();
const bookingsRouter = express.Router();
const db = require('../db/dbConfig.js');
const {
  getAllMeetingRooms,
  createMeetingRoom,
  getMeetingRoomById,
} = require("../queries/meetingRooms.js");

// Common error handling middleware
function errorHandler(res, error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}

// Middleware to parse request body as JSON
roomsRouter.use(express.json());
bookingsRouter.use(express.json());

// Rooms routes
roomsRouter.get('/', async (req, res) => {
  try {
    const allMeetingRooms = await getAllMeetingRooms();
    res.status(200).json(allMeetingRooms);
  } catch (error) {
    errorHandler(res, error);
  }
});

roomsRouter.post('/', async (req, res) => {
  const { name, capacity, floor } = req.body;
  try {
    const newRoom = await createMeetingRoom(name, capacity, floor);
    res.status(201).json(newRoom);
  } catch (error) {
    errorHandler(res, error);
  }
});

roomsRouter.get('/:id', async (req, res) => {
  const roomId = req.params.id;
  try {
    const meetingRoom = await getMeetingRoomById(roomId);
    if (meetingRoom) {
      res.status(200).json(meetingRoom);
    } else {
      res.status(404).json({ error: 'Meeting room not found' });
    }
  } catch (error) {
    errorHandler(res, error);
  }
});

// Bookings routes
bookingsRouter.get('/bookings', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Booking');
    res.status(200).json(rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

bookingsRouter.post('/bookings', async (req, res) => {
  const { RoomId, MeetingName, StartDateTime, EndDateTime, Attendees } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO Booking (RoomId, MeetingName, StartDateTime, EndDateTime, Attendees) VALUES ($1, $2, $3, $4, $5) RETURNING *', [RoomId, MeetingName, StartDateTime, EndDateTime, Attendees]);
    res.status(201).json(rows[0]);
  } catch (error) {
    errorHandler(res, error);
  }
});

bookingsRouter.delete('/bookings/:id', async (req, res) => {
  const bookingId = req.params.id;
  try {
    const { rowCount } = await db.query('DELETE FROM Booking WHERE BookingId = $1', [bookingId]);
    if (rowCount === 0) {
      res.status(404).json({ message: 'Booking not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    errorHandler(res, error);
  }
});

module.exports = {
  rooms: roomsRouter,
  bookings: bookingsRouter,
};
