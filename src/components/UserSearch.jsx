import React from 'react';
import { getUsers, subscribe, showSearchResult, addUser } from '../services/storage';



class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: []
    }
  }
  componentDidMount() {
    subscribe(() => {
      const searchResult = showSearchResult();
      this.setState({
        searchResult
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => getUsers(e)}>
          <input name="userName" />
          <button>Search</button>
        </form>
        {this.state.searchResult.length > 0 && <p className="result-title">Your results: </p>}
        {this.state.searchResult.map((user, key) => {
          return <p onClick={ () => addUser(user)} className="users-list-result_item" key={key}>{user.login}</p>
        })}
      </div>
    )
  }
}
export default UserSearch;