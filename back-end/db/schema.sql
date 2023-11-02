DROP DATABASE IF EXISTS room_booking;
CREATE DATABASE room_booking;

\c room_booking;

CREATE TABLE MeetingRoom (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);

CREATE TABLE Booking (
    bookingId SERIAL PRIMARY KEY, 
    meetingRoomId INT REFERENCES MeetingRoom(id) NOT NULL,
    meetingName VARCHAR(255) NOT NULL,
    startDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    endDateTime TIMESTAMP WITH TIME ZONE NOT NULL
);
