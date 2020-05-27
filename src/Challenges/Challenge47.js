import React, { Component } from 'react';

export default class Challenge47 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {`ReactDOMServer.renderToString(
          <Challenge47 />
          );`}
        </p>
      </div>
    );
  }
}
