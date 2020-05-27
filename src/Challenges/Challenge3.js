import React, { Component } from 'react';

export default class Challenge3 extends Component {
  render() {
    const JSX = (
      <div>
        <h1>This is a block of JSX</h1>
        <p>This challenge is to make a comment in JSX, not shown here.</p>
        {/* But the comment is shown here */}
      </div>
    );

    return (
      <div>
        <h1>Challenge # 3: {JSX}</h1>
      </div>
    );
  }
}
