import UserAvatar from 'Elements/svg/UserAvatar/UserAvatar';
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
      <S.CommentWrapper>
        <UserAvatar height="36" width="36" />
        <S.CommentInfo>
          <S.Commenter>{commenter}</S.Commenter>
          <S.Comment>{comment}</S.Comment>
        </S.CommentInfo>
      </S.CommentWrapper>
      <S.Comment>{updated_at}</S.Comment>
    </S.Container>
  );
}

export default Comment;
