import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';

import EventForm from './EventForm';
import Event from './Event';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      eventsList: [],
    };
  }

  componentDidMount() {
    axios.get(ROOT_URL + '/api/events/')
      .then(result => {
        const detail = result.data;
        this.setState({ eventsList: detail });
        console.log(result);
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  render() {
    const events = this.state.eventsList.map((event, i) => <li>{<Event key={i} event={event} />}</li>);
    return (
      <div>
        <EventForm />
        <div className="events__List">
          <ul>
            {events}
          </ul>  
        </div>    
      </div>
    );
  }
}

export default Events;