import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';
import Timer from './Timer';
import TimeSlot from './TimeSlot';


class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.getEventDetails();
  }

  getEventDetails = () => {
    axios.get(config.ROOT_URL + `/api/events/${this.props.match.params.id}/eventDetails`)
      .then(result => {
        const data = result.data;
        this.setState({ details: data });
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  render() {
    let slotsItems;

    if (this.state.details === null) {
      return;
    }

    if (this.state.details.timeSlots) {
      slotsItems = this.state.details.timeSlots.map((slot, idx) => {
        return (
          <li key={idx}><TimeSlot slot={slot} updateList={this.getEventDetails}/></li>
        );  
      });
    }
    

    return (
      <div>
        Welcome to {this.state.details.title} Page
        <Timer event_ID={this.state.details.eventID} updateList={this.getEventDetails} />
        <ul>
          {slotsItems}
        </ul>
      </div>
    );
  }
}

export default EventDetails;