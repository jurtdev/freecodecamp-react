import React, { Component } from 'react';

export default class Challenge40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{`Use && for a More Concise Conditional`}</p>
        <button onClick={this.toggle}>Toggle Display</button>
        {this.state.display && <h3>Displayed!</h3>}
      </div>
    );
  }
}
