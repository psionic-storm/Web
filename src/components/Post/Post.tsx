import React, { useMemo, useCallback } from 'react';
import UserAvatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './PostStyle';
import { Review } from 'Types/review';
import { Quote } from 'Types/quote';
import { useHistory } from 'react-router';

interface PostProps {
  type: 'review' | 'quote';
  postItem: any;
}

function Post({ postItem, type }: PostProps) {
  const history = useHistory();

  const renderSalonOrSpaceName = useMemo(() => {
    if (postItem) {
      return postItem.space ? postItem.space : postItem?.salon;
    }
    return 'Ghost';
  }, [postItem]);

  const goToSpace = useCallback(() => {
    if (type === 'review') {
      history.push(`/space/${postItem.reviewer_id}`);
    }
    if (type === 'quote') {
      history.push(`/space/${postItem.quoter_id}`);
    }
  }, [history, postItem, type]);

  return (
    <S.Container>
      <S.PostHeader>
        <UserAvatar onClick={goToSpace} />
        <S.PostInfo>
          <S.WriterInfo onClick={goToSpace}>
            <S.WriterName>{type === 'review' ? postItem.reviewer : postItem.quoter}</S.WriterName>
            <S.SalonOrSpaceName>{renderSalonOrSpaceName}</S.SalonOrSpaceName>
            <S.BookTitle>{postItem.book_title}</S.BookTitle>
          </S.WriterInfo>
          <S.CreatedDate>{postItem.updated_at}</S.CreatedDate>
        </S.PostInfo>
      </S.PostHeader>
      <S.Post>
        <S.PostTitle>{postItem.title && postItem.title}</S.PostTitle>
        <S.PostContent>{postItem.content}</S.PostContent>
      </S.Post>
    </S.Container>
  );
}

export default Post;
