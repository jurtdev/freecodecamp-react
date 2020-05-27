import React, { Component } from 'react';

export default class Challenge22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp',
    };
  }
  render() {
    return (
      <div>
        <h1>Challenge # 22</h1>
        <p>Render State in the User Interface</p>
        <h4>{this.state.name}</h4>
      </div>
    );
  }
}
