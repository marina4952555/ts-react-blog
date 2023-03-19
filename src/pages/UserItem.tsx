import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Main } from '../App.styled';
import AddNewArticle from '../components/AddNewArticle';
import Article from '../components/Article';
import UserInfo from '../components/UserInfo';
import UserList from '../components/UsersList/UserList';
import { useAppSelector } from '../redux/hooks';

const UserItem = () => {
  const params = useParams<{ id: string }>();

  const { userList, articleList, userInfoList, currentUser } = useAppSelector(
    (state) => ({
      userList: state.users,
      articleList: state.articles,
      userInfoList: state.userInfo,
      currentUser: state.currentUser,
    }),
  );

  const user = userList.find((user) => user.id === params.id);

  const userInfo = userInfoList.find((user) => user.id === params.id);

  const currentArticleList = articleList.filter(
    (article) => article.perrentId == user?.id,
  );

  if (!user) {
    return <p>{params.id}</p>;
  }

  return (
    <Main>
      <Container>
        {userInfo && (
          <h2>
            {userInfo.firstName} {userInfo.surName}
          </h2>
        )}
        <p>Data of registration {user.registrationDate}</p>
        {!userInfo && <UserInfo />}
      </Container>
      <Container>
        {currentUser.id == user.id && <AddNewArticle />}
        {currentArticleList.length > 0 && (
          <ul>
            {currentArticleList.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ul>
        )}
        {currentArticleList.length == 0 && <p>This user has no articles</p>}
      </Container>
      <Container>
        <UserList />
      </Container>
    </Main>
  );
};

export default UserItem;
