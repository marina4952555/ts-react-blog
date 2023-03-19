import React, { useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import Comment from '../components/Comment/Comment';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addNewComment } from '../redux/comments/thunks';
import {
  Button,
  Container,
  ErrorText,
  Label,
  Main,
  Textarea,
} from '../App.styled';
import UserList from '../components/UsersList/UserList';
import { NewComment } from '../components/Comment/Comment.styled';

const ArticleItem = () => {
  const [commentText, setCommentText] = useState('');
  const [isError, setIsError] = useState(false);

  const { currentUser, commentList } = useAppSelector((state) => ({
    currentUser: state.currentUser,
    commentList: state.comments,
  }));
  const params = useParams<{ id: string }>();

  const articleList = useAppSelector((state) => state.articles);

  const article = articleList.find((article) => article.id === params.id);

  const dispatch = useAppDispatch();

  const saveComment = () => {
    if (commentText && currentUser && article) {
      dispatch(
        addNewComment({
          commentText: commentText,
          commentAuthor: currentUser.email,
          perrentId: article.id,
          id: uuidv4(),
          commentDate: dayjs().format('DD.MM.YYYY HH:mm'),
        }),
      );
      setCommentText('');
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  if (!article) {
    return null;
  }

  return (
    <Main>
      <Container>{currentUser && <h2>{currentUser.email}</h2>}</Container>
      <Container>
        <Article article={article} />
        <ul>
          {commentList.map(
            (comment) =>
              article.id === comment.perrentId && (
                <Comment key={comment.id} comment={comment} />
              ),
          )}
        </ul>
        {currentUser.id && (
          <NewComment>
            <Label>
              <Textarea
                name='name'
                autoComplete='off'
                value={commentText}
                placeholder='comment text'
                onChange={(e) => setCommentText(e.target.value)}
              />
            </Label>
            {isError && (
              <ErrorText>Please enter the text of your comment</ErrorText>
            )}
            <Button onClick={saveComment}>save</Button>
          </NewComment>
        )}
      </Container>
      <Container>
        <UserList />
      </Container>
    </Main>
  );
};

export default ArticleItem;
