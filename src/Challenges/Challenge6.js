import React, { Component } from 'react';

export default class Challenge6 extends Component {
  render() {
    const JSX = (
      <div>
        <h1>Challenge # 6</h1> <br />
        <p>How to do self closing tags.</p>
        <p>{`<br /> <hr />`}</p>
      </div>
    );
    return <div>{JSX}</div>;
  }
}
