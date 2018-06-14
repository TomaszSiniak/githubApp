const searchResult= [];

function searchReducer(state = searchResult, action){
  switch(action.type){
    case "SEARCH_USERS":
      // console.log('arsafgsg', state, action);
      return [
        ...state,
        action.user
      ]
    case "CLEAR_ARRAY":
      return []
    default:
      return state;
  }
}

export default searchReducer;