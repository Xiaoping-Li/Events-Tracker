import React, { Component } from 'react';
import Auth from './Auth/Auth.js';


class Home extends Component {
  

  render() {
    const auth = new Auth();
    return (
      <div>
        {auth.login()}
        Welcome to Events-Tracker Home Page
      </div>
    );
  }
}

export default Home;