import React, { Component } from 'react';

class EventForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      userID: null,
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
          <label>Event Title:</label>
          <input type='text' name='title' value={this.state.title} onChange={this.handleInputChange} placeholder='Enter Title'></input>
        </div>

        <div>
          <label>Event Content:</label>
          <textarea type='text' name='content' value={this.state.content} onChange={this.handleInputChange} placeholder='Enter Content'></textarea>
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default EventForm;