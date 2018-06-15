import { observable, action } from 'mobx'

class UserStore {
  @observable searchResults = []
  @observable users = []

  @action searchUsers = (user) => {
    this.searchResults.push(user)
  }

  @action addUserToStore = (user) => {
    this.users.push(user)
  }
  @action removeUserFromStore = (id) => {
    const user = this.users.find( user => user.id === id )
    this.users.remove(user)
  }
  @action loadRepos = (login, repos) => {
    this.users.map ((user) => {
      if(login === user.login){
        user.repos = repos
      } 
    })
  }
}

const store = new UserStore

export default store