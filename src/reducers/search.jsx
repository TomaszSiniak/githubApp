const searchResult= [];

export default function searchReducer(state = searchResult, action){
  switch(action.type){
    case "SEARCH_USERS":
      // console.log('arsafgsg', state, action);
      return [
        ...state,
        action.user
      ]
    default:
      return state;
  }
}
