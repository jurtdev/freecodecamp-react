import React, { Component } from 'react';

export default class Challenge33 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: 1272,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ activeUsers: this.state.activeUsers + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Challenge # 33</h1>
        <p>
          Use the Lifecycle Method componentDidMount part 2 with setInterval
        </p>
        <p>Active Users: {this.state.activeUsers}</p>
      </div>
    );
  }
}
