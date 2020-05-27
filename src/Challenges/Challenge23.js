import React, { Component } from 'react';

export default class Challenge23 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp',
    };
  }
  render() {
    const name = this.state.name;

    return (
      <div>
        <h1>Challenge # 23</h1>
        <p>Render State in the User Interface Another Way</p>
        <p>{`const name = this.state.name;`}</p>
        <p>name: {name}</p>
      </div>
    );
  }
}
