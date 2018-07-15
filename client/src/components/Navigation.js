import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link key={1} to=''>Home</Link>
        <Link key={2} to='/signup'>Sign Up</Link>
        <Link key={3} to='/signin'>Sign In</Link>
        <Link key={4} to='/signout'>Sign Out</Link>
      </div>
    );
  }
}

export default Navigation;