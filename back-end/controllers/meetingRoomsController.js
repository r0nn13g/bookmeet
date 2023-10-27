const express = require('express');
const rooms = express.Router();
// const pool = require('../db/dbConfig.js');
const {getAllMeetingRooms, createMeetingRoom, getRoomBookings } = require("../queries/meetingRooms.js")

// List all meeting rooms
rooms.get('/', async (req, res) => {
  try {
    const allMeetingRooms = await getAllMeetingRooms();
    res.status(200).json(allMeetingRooms);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = rooms;
