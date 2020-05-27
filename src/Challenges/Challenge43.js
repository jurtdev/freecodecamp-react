import React, { Component } from 'react';

export default class Challenge43 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    let inputStyle = {
      border: '1px solid black',
    };

    if (this.state.input.length > 15) {
      inputStyle = {
        border: '3px solid red',
      };
    }

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Change Inline CSS Conditionally Based on Component State</p>
        <input
          type='text'
          placeholder='Type Here!'
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
