import styled from 'styled-components';

export const ArticleLi = styled.li`
  position: relative;
  display: grid;
  gap: 5px;
  padding: 40px 20px 20px;
  margin: 10px 0;
  background-color: aliceblue;
  border-radius: 20px;
`;

export const ArticleContainer = styled.div`
  position: relative;
  min-height: 40px;
  padding-right: 45px;
`;

export const EditButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #565353;
  background-color: #ffced8;
  border-radius: 50%;
  border: 1px solid #ffced8;
  opacity: 0.3;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    background-color: #ff869e;
    border-color: #ff869e;
    opacity: 0.6;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #565353;
  background-color: #ffced8;
  border-radius: 0 20px 0 20px;
  border: 1px solid #ffced8;
  opacity: 0.5;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    background-color: #ff869e;
    border-color: #ff869e;
    opacity: 0.8;
  }
`;
