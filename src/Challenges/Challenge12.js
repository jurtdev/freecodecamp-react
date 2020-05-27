import React, { Component } from 'react';

export default class Challenge12 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 12</h1>
        <p>Render a Class Component to the DOM</p>
        <p>
          {`ReactDOM.render(
          <Challenge12 />, document.getElementById('root'))`}
        </p>
      </div>
    );
  }
}
