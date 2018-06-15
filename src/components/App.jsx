import React from 'react';
import UserList from './UserList';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Github Users</h1>
          <UserList />
      </div>
    )
  }
}
