const express = require('express');
const rooms = express.Router();
const pool = require('../db/dbConfig.js');

// List all meeting rooms
rooms.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM MeetingRoom');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a meeting room
rooms.post('/', async (req, res) => {
  const { name, capacity, floor } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO MeetingRoom (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// View room bookings
rooms.get('/:roomId/bookings', async (req, res) => {
  const roomId = req.params.roomId;
  try {
    const { rows } = await pool.query('SELECT * FROM Booking WHERE RoomId = $1', [roomId]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = rooms;
