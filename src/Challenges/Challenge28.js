import React, { Component } from 'react';

export default class Challenge28 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 28</h1>
        <p>Create a Controlled Input</p>
        <input
          value={this.state.input}
          placeholder={'Type Here!'}
          onChange={this.changeHandler}
        />
        <h3>Input Value: {this.state.input}</h3>
      </div>
    );
  }
}
