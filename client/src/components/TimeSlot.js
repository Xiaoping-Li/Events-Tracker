import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';

class TimeSlot extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      start: 0,
      stop: 0,
      eventID: this.props.event_ID,
    }; 
  }

  handleTimerClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddTimeSlot = (e) => {
    e.preventDefault();

    const newTimeSlot = {
      start: this.state.start,
      stop: this.state.stop,
      eventID: this.props.event_ID
    };

    axios.post(ROOT_URL + '/api/timeSlots/', newTimeSlot)
      .then(result => {
        this.props.updateList();
        console.log('Add newTimeSlot to DB');
      })
      .catch(error => {
        console.log({ error, message: 'failed to add newTimeSlot' });
      });
  }

  render() {
    return (
      <div>
        <button name="start" value={new Date()} onClick={this.handleTimerClick}>Start</button>
        <button name="stop" value={new Date()} onClick={this.handleTimerClick}>Stop</button>
        <button onClick={this.handleAddTimeSlot}>Add</button>
        {/* {this.state.start} /
        {this.state.stop}
        <div>
          Diff: {diff}
        </div> */}
      </div>
    );
  }
}

export default TimeSlot;