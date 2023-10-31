const db = require("../dbConfig.js");

// Function to get all meeting rooms
const getAllMeetingRooms = async () => {
  try {
    const allMeetingRooms = await db.any('SELECT * FROM MeetingRoom;');
    return allMeetingRooms;
  } catch (error) {
    return error;
  }
};

// Function to create a meeting room
const createMeetingRoom = async (room) => {
  try {
    const newRoom = await db.one('INSERT INTO MeetingRoom (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [room.name, room.capacity, room.floor]);
    return newRoom;
  } catch (error) {
    return error;
  }
};

// Function to get room byId
const getOneMeeting = async (id) => {
  try {
    const roomBookings = await db.any('SELECT * FROM MeetingRoom WHERE id = $1', id);
    return roomBookings;
  } catch (error) {
    return error;
  }
};

// Function for fetching all bookings from the database
const getAllBookingsForARoom = async (RoomId) => {
  try {
    // retrieve all bookings from Booking table
    const allBookings = await db.any('SELECT * FROM Booking WHERE meetingRoomId = $1', RoomId);
    return allBookings;
  } catch (error) {
    return error;
  }
};

// Function to get future bookings for a specific meeting room
const getFutureBookingsForRoom = async (roomId, currentDate) => {
  try {
    const allBookings = await getAllBookingsForARoom(roomId);
    // Filter the bookings to get future bookings for the specified meeting room
    const futureBookings = allBookings.filter((booking) => {
      return booking.meetingRoomId === roomId && new Date(booking.StartDateTime) >= currentDate;
    });
    return futureBookings;
  } catch (error) {
    throw error; 
  }
};

module.exports = {
  getAllMeetingRooms,
  createMeetingRoom,
  getOneMeeting,
  getFutureBookingsForRoom
};