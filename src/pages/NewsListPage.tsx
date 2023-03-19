import React from 'react';
import { useAppSelector } from '../redux/hooks';
import Article from '../components/Article';
import UserList from '../components/UsersList';
import AddNewArticle from '../components/AddNewArticle';
import { Container, Main } from '../App.styled';

const UserItem = () => {
  const { currentUser, articleList } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
    articleList: state.articles,
  }));

  return (
    <Main>
      <Container>{currentUser && <h2>{currentUser}</h2>}</Container>
      <Container>
        {currentUser && <AddNewArticle />}
        <ul>
          {articleList.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Container>
      <Container>
        <UserList />
      </Container>
    </Main>
  );
};

export default UserItem;
