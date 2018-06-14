import React from 'react'
import UserSearch from './UserSearch'
import { User } from './User'
import { getUser } from '../services/api'
import store from '../store/store'


class UserList extends React.Component {
 
  render() {
    const title = 'User List'
    const find = 'Find user by name'
    return (
      <div className="container">
        <h2>{find}</h2>
        <UserSearch store={store}/>
        <h2>{title}</h2>
        {store.users.map( (user, key) => {
          return <User key={key} user={user}/>
        })}
      </div>
    )
  }
}
export default UserList;