import React, { Component } from 'react';

export default class Challenge24 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Initial State' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: 'React Rocks!',
    });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 24</h1>
        <p>Set State with this.setState</p>
        <button onClick={this.handleClick}>Set State</button>
        <p>{`this.setState({
      name: 'React Rocks!',
    });`}</p>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
