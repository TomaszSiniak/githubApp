import React from 'react';
import  { connect } from 'react-redux';
import { searchUser, getUser } from '../services/api';
import { actionSearchUsers, actionClearSearchUsersArray } from '../actions/search';
import { actionAddNewUser } from '../actions/users';
import { setLocalForage } from '../services/browserStorage';

class UserSearch extends React.Component {

  // checkUsersResult = async (e) => {
  //   e.preventDefault();
  //   let query = e.target.elements.userName.value;
  //   const results = await searchUser(query);
  //   this.showResults(results);
  // }

  // showResults = (results) => {
  //   results.items.map( (item) => {
  //     const user = {
  //       login: item.login,
  //       id: item.id
  //     }
  //     this.props.dispatch(actionSearchUsers(user));
  //   })
  // }

  showMe = (e) => {

    e.preventDefault();
    let query = e.target.elements.userName.value;
    this.props.dispatch(actionClearSearchUsersArray())
    searchUser(query).then( (res) => {
      res.items.map( (item) => {
        const user = {
          login: item.login,
          id: item.id
        }
        this.props.dispatch(actionSearchUsers(user));
      })
     
    })
    e.target.elements.userName.value= '';
  }
  
  addUser = async (id) => {
    await getUser(id).then( (res) => {
      const user = {
        login: res.login,
        id: res.id,
        created: res.created_at.substr(0,10),
        repos: []
      }
      this.props.dispatch(actionAddNewUser(user));
      setLocalForage(this.props.users);
    })
  }
  render() {
    // console.log('RENDER()', this.props.search);
    return (
      <div>
        <form onSubmit={this.showMe}>
          <input name="userName" />
          <button>Search</button>
        </form>
        {this.props.search.length > 0 && <p className="result-title">Your results: </p>}
        {this.props.search.map( (user) => {
          return <p onClick={() => this.addUser(user.id)} user={user} key={user.id} className="users-list-result_item">{user.login}</p>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    users: state.users
  }
}

export default connect(mapStateToProps)(UserSearch);