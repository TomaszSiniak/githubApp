import React from 'react';
import UserSearch  from './UserSearch';
import { User } from './User';

const title = 'User List';
const find = 'Find user by login';

export const UserList = () => (
  <div className="container">
    <h2>{find}</h2>
    <UserSearch />
    <h2>{title}</h2>
    <User />
  </div>
);