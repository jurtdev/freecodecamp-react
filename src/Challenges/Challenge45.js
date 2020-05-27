import React, { Component } from 'react';

export default class Challenge45 extends Component {
  render() {
    const frontEndFrameworks = [
      'React',
      'Angular',
      'Ember',
      'Knockout',
      'Backbone',
      'Vue',
    ];

    const items = frontEndFrameworks.map((item) => <li key={item}>{item}</li>);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Give Sibling Elements a Unique Key AttributePassed</p>
        <h3>FrontEnd FrameWorks</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}
