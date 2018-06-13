
const users = [];

export default function usersReducer(state = users, action){
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
    case 'UPDATE_USER':
    console.log(state,action);
      return state.map ( (user) => {
        if(user.login === action.login){
          return {
           ...user,
           ...action.updates
          }
        }
      })
    default:
      return state;
  }
}
