const db = require("../dbConfig.js");

// Function to get all bookings
const getAllBookings = async () => {
  try {
    const allBookings = await db.any('SELECT * FROM Booking');
    return allBookings;
  } catch (error) {
    return error;
  }
};

// Function to create booking
const bookMeetingRoom = async ( meetingRoomId, meetingName, startDateTime, endDateTime) => {
  try {
    const newBooking = await db.one('INSERT INTO Booking (meetingroomid, meetingname, startdatetime, enddatetime) VALUES ($1, $2, $3, $4) RETURNING *', [meetingRoomId, meetingName,startDateTime, endDateTime]);
    return newBooking;
  } catch (error) {
    return error;
  }
};

//Function to get booking by id
const getBookingById = async (BookingId) =>{
  try {
    const bookingById = await db.any('SELECT * FROM Booking WHERE BookingId = $1', BookingId);
    return bookingById;
  } catch (error) {
    return error;
  }
}

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
  getBookingById,
  cancelBooking,
};