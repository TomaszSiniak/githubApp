import React from 'react';
import {UserRepository} from './UserRepositiory';
import {showUserRepos} from '../services/storage';

export const User = (props) => (
  <div className="user">
      <div className= "user_data">
        <p>Login: {props.user.login}</p>
        <p>Created at: {props.user.created}</p>
        <button onClick={ () => showUserRepos(props.user.login)}>Show repos</button>
        <button disabled={props.user.repos.length === 0} onClick={ () => showUserRepos(props.user.login)}>Refresh</button> 
      </div>
      <div className="repos">
        {props.user.repos.map( (repo, key) => {
          return <UserRepository repo={repo} key={repo.id} />
        })}
      </div>
  </div>
);