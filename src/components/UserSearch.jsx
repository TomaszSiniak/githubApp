import React from 'react'
import { searchUser } from '../services/api'
import { inject, observer } from 'mobx-react'
import { getUser } from '../services/api' 
import { setLocalForage } from '../services/browserStorage'

@inject('store')
@observer
class UserSearch extends React.Component {

  searchQuery = (e) => {

    e.preventDefault()
    const query = e.target.elements.userName.value.trim()
    searchUser(query).then((res) => {

      res.items.map( (item) => {
        const user = {
          login: item.login,
          id: item.id
        }
        this.props.store.searchUsers(user)
      })
    })

    e.target.elements.userName.value = ''
  }

  addUser = (id) => {
    
    getUser(id). then( (res) => {

      const user = {
        login: res.login,
        id: res.id,
        created: res.created_at.substr(0,10),
        repos:[]
      }
      this.props.store.addUserToStore(user)
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.searchQuery}>
          <input name="userName" />
          <button>Search</button>
        </form>
        {this.props.store.searchResults.length > 0 && <p className="result-title">Your results: </p>}
        {this.props.store.searchResults.map((user, key) => {
          return <p 
            key= { user.id } 
            user= { user } 
            onClick= { () => this.addUser(user.id) } 
            className="users-list-result_item" 
            >
            { user.login }
          </p>
        })}
      </div>
    )
  }
}
export default UserSearch;