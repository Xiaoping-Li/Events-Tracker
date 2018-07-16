import React, { Component } from 'react';

class TimeSlot extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      start: 0,
      stop: 0,
      eventID: null,
    }; 
  }

  handleButtonClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button name="start" value={new Date().getTime()} onClick={this.handleButtonClick}>Start</button>
        <button name="stop" value={new Date().getTime()} onClick={this.handleButtonClick}>Stop</button>
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