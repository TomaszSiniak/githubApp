import React from 'react';
import {UserRepository} from './UserRepositiory';
import {showUserRepos} from '../services/storage';

export const User = (props) => (
  <div className="user">
      <div className= "user_data">
        <p>Login: {props.user.login}</p>
        <p>Created at: {props.user.created}</p>
        <button onClick={ () => showUserRepos(props.user.login)}>Show repos</button>
        <button>Refresh</button>
      </div>
  </div>
);