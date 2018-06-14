import localForage from 'localforage';

export const setLocalForage = (storage) => {

  localForage.setItem('users', storage).then((val) => {
    console.log('properly set Local Forage');
  }).catch(err => console.log('problem with setting local forage: ' + err))
}

export const getLocalForage = (storage) => {
  
  return localForage.getItem(storage).then((users) => {
    console.log('properly get data from local Forage');
    return users;
  
  }).catch(err => console.log('problem with getting local forage: ' + err))
}
