import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
  return <h4>Current Quantity of Items in Cart: {props.quantity}</h4>;
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0,
};

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge #18</h1>
        <p>PropTypes</p>
        <p>{`Items.propTypes = { quantity: PropTypes.number.isRequired };`}</p>
        <Items />;
      </div>
    );
  }
}
