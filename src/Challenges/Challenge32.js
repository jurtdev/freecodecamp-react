import React, { Component } from 'react';

export default class Challenge32 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
    };
  }
  componentDidMount() {
    this.setState({
      name: 'Component Mounted',
    });
  }
  render() {
    return (
      <div>
        <h1>Challenge # 32</h1>
        <p>Use the Lifecycle Method componentDidMount</p>
        <p>{`componentDidMount() {
    this.setState({
      name: 'Component Mounted',
    });
  }`}</p>
        <p>
          State reset in componentDidMount: <strong>{this.state.name}</strong>
        </p>
      </div>
    );
  }
}
