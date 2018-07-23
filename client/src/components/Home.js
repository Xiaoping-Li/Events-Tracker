import React, { Component } from 'react';
import Auth from '../Auth/Auth.js';


class Home extends Component {
  

  render() {
    const auth = new Auth();
    auth.login();
    return (
      <div>
        Welcome to Events-Tracker Home Page
      </div>
    );
  }
}

export default Home;