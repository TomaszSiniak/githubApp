import localForage from 'localforage';




export const setLocalForage = (storage) => {

  localForage.setItem('users', storage).then((val) => {
    console.log('properly set Local Forage');
  }).catch(err => console.log('problem with setting local forage: ' + err))

}

export const getLocalForage = (storage, arr) => {
  
  localForage.getItem(storage).then((users) => {
    console.log('properly get data from local Forage');
    users.map( (user) => {arr.push(user)})
  })
  .catch(err => console.log('problem with getting local forage: ' + err))
}