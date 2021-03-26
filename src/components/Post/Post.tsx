import React, { useMemo } from 'react';
import Avatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './PostStyle';
import { Review } from 'Types/review';
import { Quote } from 'Types/quote';

interface PostProps {
  type: 'review' | 'quote';
  review?: Review;
  quote?: Quote;
}

function Post({ review, quote, type }: PostProps) {
  const renderSalonOrSpaceName = useMemo(() => {
    if (type === 'review') {
      return review?.space ? review.space : review?.salon;
    }
    if (type === 'quote') {
      return quote?.space ? quote.space : quote?.salon;
    }
    return 'Ghost';
  }, [review, quote, type]);

  return (
    <S.Container>
      <S.PostHeader>
        <Avatar />
        <S.PostInfo>
          <S.WriterInfo>
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
