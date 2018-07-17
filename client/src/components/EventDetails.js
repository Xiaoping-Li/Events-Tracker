import React, { Component } from 'react';
import TimeSlot from './TimeSlot';


class EventDetails extends Component {
  render() {
    return (
      <div className="App">
        Welcome to Events-Tracker EventDetails Page
        <TimeSlot />
      </div>
    );
  }
}

export default EventDetails;