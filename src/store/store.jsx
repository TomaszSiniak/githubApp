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
    this.users.filter( user => user.id !== id )
  }
  @action loadRepos = (login, repos) => {
    this.users.map ((user) => {
      if(login === user.login){
        user.repos = repos
        console.log('repos added')
      } 
    })
  }
}


const store = new UserStore

export default store