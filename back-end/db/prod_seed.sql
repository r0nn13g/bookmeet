INSERT INTO MeetingRoom (name, capacity, floor) VALUES
('Meeting Room 1', 4, 10),
('Conference Room A', 10, 20),
('Meeting Room 3', 8, 30);

INSERT INTO Booking (meetingRoomId, meetingName, startDateTime, endDateTime) VALUES
(1, 'Team Meeting', '2023-10-24T14:00', '2023-10-24T15:00'),
(2, 'Cloud Security Meeting', '2023-10-25T13:00', '2023-10-25T14:00'), 
(3, 'Network Security Meeting', '2023-10-26T14:00', '2023-10-26T15:00'),
(3, 'Scrum Standup', '2023-10-27T12:00', '2023-10-27T13:00');