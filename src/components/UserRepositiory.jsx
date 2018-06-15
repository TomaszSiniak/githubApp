import React from 'react';

export const UserRepository = (props) => (
  <div className="repos_item">
    <p>Name: {props.repo.name} </p>
    <p>Stars: {props.repo.stars}</p>
  </div>
)