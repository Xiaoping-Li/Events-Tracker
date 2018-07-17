import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';

class TimeSlot extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      start: 0,
      stop: 0,
      eventID: 1, //dummy eventID 1
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
      eventID: 1,
    };

    axios.post(ROOT_URL + '/api/timeSlots/', newTimeSlot)
      .then(result => {
        console.log('Add newTimeSlot to DB');
      })
      .catch(error => {
        console.log({ error, message: 'failed to add newTimeSlot' });
      });

    this.setState({
      start: 0,
      stop: 0,
      eventID: 1,
    });
  }

  render() {
    return (
      <div>
        <button name="start" value={new Date().getTime()} onClick={this.handleTimerClick}>Start</button>
        <button name="stop" value={new Date().getTime()} onClick={this.handleTimerClick}>Stop</button>
        <button onClick={this.handleAddTimeSlot}>Add</button>
        {this.state.start} /
        {this.state.stop}
        <div>
          Diff: {this.state.stop - this.state.start}
        </div>
      </div>
    );
  }
}

export default TimeSlot;