import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';
import Timer from './Timer';
import ColumnChart from './ColumnChart';


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

    if (this.state.details === null) {
      return;
    }

    const today = new Date();

    return (
      <div>
        <div>Today: {today.getFullYear()}-{today.getMonth() + 1}-{today.getDate()}</div>
        <div>Welcome to {this.state.details.title} Page</div>
        <div>Content: {this.state.details.content}</div>
        
        <Timer event_ID={this.state.details.eventID} updateList={this.getEventDetails} />
        <ColumnChart timeSlots={this.state.details.timeSlots}/>
      </div>
    );
  }
}

export default EventDetails;