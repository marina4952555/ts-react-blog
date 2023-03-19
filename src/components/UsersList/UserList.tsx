import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import User from '../User';

const UserList = () => {
  const userList = useAppSelector((state) => state.users);

  return (
    <>
      <h2>A list of users:</h2>
      <ul>
        {userList.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
