
const users = [];

export default function usersReducer(state = users, action){
  switch (action.type) {
    case 'ADD_USER':
    console.log(state);
    return [
      ...state,
      action.user
    ]
    case 'REMOVE_USER':
      return
    case 'UPDATE_USER':
      return
    default:
      return state;
  }
}
