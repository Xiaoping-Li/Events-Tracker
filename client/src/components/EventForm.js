import React, { Component } from 'react';

class EventForm extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      eventTitle: '',
      eventContent: '',
    }
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Date:</label>
          <input type='date' name='date' value={this.state.date} onChange={this.handleInputChange} placeholder='Enter Date'></input>
        </div>

        <div>
          <label>Event Title:</label>
          <input type='text' name='eventTitle' value={this.state.eventTitle} onChange={this.handleInputChange} placeholder='Enter Title'></input>
        </div>

        <div>
          <label>Event Content:</label>
          <textarea type='text' name='eventContent' value={this.state.eventContent} onChange={this.handleInputChange} placeholder='Enter Content'></textarea>
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default EventForm;