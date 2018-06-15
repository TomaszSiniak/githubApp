import React from 'react'
import { searchUser } from '../services/api'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class UserSearch extends React.Component {

  searchQuery = (e) => {

    e.preventDefault()
    const query = e.target.elements.userName.value.trim()
    searchUser(query).then((res) => {
      const users = []
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

  render() {
    return (
      <div>
        <form onSubmit={this.searchQuery}>
          <input name="userName" />
          <button>Search</button>
        </form>
        {this.props.store.searchResults.length > 0 && <p className="result-title">Your results: </p>}
        {this.props.store.searchResults.map((user, key) => {
          return <p className="users-list-result_item" key={key}>{user.login}</p>
        })}
      </div>
    )
  }
}
export default UserSearch;