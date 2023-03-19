import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchInitialData } from '../redux/common/thunks';
import { userLogout } from '../redux/currentUser/currentUserSlice';
import {
  Header,
  Navigation,
  NavigationList,
  NavigationItem,
  Button,
} from '../App.styled';

const Layout = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  const handleChangeUser = () => {
    dispatch(userLogout());
    localStorage.removeItem('currentUser');
  };

  return (
    <>
      <Header>
        <Navigation>
          <NavigationList>
            <NavigationItem>
              {currentUser.id ? (
                <Link to={`/userItem/${currentUser.id}`}>Home</Link>
              ) : (
                <Link to='/authorization'>Authorization</Link>
              )}
            </NavigationItem>
            <NavigationItem>
              <Link to='/userList'>User list</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to='/'>News List</Link>
            </NavigationItem>
            {currentUser.id && (
              <NavigationItem>
                <Button onClick={handleChangeUser}>Output</Button>
              </NavigationItem>
            )}
          </NavigationList>
        </Navigation>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
