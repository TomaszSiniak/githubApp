import React from 'react'
import UserSearch from './UserSearch'
import { inject, observer } from 'mobx-react'
import { User } from './User'
import { getUser } from '../services/api'

@inject('store')
@observer
class UserList extends React.Component {
 
  render() {
    const title = 'User List'
    const find = 'Find user by name'
    return (
      <div className="container">
        <h2>{find}</h2>
        <UserSearch/>
        <h2>{title}</h2>
        {this.props.store.users.map( (user, key) => {
          return <User key={key} user={user}/>
        })}
      </div>
    )
  }
}
export default UserList;