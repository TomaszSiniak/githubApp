import React from 'react'
import { UserRepository } from './UserRepositiory'
import { inject, observer } from 'mobx-react'
import { getRepos }  from '../services/api'
import { setLocalForage } from '../services/browserStorage'


@inject('store')
@observer
class User extends React.Component {

  removeUser = (idToRemove) => {
   this.props.store.removeUserFromStore(idToRemove)
   
  }

  showUserRepository = (login) => {

    getRepos(login).then( (res) => {
      const repos = [];
      res.map( (item) => {
        const repo = {
          name: item.name,
          stars: item.stargazers_count,
          id: item.id
        }
        repos.push(repo)
      })
     
      this.props.store.loadRepos(login, repos)
    })
  }

  render() {
    return (
      <div className="user">
        <div className="user_data">
          <p>Login: {this.props.user.login}</p>
          <p>Created at: {this.props.user.created}</p>
          <button onClick = { () => this.showUserRepository(this.props.user.login)}>Show repos</button>
          <button>Refresh</button>
          <button onClick= {() => this.removeUser(this.props.user.id)}>Remove User</button>
        </div>
        <div className="repos">
          {this.props.user.repos == 0 && <p>This user has no repositories, Click show repos to check</p>}
          {this.props.user.repos.map( (repo, key) => {
          return <UserRepository repo={repo} key={repo.id} />
        })}
        </div>
      </div>
    )
  }
}

export default User
