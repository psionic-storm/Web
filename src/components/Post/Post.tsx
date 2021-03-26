import React, { useMemo, useCallback } from 'react';
import UserAvatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './PostStyle';
import { Review } from 'Types/review';
import { Quote } from 'Types/quote';
import { useHistory } from 'react-router';

interface PostProps {
  type: 'review' | 'quote';
  review?: Review;
  quote?: Quote;
}

function Post({ review, quote, type }: PostProps) {
  const history = useHistory();
  console.log(review);

  const renderSalonOrSpaceName = useMemo(() => {
    if (type === 'review') {
      return review?.space ? review.space : review?.salon;
    }
    if (type === 'quote') {
      return quote?.space ? quote.space : quote?.salon;
    }
    return 'Ghost';
  }, [review, quote, type]);

  const goToSpace = useCallback(() => {
    if (type === 'review') {
      history.push(`/space/${review?.reviewer_id}`);
    }
    if (type === 'quote') {
      history.push(`/space/${quote?.quoter_id}`);
    }
  }, [history, review, quote, type]);

  return (
    <S.Container>
      <S.PostHeader>
        <UserAvatar onClick={goToSpace} />
        <S.PostInfo>
          <S.WriterInfo onClick={goToSpace}>
            <S.WriterName>{type === 'review' ? review?.reviewer : quote?.quoter}</S.WriterName>
            <S.SalonOrSpaceName>{renderSalonOrSpaceName}</S.SalonOrSpaceName>
            <S.BookTitle>{type === 'review' ? review?.book_title : quote?.book_title}</S.BookTitle>
          </S.WriterInfo>
          <S.CreatedDate>{type === 'review' ? review?.updated_at : quote?.updated_at}</S.CreatedDate>
        </S.PostInfo>
      </S.PostHeader>
      <S.Post>
        <S.PostTitle>{type === 'review' && review?.title}</S.PostTitle>
        <S.PostContent>{type === 'review' ? review?.content : quote?.content}</S.PostContent>
      </S.Post>
    </S.Container>
  );
}

export default Post;
