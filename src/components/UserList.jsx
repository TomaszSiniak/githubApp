import React from 'react';
import UserSearch from './UserSearch';
import { User } from './User';
import { getUser } from '../services/api';
import { showMyUsersList, subscribe } from '../services/storage';
import localForage from 'localforage';
import {getLocalForage } from '../services/browserStorage';



class UserList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myUsers: []
    }
  }
  componentDidMount(){
    subscribe( () => {
      const myUsers = showMyUsersList();
      this.setState({myUsers});
    });
  }
  render() {
    const title = 'User List';
    const find = 'Find user by name';
    return (
      <div className="container">
        <h2>{find}</h2>
        <UserSearch />
        <h2>{title}</h2>
        {this.state.myUsers.map( (user, key) => {
          return <User key={key} user={user}/>
        })}
      </div>
    )
  }
}
export default UserList;