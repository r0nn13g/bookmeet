const db = require("../db/dbConfig.js");

// Function to get all meeting rooms
const getAllMeetingRooms = async () => {
  try {
    const allMeetingRooms = await db.any('SELECT * FROM MeetingRoom');
    return allMeetingRooms;
  } catch (error) {
    return error;
  }
};

// Function to create a meeting room
const createMeetingRoom = async (name, capacity, floor) => {
  try {
    const newRoom = await db.one('INSERT INTO MeetingRoom (Name, Capacity, Floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
    return newRoom;
  } catch (error) {
    return error;
  }
};

// Function to get room bookings
const getRoomBookings = async (roomId) => {
  try {
    const roomBookings = await db.any('SELECT * FROM Booking WHERE RoomId = $1', roomId);
    return roomBookings;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMeetingRooms,
  createMeetingRoom,
  getRoomBookings,
};