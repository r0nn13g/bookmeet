DROP DATABASE IF EXISTS room_booking;
CREATE DATABASE room_booking;

\c room_booking;

DROP TABLE IF EXISTS MeetingRoom;

-- Create the MeetingRoom table
CREATE TABLE MeetingRoom (
    RoomId serial PRIMARY KEY, -- Identity column for room ID
    Name VARCHAR(255) NOT NULL,
    Capacity INT NOT NULL,
    Floor INT NOT NULL
);

DROP TABLE IF EXISTS Booking;

-- Create the Booking table
CREATE TABLE Booking (
    BookingId serial PRIMARY KEY, -- Identity column for booking ID
    RoomId INT NOT NULL, -- Foreign key to MeetingRoom table
    MeetingName VARCHAR(255) NOT NULL,
    StartDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    EndDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    Attendees TEXT[] NOT NULL
);
