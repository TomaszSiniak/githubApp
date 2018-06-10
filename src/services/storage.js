import React from 'react';
import { searchUser,getUser, getUserRepos } from './api';
import { setLocalForage, getLocalForage } from './browserStorage';

let searchUserResult = [];
let myUsersList = [];
let listeners = [];

const publish = () => {
  listeners.forEach(listener => listener());
};

export const subscribe = (callback) => {
  listeners.push(callback);
};



// ??????
getLocalForage('users');



// get user from github api based on username
export const getUsers = (e) => {
  e.preventDefault();

  let userName = e.target.elements.userName.value.trim();

  if(!userName){
    console.log('Insert user name')
  }
  searchUser(userName).then( (res) => {
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
  return searchListResult;
}

export const showMyUsersList = () => {
  let addMyUsers = [...myUsersList];
  return addMyUsers;
}

// add user to local Database

export const addUser = (userId) => {

  getUser(userId).then( (res) => {
    const user = {
      login: res.login,
      created: res.created_at,
      id: res.id,
    }
    myUsersList.push(user);
    publish();
    setLocalForage(myUsersList);
  })
}

export const showUserRepos = (login) => {
  getUserRepos(login).then( (res) => {
    console.log(res)

    // const users = [...myUsersList];
    // const index = users.findIndex( (user) => {
    //   if(login === user.login){
    //     console.log('true')
    //   }else {
    //     console.log('false')
    //   } 
    // })
   
    // users[index] = {
      
    // }
    // myUsersList = users;
    // publish();
    // setLocalForage();
  })
}