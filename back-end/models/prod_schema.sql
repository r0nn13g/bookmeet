DROP TABLE IF EXISTS MeetingRoom;
DROP TABLE IF EXISTS Booking;

-- Create the MeetingRoom table
CREATE TABLE MeetingRoom (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);


-- Create the Booking table
CREATE TABLE Booking (
    bookingId SERIAL PRIMARY KEY,
    meetingRoomId INT REFERENCES MeetingRoom(id),
    meetingName VARCHAR(255) NOT NULL,
    startDateTime TIMESTAMP WITH TIME ZONE NOT NULL,
    endDateTime TIMESTAMP WITH TIME ZONE NOT NULL
);
