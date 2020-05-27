import React, { Component } from 'react';

export default class Challenge46 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true,
        },
        {
          username: 'Alan',
          online: false,
        },
        {
          username: 'Mary',
          online: true,
        },
        {
          username: 'Jim',
          online: false,
        },
        {
          username: 'Sara',
          online: true,
        },
        {
          username: 'Laura',
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter((user) => user.online);
    const renderOnline = usersOnline.map((item) => (
      <li key={item.username}>{item.username}</li>
    ));
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Use Array.filter() to Dynamically Filter an Array</p>
        <h3>Current Online Users:</h3>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
