// DEPENDENCIES
const cors = require("cors");
const express = require("express");

//Controllers go here -->
const bookingsController = require("./controllers/bookingsController.js");
const meetingRoomsController = require("./controllers/meetingRoomsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());

// Parse incoming JSON
app.use(express.json()); 

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use('/api/meeting-rooms', meetingRoomsController);
app.use('/api/bookings', bookingsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found")
});

// EXPORT
module.exports = app;
