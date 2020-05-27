import React, { Component } from 'react';

const inputStyle = {
  width: 235,
  margin: 5,
};

export default class Challenge38 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      randomIndex: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.run = this.run.bind(this);
  }

  changeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

  run() {
    if (this.state.input) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        input: '',
      });
    }
  }

  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful',
    ];
    return (
      <div>
        <h1>Challenge # 38</h1>
        <p>Use Advanced JavaScript in React Render Method</p>
        <h2>Magic 8 Ball</h2>
        <input
          type={'text '}
          style={inputStyle}
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <br />
        <button onClick={this.run}>Ask the Magic 8-ball</button>
        <h3>Anwser:</h3>
        <p>{possibleAnswers[this.state.randomIndex]}</p>
      </div>
    );
  }
}
