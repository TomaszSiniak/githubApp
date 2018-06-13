
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
    console.log(state);
      return state.filter( (id) => id !==action.id)

    case 'UPDATE_USER':
    console.log(state);
      return state.map ( (user) => {
        if(user.id === action.id){
          console.log('correct')
        }
      })
    default:
      return state;
  }
}
