import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';
import Timer from './Timer';
import TimeSlot from './TimeSlot';
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
        console.log(this.state.details);
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

    const today = new Date();

    return (
      <div>
        <div>Today: {today.getFullYear()}-{today.getMonth() + 1}-{today.getDate()}</div>
        <div>Welcome to {this.state.details.title} Page</div>
        <div>Content: {this.state.details.content}</div>
        
        <Timer event_ID={this.state.details.eventID} updateList={this.getEventDetails} />

        <ul>
          {slotsItems}
        </ul>
        
        <ColumnChart timeSlots={this.state.details.timeSlots}/>
      </div>
    );
  }
}

export default EventDetails;