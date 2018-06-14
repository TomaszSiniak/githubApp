import React from 'react';
import {UserRepository} from './UserRepositiory';


export const User = (props) => (
  <div className="user">
      <div className= "user_data">
        <p>Login: {props.user}</p>
        <p>Created at: </p>
        <button>Show repos</button>
        <button>Refresh</button> 
        <button>Remove User</button>
      </div>
      <div className="repos">
        {/* {props.user.repos.map( (repo, key) => {
          return <UserRepository repo={repo} key={repo.id} />
        })} */}
      </div>
  </div>
);