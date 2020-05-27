import React, { Component } from 'react';

const List = (props) => {
  let array = props.list.join(', ');
  return <p>{array}</p>;
};

export default class Challenge15 extends Component {
  render() {
    return (
      <div>
        <h1>Challenge # 15</h1>
        <List list={['milk', 'butter', 'oranges', 'blueberries', 'romaine']} />
      </div>
    );
  }
}
