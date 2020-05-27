import React, { Component } from 'react';

export default class Challenge31 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Challenge # 31</h1>
        <p>Pass a Callback as PropsPassed</p>
        <Input input={this.state.inputValue} handleChange={this.handleChange} />
        <Render input={this.state.inputValue} />
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        <h3>Get Input</h3>
        <input
          placeholder={'Input Goes Here!'}
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

class Render extends Component {
  render() {
    return (
      <div>
        <h3>Render Input: {this.props.input}</h3>
      </div>
    );
  }
}
