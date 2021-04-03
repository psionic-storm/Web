import React from 'react';
import { Comment as CommentType } from 'Types/comment';
import * as S from './CommentStyle';

interface CommentProps {
  comment: CommentType;
}

function Comment(props: CommentProps) {
  const { comment, updated_at, commenter } = props.comment;
  return (
    <S.Container>
      <S.Comment>{comment}</S.Comment>
      <S.Comment>{updated_at}</S.Comment>
      <S.Comment>{commenter}</S.Comment>
    </S.Container>
  );
}

export default Comment;
