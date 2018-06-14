import React from 'react';
import UserSearch from './UserSearch';
import User from './User';
import { connect } from 'react-redux';
import { getLocalForage } from '../services/browserStorage';
import { actionSetUsers } from '../actions/users';

class UserList extends React.Component {
  
  componentDidMount(){
    getLocalForage('users').then((users) => {
      this.props.dispatch(actionSetUsers(users));
    })
 
  }
  render() {
    if (!this.props.users) {
      return <div>Loading...</div>;
    }
    console.log("RENDERUJE", this.props.users);
    const title = 'User List';
    const find = 'Find user by name';
    return (
      <div className="container">
        <h2>{find}</h2>
        <UserSearch />
        <h2>{title}</h2>
        {this.props.users.map( (user, key) => {
          return <User user={user} key={user.id}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(UserList);
