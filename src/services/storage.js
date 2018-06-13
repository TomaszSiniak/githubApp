// import React from 'react';
// import { searchUser, getUser, getUserRepos } from './api';
// import { setLocalForage, getLocalForage } from './browserStorage';

// let searchUserResult = [];
// let myUsersList = [];
// let listeners = [];

// const publish = () => {
//   listeners.forEach(listener => listener());
// };

// export const subscribe = (callback) => {
//   listeners.push(callback);
// }

// const initialize = () => {
  
//   getLocalForage('users', myUsersList);
//   publish();
//   console.log('initialize()')
//   console.log(myUsersList)
// }
// initialize();


// // get user from github api based on username
// export const getUsers = (e) => {
//   e.preventDefault();

//   let userName = e.target.elements.userName.value.trim();

//   if (!userName) {
//     console.log('Insert user name')
//   }
//   searchUser(userName).then((res) => {
//     //clear array before each new searching
//     searchUserResult = [];
//     // loop for Echa element in array an create object with data
//     res.items.forEach((item) => {
//       const result = {
//         login: item.login,
//         id: item.id,
//       }
//       //push created objects to array
//       searchUserResult.push(result)
//       publish();
//     })
//   })
//   e.target.elements.userName.value = '';
// }


// export const showSearchResult = () => {
//   let searchListResult = [...searchUserResult];
//   return searchListResult;
// }

// export const showMyUsersList = () => {
//   let addMyUsers = [...myUsersList];
//   console.log('shoMyUserList()');
//   return addMyUsers;
  

// }

// // add user to local Database

// export const addUser = (userId) => {
//   getUser(userId).then((res) => {
//     const user = {
//       login: res.login,
//       created: res.created_at.substring(0, 10),
//       id: res.id,
//       repos: []
//     }
//     myUsersList.push(user);
//     publish();
//     setLocalForage(myUsersList);
//   })
// }


// //function to show users ropositiories
// export const showUserRepos = (login) => {
//   // get function from api and loast data
//   getUserRepos(login).then((res) => {
//     console.log(res);

//     //created array and assign userList
//     const users = [...myUsersList];
//     // checking if user exist in current array and assign it to variables
//     const index = users.findIndex((user) => {
//       if (login === user.login) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     //if user with this logo exists in our array we added to repos our API reponse
//     users[index].repos = res;

//     //re-assign main array
//     myUsersList = users;
//     publish();
//     setLocalForage(myUsersList);
//   })
// }

// export const deleteUser = (userIdToRemove) => {
//   const filteredUserList = myUsersList.filter( (user) => {
//       return user.id !== userIdToRemove
//   })
//   myUsersList = filteredUserList;
//   setLocalForage(myUsersList);
//   publish();
// }