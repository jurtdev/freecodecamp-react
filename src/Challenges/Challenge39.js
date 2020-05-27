import React, { Component } from 'react';

export default class Challenge39 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: true,
    };
    this.Toggle = this.Toggle.bind(this);
  }

  Toggle() {
    this.setState({
      displayed: !this.state.displayed,
    });
  }

  render() {
    if (this.state.displayed) {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <p>Render with an If-Else Condition</p>
          <button onClick={this.Toggle}>Toggle Display</button>
          <p>Displayed!</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <p>Render with an If-Else Condition</p>
          <button onClick={this.Toggle}>Toggle Display</button>
        </div>
      );
    }
  }
}
