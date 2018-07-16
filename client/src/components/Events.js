import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EventForm from './EventForm';

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
        <EventForm />    
      </div>
    );
  }
}

export default Events;