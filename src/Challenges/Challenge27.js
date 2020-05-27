import React, { Component } from 'react';

export default class Challenge27 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleReset() {
    this.setState((state) => ({
      count: (state.count = 0),
    }));
  }

  handleIncrement() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  handleDecrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Challenge # 27</h1>
        <p>Write a Simple CounterPassed</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <h4>Current Count: {this.state.count}</h4>
      </div>
    );
  }
}
