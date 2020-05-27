import React, { Component } from 'react';

export default class Challenge41 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      age: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      input: e.target.value,
      age: '',
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      age: this.state.input,
      input: '',
    });
  }

  render() {
    const buttonOne = <button type={'submit'}>Submit</button>;
    const buttonTwo = <button>You may enter!</button>;
    const buttonThree = <button>Thou shall not pass!</button>;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Use a Ternary Expression for Conditional Rendering</p>
        <form onSubmit={this.submitHandler}>
          <input
            placeholder={`What's your age?`}
            value={this.state.input}
            onChange={this.changeHandler}
            type={'number'}
          />
          {this.state.age
            ? this.state.age >= 18
              ? buttonTwo
              : buttonThree
            : buttonOne}
          <br />
          <br />

          <br />
        </form>
      </div>
    );
  }
}
