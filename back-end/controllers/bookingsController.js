const express = require('express');
const bookings = express.Router();
const db = require('../db/dbConfig.js');

// List all bookings
bookings.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Booking');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Book a meeting room
bookings.post('/', async (req, res) => {
  const { RoomId, MeetingName, StartDateTime, EndDateTime, Attendees } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO Booking (RoomId, MeetingName, StartDateTime, EndDateTime, Attendees) VALUES ($1, $2, $3, $4, $5) RETURNING *', [RoomId, MeetingName, StartDateTime, EndDateTime, Attendees]);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Cancel booking
bookings.delete('/:bookingId', async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const { rowCount } = await db.query('DELETE FROM Booking WHERE BookingId = $1', [bookingId]);
    if (rowCount === 0) {
      res.status(404).json({ message: 'Booking not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = bookings;
