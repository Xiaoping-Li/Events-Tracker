import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';
import TimeSlot from './TimeSlot';

class Timer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      start: '',
      stop: '',
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

    axios.post(config.ROOT_URL + '/api/timeSlots/', newTimeSlot)
      .then(result => {
        this.props.updateList();
        console.log('Add newTimeSlot to DB');
      })
      .catch(error => {
        console.log({ error, message: 'failed to add newTimeSlot' });
      });

    this.setState({
      start: '',
      stop: '',
      eventID: this.props.event_ID,
    });
  }

  render() {
    return (
      <div>
        <button name="start" value={new Date()} onClick={this.handleTimerClick}>Start</button>
        <button name="stop" value={new Date()} onClick={this.handleTimerClick}>Stop</button>
        <button onClick={this.handleAddTimeSlot}>Add</button>
        <div>{this.state.count}</div>
        <TimeSlot start={this.state.start} stop={this.state.stop} />
      </div>
    );
  }
}

export default Timer;