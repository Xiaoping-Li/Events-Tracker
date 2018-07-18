import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';

import EventForm from './EventForm';
import Event from './Event';

class EventsList extends Component {
  constructor() {
    super();
    this.state = {
      eventsList: [],
      updated: false,
    };
  }

  componentDidMount() {
    this.getEventsList();
  }

  componentDidUpdate() {
    if (this.state.updated === true) {
      this.getEventsList();
    }
  }

  getEventsList = () => {
    axios.get(ROOT_URL + '/api/events/')
      .then(result => {
        const detail = result.data;
        this.setState({ eventsList: detail, updated: false });
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  handleListUpdate = () => {
    this.setState({ updated: true });
  }

  render() {
    return (
      <div>
        <EventForm updateList={this.handleListUpdate}/>
        <div className="events__List">
          <ul>
            {this.state.eventsList.map((event, index) => {
              return (
                <li key={index}><Event event={event} updateList={this.handleListUpdate} /></li>
              );  
            })}
          </ul>  
        </div>    
      </div>
    );
  }
}

export default EventsList;