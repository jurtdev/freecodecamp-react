import React, { Component } from 'react';

export default class Challenge42 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Render Conditionally from Props</p>
        <br />
        <button onClick={this.handleClick}>Play Again!</button>
        <p>{'Turn: ' + this.state.counter}</p>
        <Results fiftyFifty={expression} />
      </div>
    );
  }
}

class Results extends Component {
  render() {
    return (
      <div>
        <h3>Results</h3>
        <p>{this.props.fiftyFifty <= 0.5 ? 'You Win!' : 'You Lose!'}</p>
      </div>
    );
  }
}
