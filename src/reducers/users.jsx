
const users = [];

function usersReducer(state = users, action) {
  switch (action.type) {
    case 'ADD_USER':
    console.log(state, action);
      return [
        ...state,
        action.user
      ]
    case 'REMOVE_USER':
    console.log(state, action);
      return state.filter( user => user.id !== action.id)

    case 'GET_USER_REPOS':
    console.log(state,action)
      return state.map ( (user) => {
        if (user.login === action.login) {
          console.log('updated')
          return {
            ...user,
            repos: action.repos
          }
        }
        console.log('no  updated')
        return user;
      })
    case 'SET_USERS':
    console.log(state, action)
      return action.users
    default:
      return state;
  }
}

export default usersReducer;
