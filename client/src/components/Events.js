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
    return (
      <div>
        <EventForm />
        <div className="events__List">
          <ul>
            {this.state.eventsList.map((event, index) => {
              return (
                <li key={index}><Event event={event} /></li>
              );  
            })}
          </ul>  
        </div>    
      </div>
    );
  }
}

export default Events;