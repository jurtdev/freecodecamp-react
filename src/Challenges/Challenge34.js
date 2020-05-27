import React, { Component } from 'react';

export default class Challenge34 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({
      event: 'An key press had occured!',
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const styles = {
      color: 'green',
    };

    return (
      <div>
        <h1>Challenge # 34</h1>
        <h3 style={styles}>{this.state.event}</h3>
        <p>Add event listeners</p>
      </div>
    );
  }
}
