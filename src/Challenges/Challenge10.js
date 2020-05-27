import React from 'react';

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

export default class Challenge10 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge # 10</h1>
        <p>Nested Components</p>
        <Fruits />
      </div>
    );
  }
}
