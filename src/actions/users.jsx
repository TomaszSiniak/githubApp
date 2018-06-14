
export const actionAddNewUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const actionRemoveUser = (id) => ({
  type: 'REMOVE_USER',
  id
})

export const actionGetRepos = (login, repos) => ({
  type: 'GET_USER_REPOS',
  login,
  repos
});
export const actionSetUsers = (users) => ({
  type: 'SET_USERS',
  users
})

