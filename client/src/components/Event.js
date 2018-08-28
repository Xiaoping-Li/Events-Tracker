import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DropdownButton } from 'react-bootstrap';

import config from '../utils/config';

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
        <DropdownButton />
        <button onClick={this.handleDeleteClick}>X</button>
      </div>  
    );
  }
}


export default Event;