import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';
import Timer from './Timer';


class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      updated: false,
    };
  }

  componentDidMount() {
    this.getEventDetails();
  }

  componentDidUpdate() {
    if (this.state.updated === true) {
      this.getEventDetails();
    }
  }

  getEventDetails = () => {
    axios.get(ROOT_URL + `/api/events/${this.props.match.params.id}/eventDetails`)
      .then(result => {
        const data = result.data;
        this.setState({ details: data, updated: false });
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  handleListUpdate = () => {
    this.setState({ updated: true });
  }

  render() {
    let slotsItems;

    if (this.state.details === null) {
      return;
    }

    if (this.state.details.timeSlots) {
      slotsItems = this.state.details.timeSlots.map((slot, idx) => {
        const startTime = new Date(slot.timeSlot_start);
        const stopTime = new Date(slot.timeSlot_stop);
        const timeDiff = (stopTime - startTime) / 1000;
        const hours = Math.floor(timeDiff / 3600);
        const mins = Math.floor((timeDiff - (hours * 3600)) / 60);
        const secs = timeDiff - (hours * 3600) - (mins * 60);
        const timeFormat = `${hours}:${mins}:${secs}`;
        return (<li key={idx}>{timeFormat}</li>);  
      });
    }
    

    return (
      <div>
        Welcome to {this.state.details.title} Page
        <Timer event_ID={this.state.details.eventID} updateList={this.handleListUpdate} />
        <ul>
          {slotsItems}
        </ul>
      </div>
    );
  }
}

export default EventDetails;