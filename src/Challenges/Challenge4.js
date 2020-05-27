import React, { Component } from 'react';

export default class Challenge4 extends Component {
  render() {
    const JSX = (
      <div>
        <h1>Challenge # 4</h1>
        <p>We are rendering to the DOM, you can see this here.</p>
        <p>
          {`ReactDOM.render(
          <Challenge4 />, document.getElementById('root'))`}
        </p>
      </div>
    );
    return JSX;
  }
}
