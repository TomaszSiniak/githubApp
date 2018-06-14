import React from 'react';
import UserRepository from './UserRepositiory';
import { connect } from 'react-redux';
import { getUserRepos } from '../services/api';
import { actionGetRepos, actionRemoveUser} from '../actions/users';
import { setLocalForage } from '../services/browserStorage';

class User extends React.Component {

  showUserRepos = (login) => {

    getUserRepos(login).then( (res) => {
      const repos = [];
        res.map( (item) => {
          const repo = {
            name: item.name,
            stars: item.stargazers_count,
            id: item.id
          }
          repos.push(repo)
        })
      this.props.dispatch(actionGetRepos(login, repos))
      setLocalForage(this.props.users);
      
    })
  }
  
  removeUser = (id) => {
    this.props.dispatch(actionRemoveUser(id))
    setLocalForage(this.props.users);
  }
  
  render() {
    const login = this.props.user.login;
    console.log("RENDER USER() LOGIN", login);
    return (
      <div className="user">
        <div className="user_data">
          <p>Login: {this.props.user.login}</p>
          <p>Created at: {this.props.user.created}</p>
          <button onClick={ () => this.showUserRepos(login) }>Show repos</button>
          <button onClick={ () => this.showUserRepos(login)}>Refresh</button>
          <button onClick={ () => this.removeUser(this.props.user.id)}>Remove User</button>
        </div>
        <div className="repos">
          {this.props.user.repos.map((repo, key) => {
            return <UserRepository repo={repo} key={repo.id} />
          })}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(User);