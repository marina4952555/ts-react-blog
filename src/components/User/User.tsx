import React from 'react';
import { Link } from 'react-router-dom';
import { UsersType } from '../../types';

interface Props {
  user: UsersType;
}

function Article({ user }: Props) {
  return (
    <li>
      <Link to={`/userItem/${user.id}`}>{user.email}</Link>
    </li>
  );
}

export default Article;
