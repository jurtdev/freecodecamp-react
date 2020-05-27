import React, { Component } from 'react';

export default class Challenge29 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submit: this.state.input,
      input: '',
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            placeholder={'Type Here!'}
            onChange={this.handleChange}
          />
          <button type={'submit'}>Submit</button>
        </form>
        <h1>Challenge # 29</h1>
        <p>Create a Controlled Form</p>
        <p>Input: {this.state.input}</p>
        <p>Subitted Text: {this.state.submit}</p>
      </div>
    );
  }
}
