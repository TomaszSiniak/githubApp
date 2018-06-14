import { observable } from 'mobx'

class UserStore {
  @observable searchResults = ['ok', 'dupa', 'dzida']
  @observable users = ['john', 'tom', 'us']
}

const store = new UserStore

export default store