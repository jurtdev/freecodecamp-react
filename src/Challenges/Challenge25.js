import React, { Component } from 'react';

export default class Challenge25 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      text: 'You clicked!',
    });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 25</h1>
        <p>{`Bind 'this' to a Class Method`}</p>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>{`this.handleClick = this.handleClick.bind(this);`}</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
