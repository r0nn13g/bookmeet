// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Blackstone booking app");
});

// Use the router objects
const { rooms, bookings } = require("./controllers/routes.js");

app.use('/api/meeting-rooms', rooms);
app.use('/api/bookings', bookings);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;