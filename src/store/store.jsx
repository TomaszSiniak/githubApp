import { observable, action, toJS } from 'mobx'
import { setLocalForage, getLocalForage } from '../services/browserStorage'

class UserStore {
  @observable searchResults = []
  @observable users = []

  @action searchUsers = (user) => {
    this.searchResults.push(user)
    
  }

  @action addUserToStore = (user) => {
    this.users.push(user)
    setLocalForage(toJS(this.users));
  }

  @action removeUserFromStore = (id) => {
    const user = this.users.find( user => user.id === id )
    this.users.remove(user)
    setLocalForage(toJS(this.users))
  }

  @action loadRepos = (login, repos) => {
    this.users.map ((user) => {
      if(login === user.login){
        user.repos = repos
      }
      setLocalForage(toJS(this.users));
    })
  }

  @action setUsers = () => {
    getLocalForage('users').then( (res) => {
      this.users = res
    })
  }
}

const store = new UserStore

export default store