const db = require("../models/dbConfig.js");

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
const getMeetingRoomById = async (roomId) => {
  try {
    const roomBookings = await db.any('SELECT * FROM Booking WHERE RoomId = $1', roomId);
    return roomBookings;
  } catch (error) {
    return error;
  }
};

// Function for fetching all bookings from the database
const getAllBookingsFromDatabase = async () => {
  try {
    // retrieve all bookings from Booking table
    const allBookings = await db.any('SELECT * FROM Booking');
    return allBookings;
  } catch (error) {
    return error;
  }
};

// Function to get future bookings for a specific meeting room
const getFutureBookingsForRoom = async (roomId, currentDate) => {
  try {
    const allBookings = await getAllBookingsFromDatabase();
    // Filter the bookings to get future bookings for the specified meeting room
    const futureBookings = allBookings.filter((booking) => {
      return booking.RoomId === roomId && new Date(booking.StartDateTime) >= currentDate;
    });
    return futureBookings;
  } catch (error) {
    throw error; 
  }
};

module.exports = {
  getAllMeetingRooms,
  createMeetingRoom,
  getMeetingRoomById,
  getFutureBookingsForRoom
};