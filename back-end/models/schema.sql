DROP DATABASE IF EXISTS room_booking;
CREATE DATABASE room_booking;

\c room_booking;

-- DROP TABLE IF EXISTS MeetingRoom;
-- DROP TABLE IF EXISTS Booking;

-- Create the MeetingRoom table
CREATE TABLE MeetingRoom (
    id SERIAL PRIMARY KEY, -- Identity column for a unique ID
    name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);


-- Create the Booking table
CREATE TABLE Booking (
    bookingId SERIAL PRIMARY KEY, -- Identity column for booking ID
    meetingRoomId INT REFERENCES MeetingRoom(id),
    meetingName VARCHAR(255) NOT NULL,
    startDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    endDateTime TIMESTAMP WITH TIME ZONE NOT NULL
);
