import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { Button, ErrorText, Input, Label } from '../../App.styled';
import { userPresence } from '../../redux/user/thunks';
import { RegistrationForm } from './Registration.styled';

const Registration = () => {
  const [valueEmail, setValueEmail] = useState('');
  const [isErrorEmail, setIsErrorEmail] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userEmail = useAppSelector((state) => state.currentUser.email);

  const saveUserRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (valueEmail) {
      dispatch(userPresence(valueEmail));
      setValueEmail('');
      setIsErrorEmail(false);
    } else {
      setIsErrorEmail(true);
    }
  };

  useEffect(() => {
    if (userEmail) {
      navigate('/', { replace: true });
    }
  }, [userEmail, navigate]);

  return (
    <RegistrationForm onSubmit={saveUserRegistration}>
      <Label>
        <Input
          type='text'
          name='email'
          autoComplete='off'
          value={valueEmail}
          placeholder='Your email'
          onChange={(e) => setValueEmail(e.target.value)}
        />
      </Label>
      {isErrorEmail && <ErrorText>Please enter email</ErrorText>}
      <Button type='submit'>Save</Button>
    </RegistrationForm>
  );
};

export default Registration;
