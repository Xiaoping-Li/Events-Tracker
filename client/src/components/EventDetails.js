import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';
import TimeSlot from './TimeSlot';


class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {}
    };
  }

  componentDidMount() {
    axios.get(ROOT_URL + `/api/events/${this.props.match.params.id}/eventDetails`)
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
      slotsItems = this.state.details.timeSlots.map((slot, idx) => <li key={idx}>{slot.timeSlot_id}</li>);
    }

    return (
      <div>
        Welcome to {this.state.details.title} Page
        <TimeSlot event_ID={this.state.details.eventID} />
        <ul>
          {slotsItems}
        </ul>
      </div>
    );
  }
}

export default EventDetails;