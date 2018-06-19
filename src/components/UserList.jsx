import React from 'react'
import UserSearch from './UserSearch'
import { inject, observer } from 'mobx-react'
import  User  from './User'
import  UserDetails  from './UserDetails'
import { getUser } from '../services/api'
import { getLocalForage } from '../services/browserStorage'

@inject('store')
@observer
class UserList extends React.Component {

  componentDidMount(){
    this.props.store.setUsers();
  }
  render() {
    const title = 'User List'
    const find = 'Find user by name'
    return (
      <div className="wrapper">
      <div className="container">
        <h2>{find}</h2>
        <UserSearch/>
        <h2>{title}</h2>
        {this.props.store.users.map( (user, key) => {
          return <User key={user.id} user={user} />
        })}
      </div>
      </div>
    )
  }
}
export default UserList;