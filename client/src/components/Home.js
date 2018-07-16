import React, { Component } from 'react';
import TimeSlot from './TimeSlot';


class Home extends Component {
  render() {
    return (
      <div className="App">
        Welcome to Events-Tracker Home Page

        <TimeSlot />
      </div>
    );
  }
}

export default Home;