import React, { Component } from 'react';

class MeetingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingname: 'Team Meeting',
      startdatetime: '2023-10-28T13:00:00.000Z',
      enddatetime: '2023-10-28T14:00:00.000Z',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <h1>Book Meeting Room</h1>
        <form>
          <div>
            <label>Meeting Name:</label>
            <input
              type="text"
              name="meetingname"
              value={this.state.meetingname}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Start:</label>
            <input
              type="datetime-local"
              name="startdatetime"
              value={this.state.startdatetime}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>End:</label>
            <input
              type="datetime-local"
              name="enddatetime"
              value={this.state.enddatetime}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Create Meeting</button>
        </form>
      </div>
    );
  }
}

export default MeetingForm;
