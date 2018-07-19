import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';


class TimeSlot extends Component {
  handleDeleteTimeSlot = () => {
    axios.delete(ROOT_URL + `/api/timeSlots/${this.props.slot.timeSlot_id}`)
      .then(result => {
          this.props.updateList();
          console.log('Delete TimeSlot success');   
      })
      .catch(error => {
          console.log({ error, message: 'failed to delete TimeSlot' });
      })
  }

  render() {
    const startTime = new Date(this.props.slot.timeSlot_start);
    const stopTime = new Date(this.props.slot.timeSlot_stop);
    const timeDiff = (stopTime - startTime) / 1000;
    const hours = Math.floor(timeDiff / 3600);
    const mins = Math.floor((timeDiff - (hours * 3600)) / 60);
    const secs = timeDiff - (hours * 3600) - (mins * 60);
    const timeFormat = `${hours}:${mins}:${secs}`;

    return (
      <div>
      {timeFormat}
      <button onClick={this.handleDeleteTimeSlot}>X</button>
      </div>
    );
  }
}

export default TimeSlot;