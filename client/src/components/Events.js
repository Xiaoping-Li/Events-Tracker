import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      eventsList: [],
    };
  }

  render() {
    return (
      <div>
        <Link to="/eventForm"><button>+</button></Link>    
      </div>
    );
  }
}

export default Events;