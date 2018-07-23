import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';


class TimeSlot extends Component {
  handleDeleteTimeSlot = () => {
    axios.delete(config.ROOT_URL + `/api/timeSlots/${this.props.slot.timeSlot_id}`)
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
    const timeFormat = ` ${hours}:${mins}:${secs}`;

    const year = startTime.getFullYear();
    const month = startTime.getMonth() + 1; // getMonth (0 - 11)
    const day = startTime.getDate(); // getDate (1 - 31)
    const dateFormat = `${year}-${month}-${day} `;

    return (
      <div>
        {dateFormat}
        {timeFormat}
        <button onClick={this.handleDeleteTimeSlot}>X</button>
      </div>
    );
  }
}

export default TimeSlot;