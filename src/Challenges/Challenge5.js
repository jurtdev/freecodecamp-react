import React, { Component } from 'react';

export default class Challenge5 extends Component {
  render() {
    return (
      <div className='myDiv'>
        <h1>Challenge # 5</h1>
        <h1>Add a class to the parent div</h1>
        <p>{`<div className="myDiv"> content </div>`}</p>
      </div>
    );
  }
}
