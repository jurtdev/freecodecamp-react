import React, { Component } from 'react';

const ChildComponent = () => {
  return (
    <div>
      <h1>Challenge # 9</h1>
    </div>
  );
};

export default class Challenge9 extends Component {
  render() {
    return (
      <div>
        <ChildComponent />
        <p>Putting a child component into a parent component.</p>
        <p>{`<ChildComponent />`}</p>
      </div>
    );
  }
}
