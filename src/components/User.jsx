import React from 'react';
import { UserRepository } from './UserRepositiory';
import { connect } from 'react-redux';
import { getUserRepos } from '../services/api';
import { actionUpdateUser} from '../actions/users';



class User extends React.Component {

  loadRepos = async (login) => {
  const result = await getUser
  }
  
  showUserRepos = (login) => {
    getUserRepos(login).then( (res) => {
      res.map( (item) => {
        const repo = {
          name: item.name,
          stars: item.stargazers_count
        }
      })
      console.log(res);
    })
  }

  render() {
    return (
      <div className="user">
        <div className="user_data">
          <p>Login: {this.props.user.login}</p>
          <p>Created at: {this.props.user.created}</p>
          <button onClick={ () => this.showUserRepos(this.props.user.login)} disabled={this.props.user.repos.length > 0}>Show repos</button>
          <button onClick={ () => this.showUserRepos(this.props.user.login)} disabled={this.props.user.repos.length === 0}>Refresh</button>
          <button>Remove User</button>
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