import { observable, action, toJS } from 'mobx'
import { setLocalForage, getLocalForage } from '../services/browserStorage'
import UserDetails from '../components/UserDetails';

class UserStore {
  @observable searchResults = []
  @observable users = []

  @action searchUsers = (user) => {
    this.searchResults.push(user)
  }

  @action addUserToStore = (user) => {
    this.users.push(user)
    setLocalForage(toJS(this.users));
    console.log('addUser()')
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

  @action userDetails = (id, avatar, type, followers) => {
    this.users.map( (user) => {
      if(id === user.id){
       user.avatar = avatar
       user.type = type
       user.followers = followers
      }
      console.log('userDetails()')
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