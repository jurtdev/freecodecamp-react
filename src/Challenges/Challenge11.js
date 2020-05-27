import React from 'react';

class Fruits extends React.Component {
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>banana</li>
          <li>apple</li>
          <li>grapefruit</li>
        </ul>
      </div>
    );
  }
}

export default class Challenge11 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge # 11</h1>
        <p>Nesting class components in other class components</p>
        <Fruits />
      </div>
    );
  }
}
