import React, { Component } from 'react';

export default class Challenge16 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 16</h1>
        <p>Deafult Props</p>
        <p>{`Challenge16.defaultProps = { items: 0 };`}</p>
      </div>
    );
  }
}

Challenge16.defaultProps = { items: 0 };
