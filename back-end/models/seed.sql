\c room_booking;

INSERT INTO MeetingRoom (roomId, Name, Capacity, Floor) VALUES
(1, 'Meeting Room 1', 4, 10),
(2, 'Conference Room A', 10, 20),
(3, 'Meeting Room 3', 8, 30);

INSERT INTO Booking (RoomId, MeetingName, StartDateTime, EndDateTime, Attendees) VALUES
(1, 'Team Meeting', '2023-10-28 09:00:00', '2023-10-28 10:00:00', ARRAY['l33th4xor@email.com', 'sade@email.com']),
(2, 'Cloud Security Meeting', '2023-10-28 14:00:00', '2023-10-28 16:00:00', ARRAY['bobross@email.com', 'pablopicasso@email.com']),
(3, 'Network Security Meeting', '2023-10-29 11:30:00', '2023-10-28 1:00:00', ARRAY['paulrodriguez@email.com', 'erickoston@email.com']);
