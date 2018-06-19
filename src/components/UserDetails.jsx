import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'


@inject('store')
@observer
class UserDetails extends React.Component {
  
  render() {
    console.log(this.props.match.params.id)
    return (
      <div className="wrapper">
        <div className="user-box">
          {this.props.store.users.map((user, key) => {
            if(user.id == this.props.match.params.id){
              return <div key={user.id}>
              <figure className="user-box_avatar">
                <img src= {user.avatar} alt=""/>
              </figure>
              <div className="user-box_info">
                <p>Login: {user.login}</p>
                <p>Followers: {user.followers}</p>
                <p>Type: {user.type}</p>
              </div>
            </div>
            }
          })}
        </div>
        <Link className="btn" to="/list">Back to List</Link>
      </div>
    )
  }
}

export default UserDetails