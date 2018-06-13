import React from 'react';
import UserSearch from './UserSearch';
import { User } from './User';
import { connect } from 'react-redux';


class UserList extends React.Component {
 
  render() {
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
