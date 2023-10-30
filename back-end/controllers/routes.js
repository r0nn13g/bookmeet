const express = require('express');
const roomsRouter = express.Router();
const bookingsRouter = express.Router();
const db = require('../models/dbConfig.js');
const { getAllMeetingRooms,createMeetingRoom, getMeetingRoomById, getFutureBookingsForRoom } = require("../queries/meetingRooms.js");
const { getAllBookings, bookMeetingRoom, getBookingById, cancelBooking } = require("../queries/bookings.js");


// Common error handling middleware
function errorHandler(res, error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}

// Middleware to parse request body as JSON
roomsRouter.use(express.json());
bookingsRouter.use(express.json());

/*ROUTES*/ 

// List all meeting rooms 
roomsRouter.get('/', async (req, res) => {
  try {
    const allMeetingRooms = await getAllMeetingRooms();
    res.status(200).json(allMeetingRooms);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Create a meeting room
roomsRouter.post('/', async (req, res) => {
  const { name, capacity, floor } = req.body;
  try {
    const newRoom = await createMeetingRoom(name, capacity, floor);
    res.status(201).json(newRoom);
  } catch (error) {
    errorHandler(res, error);
  }
});

//Retrieve a meeting room by id
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

//Retrieve all future bookings of a meeting room
roomsRouter.get('/:id/bookings', async (req, res) => {
  const roomId = req.params.id;
  try {
    // First, get the meeting room details
    const meetingRoom = await getMeetingRoomById(roomId);

    if (meetingRoom) {
      // Now, retrieve future bookings for the meeting room
      const currentDate = new Date();
      const futureBookings = await getFutureBookingsForRoom(roomId, currentDate);
      console.log(futureBookings);
      res.status(200).json(futureBookings);
    } else {
      res.status(404).json({ error: 'Meeting room not found' });
    }
  } catch (error) {
    errorHandler(res, error);
  }
});

//code here


/*BOOKING ROUTES */

//List all future bookings
bookingsRouter.get('/', async (req, res) => {
  try {
    const allBookings = await getAllBookings();
    res.status(200).json(allBookings);
  } catch (error) {
    errorHandler(res, error);
  }
});

//Retreive a booking by id
bookingsRouter.get('/:id', async (req, res) => {
  const bookingId = req.params.id;
  try {
  const booking = await getBookingById(bookingId)
  if (booking) {
    res.status(200).json(booking);
  } else {
    res.status(404).json({error: 'Meeting room not found'});
  }
} catch (error) {
  errorHandler(res, error)
}
});

// Create a booking for a meeting room
bookingsRouter.post('/', async (req, res) => {
  const { RoomId, MeetingName, StartDateTime, EndDateTime, Attendees } = req.body;
  try {
    const newBooking = await bookMeetingRoom(RoomId, MeetingName, StartDateTime, EndDateTime, Attendees)
    res.status(201).json(newBooking);
  } catch (error) {
    errorHandler(res, error);
  }
});

//Cancel a booking by id
bookingsRouter.delete('/:id', async (req, res) => {
  const bookingId = req.params.id;
  try {
    const canceled = await cancelBooking(bookingId);

    if (canceled) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    errorHandler(res, error);
  }
});

module.exports = {
  rooms: roomsRouter,
  bookings: bookingsRouter,
};
