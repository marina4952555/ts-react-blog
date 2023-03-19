import styled from 'styled-components';

export const CommentLi = styled.li`
  position: relative;
  display: grid;
  gap: 5px;
  padding: 45px 20px 20px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: #fff;
`;

export const ArticleContainer = styled.div`
  position: relative;
  min-height: 40px;
  padding-right: 45px;
`;

export const NewComment = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  background-color: aliceblue;
`;
