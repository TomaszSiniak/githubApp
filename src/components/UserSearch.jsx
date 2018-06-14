import React from 'react';
import  { observer } from 'mobx-react';
import { searchUser } from '../services/api';

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
        users.push(user)
      })
      console.log(users)
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
        {this.props.store.searchResults.map((user, key) => {
          return <p className="users-list-result_item" key={key}>{user}</p>
        })}
      </div>
    )
  }
}
export default UserSearch;