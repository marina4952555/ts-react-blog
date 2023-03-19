import React, { useState } from 'react';
import dayjs from 'dayjs';
import { CommentType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewCommentText, removeComment } from '../../redux/comments/thunks';
import { ArticleContainer, CommentLi } from './Comment.styled';
import { Input, Label } from '../../App.styled';
import { EditButton, RemoveButton } from '../Article/Article.styltd';

interface Props {
  comment: CommentType;
}

function Comment({ comment }: Props) {
  const [isEditingCommentText, setIsEditingCommentText] = useState(false);
  const [newCommentText, setNewCommentText] = useState(comment.commentText);

  const { currentUser } = useAppSelector((state) => ({
    currentUser: state.currentUser,
  }));

  const dispatch = useAppDispatch();

  const onClickRemoveComment = () => {
    dispatch(removeComment(comment.id));
  };

  const onClickEditCommentText = () => {
    setIsEditingCommentText(true);
  };

  const handleSaveCommentText = () => {
    dispatch(
      addNewCommentText({
        ...comment,
        commentText: newCommentText,
        commentDate: dayjs().format('DD.MM.YYYY HH:mm'),
      }),
    );
    setIsEditingCommentText(false);
  };

  return (
    <CommentLi>
      {comment.commentAuthor === currentUser.email && (
        <RemoveButton
          type='button'
          onClick={onClickRemoveComment}
          title='Remove article'
        >
          &#10006;
        </RemoveButton>
      )}
      {isEditingCommentText && (
        <form>
          <Label>
            <Input
              type='text'
              name='name'
              autoComplete='off'
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            />
          </Label>
          <button type='button' onClick={handleSaveCommentText} title='submit'>
            \/
          </button>
        </form>
      )}
      {!isEditingCommentText && comment.commentAuthor === currentUser.email && (
        <ArticleContainer>
          <p>{comment.commentText}</p>
          <EditButton type='button' onClick={onClickEditCommentText}>
            &#9998;
          </EditButton>
        </ArticleContainer>
      )}
      {!isEditingCommentText && comment.commentAuthor != currentUser.email && (
        <p>{comment.commentText}</p>
      )}
      <p>{comment.commentAuthor}</p>
      <p>{comment.commentDate}</p>
    </CommentLi>
  );
}

export default Comment;
