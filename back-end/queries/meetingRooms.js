const db = require("../db/dbConfig.js");

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
const createMeetingRoom = async (name, capacity, floor) => {
  try {
    const newRoom = await db.one('INSERT INTO MeetingRoom (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
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
// Function to get future bookings for a specific meeting room
const getFutureBookingsForRoom = async (roomId, currentDate) => {
  try {
    // Define the SQL query to join MeetingRoom and Booking tables
    const query = `
      SELECT
        MeetingRoom.id AS room_id,
        MeetingRoom.name AS room_name,
        MeetingRoom.capacity AS room_capacity,
        MeetingRoom.floor AS room_floor,
        Booking.bookingId AS booking_id,
        Booking.meetingName AS booking_name,
        Booking.startDateTime AS booking_start_time,
        Booking.endDateTime AS booking_end_time
      FROM
        MeetingRoom
      JOIN
        Booking
      ON
        MeetingRoom.id = Booking.meetingRoomId
      WHERE
        MeetingRoom.id = $1
        AND Booking.startDateTime >= $2;
    `;

    // Execute the query and pass the parameters
    const futureBookings = await db.any(query, [roomId, currentDate]);

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