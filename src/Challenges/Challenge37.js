import React, { Component } from 'react';

const styles = {
  display: 'inline',
  padding: 10,
  backgroundColor: 'yellow',
  color: 'purple',
  fontSize: 40,
  border: '1px solid black',
};

export default class Challenge37 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 37</h1>
        <p>{`const styles = {
  display: 'inline',
  padding: 10,
  backgroundColor: 'yellow',
  color: 'purple',
  fontSize: 40,
  border: '1px solid black',
};`}</p>
        <p style={styles}>Add Inline Styles in ReactPassed</p>
      </div>
    );
  }
}
