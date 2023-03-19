import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  background-color: #feebef;
  border-radius: 10px;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: #fff7f8;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  background-color: #feebef;
  border-radius: 10px;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: #fff7f8;
  }
  &:focus-visible {
    outline: #d5d5d5 auto 1px;
  }
`;

export const Header = styled.header`
  padding: 10px;
  background-color: #feebef;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const Navigation = styled.nav`
  background-color: #feebef;
`;

export const NavigationList = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #feebef;
`;

export const NavigationItem = styled.li`
  padding: 10px;
  font-weight: 700;
  color: #565353;
  &:hover {
    color: #241c1c;
  }
`;

export const Container = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #565353;
  background-color: #ffced8;
  border-radius: 10px;
  border: 1px solid #ffced8;
  transition: 0.3s;
  &:hover {
    background-color: #ff869e;
    border-color: #ff869e;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

export const Substrate = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, 0.5);
`;
