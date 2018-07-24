import React, { Component } from 'react';
import axios from 'axios';
import config from '../utils/config';

import Event from './Event';

class EventsList extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      userID: 2,
      eventsList: [],
    };
  }

  componentDidMount() {
    this.getEventsList();
  }

  getEventsList = () => {
    axios.get(config.ROOT_URL + '/api/events/')
      .then(result => {
        const detail = result.data;
        this.setState({ eventsList: detail });
      })
      .catch(error => {
        console.log({ error, message: 'failed to load events' });
      })
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddEvent = e => {
    e.preventDefault();

    if (this.state.title === '') {
      alert('Please enter a title');
      return;
    } else {
      const newEvent = {
        title: this.state.title,
        content: this.state.title,
        userID: this.state.userID
      };

      axios.post(config.ROOT_URL + '/api/events/', newEvent)
        .then(result => {
          this.getEventsList();
        })
        .catch(error => {
          console.log({ error, message: 'failed to add newEvent' });
        })
    }

    this.setState({
      title: '',
      content: '',
      userID: 2,
    });
  }

  render() {
    return (
      <div>
        <form className="events__form">
          <div>
            <label>Event Title:</label>
            <input type='text' name='title' value={this.state.title} onChange={this.handleInputChange} placeholder='Enter Title'></input>
          </div>

          <div>
            <label>Event Content:</label>
            <textarea type='text' name='content' value={this.state.content} onChange={this.handleInputChange} placeholder='Enter Content'></textarea>
          </div>

          <button onClick={this.handleAddEvent}>Add</button> 
        </form> 

        <div className="events__List">
          <ul>
            {this.state.eventsList.map((event, index) => {
              return (
                <li key={index}><Event event={event} updateList={this.getEventsList} /></li>
              );  
            })}
          </ul>  
        </div>    
      </div>
    );
  }
}

export default EventsList;