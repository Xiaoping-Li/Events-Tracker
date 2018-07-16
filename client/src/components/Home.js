import React, { Component } from 'react';
import Timer from './Timer';


class Home extends Component {
  render() {
    return (
      <div className="App">
        Welcome to Events-Tracker Home Page

        <Timer />
      </div>
    );
  }
}

export default Home;