DROP DATABASE IF EXISTS room_booking;
CREATE DATABASE room_booking;

\c room_booking;

DROP TABLE IF EXISTS MeetingRoom;

-- Create the MeetingRoom table
CREATE TABLE MeetingRoom (
    id SERIAL PRIMARY KEY, -- Identity column for a unique ID
    roomId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);

DROP TABLE IF EXISTS Booking;

-- Create the Booking table
CREATE TABLE Booking (
    bookingId SERIAL PRIMARY KEY, -- Identity column for booking ID
    roomId INT NOT NULL, -- Foreign key to MeetingRoom table
    meetingName VARCHAR(255) NOT NULL,
    startDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    endDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    attendees TEXT[] NOT NULL
);
