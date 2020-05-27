import React, { Component } from 'react';

export default class Challenge13 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 13</h1>
        <p>My first React Component</p>
        <p>{`ReactDOM.render(<Challenge13 />, document.getElementById('root'))`}</p>
      </div>
    );
  }
}
