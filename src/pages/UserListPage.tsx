import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { Container, Main } from '../App.styled';
import UsersList from '../components/UsersList';

const UserList = () => {
  const { currentUser } = useAppSelector((state) => ({
    currentUser: state.currentUser,
  }));

  return (
    <Main>
      <Container>{currentUser && <h2>{currentUser.email}</h2>}</Container>
      <Container>
        <UsersList />
      </Container>
      <Container></Container>
    </Main>
  );
};

export default UserList;
