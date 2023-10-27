const db = require("../db/dbConfig.js");

// Function to get all bookings
const getAllBookings = async () => {
  try {
    const allBookings = await db.any('SELECT * FROM Booking');
    return allBookings;
  } catch (error) {
    return error;
  }
};

// Function to book a meeting room
const bookMeetingRoom = async (RoomId, MeetingName, StartDateTime, EndDateTime, Attendees) => {
  try {
    const newBooking = await db.one('INSERT INTO Booking (RoomId, MeetingName, StartDateTime, EndDateTime, Attendees) VALUES ($1, $2, $3, $4, $5) RETURNING *', [RoomId, MeetingName, StartDateTime, EndDateTime, Attendees]);
    return newBooking;
  } catch (error) {
    return error;
  }
};

// Function to cancel a booking
const cancelBooking = async (bookingId) => {
  try {
    const deletedBooking = await db.result('DELETE FROM Booking WHERE BookingId = $1', bookingId);
    return deletedBooking.rowCount === 1;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBookings,
  bookMeetingRoom,
  cancelBooking,
};