import React, { Component } from 'react';


class TimeSlot extends Component {

  render() {
    const startTime = new Date(this.props.start);
    const stopTime = new Date(this.props.stop);
    const timeDiff = Math.round((stopTime - startTime) / 1000);
    const hours = Math.floor(timeDiff / 3600);
    const mins = Math.floor((timeDiff - (hours * 3600)) / 60);
    const secs = timeDiff - (hours * 3600) - (mins * 60);
    const timeFormat = ` ${hours}:${mins}:${secs}`;

    return (
      <div>
        {timeFormat}
      </div>
    );
  }
}

export default TimeSlot;