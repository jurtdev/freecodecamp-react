import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <p>Hello, my name is: {this.props.name}</p>
      </div>
    );
  }
}

export default class Challenge30 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Christian Jurt',
    };
  }
  render() {
    return (
      <div>
        <h1>Challenge # 30</h1>
        <p>Pass State as Props to Child Components</p>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}
