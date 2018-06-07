import React from 'react';
import {UserRepository} from './UserRepositiory';

export const User = () => (
  <div className="user">
      <div className= "user_data">
        <p>Login: Lucyfer666</p>
        <p>Created at: 2018/04/20</p>
        <button>Show repos</button>
      </div>
      <UserRepository />
  </div>
);