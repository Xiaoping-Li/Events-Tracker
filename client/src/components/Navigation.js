import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link key={1} to=''>Home</Link>
        <Link key={2} to='/events'>Events</Link>
        <Link key={3} to='/dashboard'>Dash Board</Link>
      </div>
    );
  }
}

export default Navigation;