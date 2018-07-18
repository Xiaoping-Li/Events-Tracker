import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../utils/config';


class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      userID: 2, // dummy userID 2
    }
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

      axios.post(ROOT_URL + '/api/events/', newEvent)
        .then(result => {
          this.props.updateList();
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
      <form>
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
    );
  }
}

export default EventForm;