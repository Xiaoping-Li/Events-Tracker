import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  dynamicLinks() {
    if (this.props.auth.isAuthenticated) {
      return [
        <Link key={1} to='/home'>Home</Link>,
        <Link key={2} to='/events'>Events</Link>,
        <Link key={3} to='/home'>Log Out</Link>,
      ];
    } else {
      return [
        <Link key={1} to='/home'>Home</Link>,
        <Link key={2} to='/home'>Log In</Link>,
      ];
    }
  }

  render() {
    return (
      <div>
        {this.dynamicLinks()}
      </div>
    );
  }
}

export default Navigation;