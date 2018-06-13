
export const actionAddNewUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const actionRemoveUser = (id) => ({
  type: 'REMOVE_USER',
  id
})

export const actionUpdateUser = (updates) => ({
  type: 'UPDATE_USER',
  updates
});