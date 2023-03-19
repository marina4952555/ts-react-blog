import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorText, Input, Label } from '../../App.styled';
import { addUserInfo } from '../../redux/userInfo/thunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AddUserInfo } from './userInfo.styled';

const UserInfo = () => {
  const [valueFirstName, setValueFirstName] = useState('');
  const [valueSurName, setValueSurName] = useState('');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorSurName, setIsErrorSurName] = useState(false);

  const dispatch = useAppDispatch();

  const params = useParams<{ id: string }>();

  const { userList, userInfoList, currentUser } = useAppSelector((state) => ({
    userList: state.users,
    userInfoList: state.userInfo,
    currentUser: state.currentUser,
  }));

  const user = userList.find((user) => user.id === params.id);

  const userInfo = userInfoList.find((user) => user.id === params.id);

  const saveUserInfo = () => {
    if (user) {
      const userInfo = {
        firstName: valueFirstName,
        surName: valueSurName,
        id: user.id,
      };
      dispatch(addUserInfo(userInfo));
      localStorage.setItem('currentUser', JSON.stringify(user));
      setValueFirstName('');
      setValueSurName('');
      setIsErrorFirstName(false);
      setIsErrorSurName(false);
    } else {
      if (!isErrorFirstName) {
        setIsErrorFirstName(true);
      }
      if (!isErrorSurName) {
        setIsErrorSurName(true);
      }
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      {!userInfo && currentUser.id == user.id && (
        <AddUserInfo>
          <Label>
            <Input
              type='text'
              name=''
              autoComplete='off'
              value={valueFirstName}
              placeholder='Your firstname'
              onChange={(e) => setValueFirstName(e.target.value)}
            />
          </Label>
          <Label>
            <Input
              type='text'
              name=''
              autoComplete='off'
              value={valueSurName}
              placeholder='Your surname'
              onChange={(e) => setValueSurName(e.target.value)}
            />
          </Label>
          <button onClick={saveUserInfo} type='submit'>
            Save
          </button>
          {isErrorFirstName && <ErrorText>Please enter firstname</ErrorText>}
          {isErrorSurName && <ErrorText>Please enter surname</ErrorText>}
        </AddUserInfo>
      )}
    </>
  );
};

export default UserInfo;
