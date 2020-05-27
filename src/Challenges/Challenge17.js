import React, { Component } from 'react';

const Items = (props) => {
  return <h4>Current Quantity of Items in Cart: {props.quantity}</h4>;
};

Items.defaultProps = {
  quantity: 0,
};

export default class Challenge17 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 17</h1>
        <p>Overriding default props</p>
        <p>{` <Items quantity={10} />`}</p>
        <Items quantity={10} />
      </div>
    );
  }
}
