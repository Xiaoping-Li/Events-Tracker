import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ROOT_URL from '../utils/config';

class Event extends Component {

  handleDeleteClick = () => {
    axios.delete(ROOT_URL + `/api/events/${this.props.event.id}`)
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
        <Link to={`/${this.props.event.id}/eventDetails`}>
          {this.props.event.title}  
        </Link>
        <button onClick={this.handleDeleteClick}>X</button>
      </div>
      
    );
  }
}


export default Event;