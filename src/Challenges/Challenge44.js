import React, { Component } from 'react';

export default class Challenge44 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toDoList: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

  clickHandler() {
    let arrayItems = this.state.input.split(',');
    this.setState({
      toDoList: arrayItems,
      input: '',
    });
  }

  render() {
    const items = this.state.toDoList.map((item) => <li key={item}>{item}</li>);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Use Array.map() to Dynamically Render Elements</p>
        <textarea
          value={this.state.input}
          onChange={this.changeHandler}
          placeholder='comma seperated items'></textarea>
        <button type='submit' onClick={this.clickHandler}>
          Submit
        </button>
        <h3>Todo List</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}
