import React from 'react';
import { searchUser } from './api';


let searchUserResult = [];
let myUsersList = [];
let listeners = [];

const publish = () => {
  listeners.forEach(listener => listener());
};

export const subscribe = (callback) => {
  listeners.push(callback);
};

// get user from github api based on username
export const getUsers = (e) => {
  e.preventDefault();

  let userName = e.target.elements.userName.value.trim();

  if(!userName){
    console.log('Insert user name')
  }
  searchUser(userName).then( (res) => {
    console.log(res)
    //clear array before each new searching
    searchUserResult = [];
    // loop for Echa element in array an create object with data
    res.items.forEach ( (item) => {
      const result = {
        login: item.login,
        id: item.id,
      }
      //push created objects to array
      searchUserResult.push(result)
      publish();
    })
  })
  e.target.elements.userName.value = '';
}


export const showSearchResult = () => {
  let searchListResult = [...searchUserResult];
  console.log('showSearchResult()')
  return searchListResult;
}

export const showMyUsersList = () => {
  let addMyUsers = [...myUsersList];

  return addMyUsers;
}

// add user to local Database

export const addUser = (user) => {
    myUsersList.push(user);
    publish();
    console.log(myUsersList);
}