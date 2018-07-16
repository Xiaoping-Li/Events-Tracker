import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      startTime: 0,
      stopTime: 0,
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
        <button name="startTime" value={new Date().getTime()} onClick={this.handleButtonClick}>Start</button>
        <button name="stopTime" value={new Date().getTime()} onClick={this.handleButtonClick}>Stop</button>
        {this.state.startTime} /
        {this.state.stopTime}
        <div>
          Diff: {this.state.stopTime - this.state.startTime}
        </div>
      </div>
    );
  }
}

export default Timer;