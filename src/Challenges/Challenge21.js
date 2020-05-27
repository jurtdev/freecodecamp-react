import React, { Component } from 'react';

export default class Challenge21 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Christian' };
  }
  render() {
    return (
      <div>
        <h1>Challenge # 21</h1>
        <p>Using State</p>
        <p>{`{this.state.name}`}</p>

        <p>name: {this.state.name}</p>
      </div>
    );
  }
}
