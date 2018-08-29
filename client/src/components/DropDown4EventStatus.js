import React, { Component } from 'react';

class DropDown4EventStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }
  

  render() {
    return (
      <form>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="On Going">On Going</option>
          <option value="On Hold">On Hold</option>
          <option value="Withdraw">Withdraw</option>
          <option value="Completed">Completed</option>
        </select>
      </form>
    );
  }

}

export default DropDown4EventStatus;