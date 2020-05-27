import React, { Component } from 'react';

const CurrentDate = (props) => {
  return <p>The current date is: {props.date}</p>;
};

export default class Challenge14 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 14</h1>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}
