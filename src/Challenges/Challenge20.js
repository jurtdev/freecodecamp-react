import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Challenge20 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 20</h1>
        <p>Review Using Props with Stateless Functional Components</p>
        <Camper />
      </div>
    );
  }
}

const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

Camper.defaultProps = { name: 'CamperBot' };

Camper.propTypes = { name: PropTypes.string.isRequired };
