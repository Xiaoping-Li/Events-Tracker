import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import config from '../utils/config';

import DropDown4EventStatus from './DropDown4EventStatus';

class Event extends Component {

  handleDeleteClick = () => {
    axios.delete(config.ROOT_URL + `/api/events/${this.props.event.id}`)
      .then(result => {
        this.props.updateList();
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  render() {
    return (
      <div>
        <Link to={`/events/${this.props.event.id}/eventDetails`}>
          {this.props.event.title}  
        </Link>
        <DropDown4EventStatus />
        <button onClick={this.handleDeleteClick}>X</button>
      </div>  
    );
  }
}


export default Event;