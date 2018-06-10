import localForage from 'localforage';

export const setLocalForage = (storage) => {
  localForage.setItem('users', storage).then(() => {
    console.log('properly set Local Forage');

  })
}

export const getLocalForage = (storage) => {
  localForage.getItem(storage).then((val) => {
    console.log('properly get data from local Forage')

  })
}