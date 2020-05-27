import React, { Component } from 'react';

export default class Challenge26 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 26</h1>
        <p>Use State to Toggle an Element</p>
        {this.state.visibility ? (
          <div>
            <button onClick={this.handleClick}>Click Me!</button>
            <p>Now you see me!</p>
          </div>
        ) : (
          <div onClick={this.handleClick}>
            <button>Click Me!</button>
            <p>Nothing here to see.</p>
          </div>
        )}
      </div>
    );
  }
}
