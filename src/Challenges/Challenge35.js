import React, { Component } from 'react';

export default class Challenge35 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 35</h1>
        <p>Optimize Re-Renders with shouldComponentUpdate</p>
        <p>The number below should only update when even.</p>
        <OnlyEvens value={this.state.value} />
        <button onClick={this.addValue}>Click Me to Add 1</button>
      </div>
    );
  }
}

class OnlyEvens extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    console.log('Component did re-render');
  }

  render() {
    return (
      <div>
        <h3>{this.props.value}</h3>
      </div>
    );
  }
}
