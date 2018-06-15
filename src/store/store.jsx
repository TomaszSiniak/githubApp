import { observable, action } from 'mobx'

class UserStore {
  @observable searchResults = []
  @observable users = ['john', 'tom', 'us']

  @action searchUsers = (user) => {
    this.searchResults.push(user)
  }
}

const store = new UserStore

export default store