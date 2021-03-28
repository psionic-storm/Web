import React, { useMemo, useCallback } from 'react';
import UserAvatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './PostStyle';
import { Review } from 'Types/review';
import { Quote } from 'Types/quote';
import { useHistory, useLocation } from 'react-router';

interface PostProps {
  type: 'review' | 'quote';
  review?: Review;
  quote?: Quote;
  handleClickDeletePost: (type: 'review' | 'quote', id: number) => void;
  handleClickEditPost?: ({
    type,
    id,
    title,
    content,
    page,
  }: {
    type: 'review' | 'quote';
    id: number;
    title: string;
    content: string;
    page: number;
  }) => void;
  handleClickEditBtn: (type: 'review' | 'quote', id: number) => void;
}

function Post({ review, quote, type, handleClickDeletePost, handleClickEditBtn }: PostProps) {
  const history = useHistory();
  const { pathname } = useLocation();

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

  const handleClickDelete = useCallback(() => {
    if (type === 'review' && review) {
      handleClickDeletePost(type, review.id);
    }

    if (type === 'quote' && quote) {
      handleClickDeletePost(type, quote.id);
    }
  }, [type, review, quote, handleClickDeletePost]);

  // const handleClickEdit = useCallback(() => {
  //   if (type === 'review' && review) {
  //     handleClickUpdatePost({type, review.id, });
  //   }

  //   if (type === 'quote' && quote) {
  //     handleClickUpdatePost(type, quote.id);
  //   }
  // }, [type, review, quote, handleClickDeletePost]);

  const handleClickEdit = useCallback(() => {
    if (type === 'review' && review) {
      handleClickEditBtn(type, review.id);
    }

    if (type === 'quote' && quote) {
      handleClickEditBtn(type, quote.id);
    }
  }, [type, quote, review, handleClickEditBtn]);

  return (
    <S.Container>
      <S.PostHeader>
        <UserAvatar onClick={goToSpace} />
        <S.PostInfo>
          <S.WriterInfo>
            <S.WriterName onClick={goToSpace}>{type === 'review' ? review?.reviewer : quote?.quoter}</S.WriterName>
            <S.SalonOrSpaceName onClick={goToSpace}>{renderSalonOrSpaceName}</S.SalonOrSpaceName>
            <S.BookTitle>{type === 'review' ? review?.book_title : quote?.book_title}</S.BookTitle>
          </S.WriterInfo>
          <S.CreatedDate>{type === 'review' ? review?.updated_at : quote?.updated_at}</S.CreatedDate>
        </S.PostInfo>
        {pathname !== '/square' && (
          <S.ButtonWrapper>
            <S.Button onClick={handleClickEdit}>Edit</S.Button>
            <S.Button onClick={handleClickDelete}>X</S.Button>
          </S.ButtonWrapper>
        )}
      </S.PostHeader>
      <S.Post>
        {type === 'review' && <S.PostTitle>{review?.title}</S.PostTitle>}
        {type === 'quote' && <S.PostPage>{quote?.page} page</S.PostPage>}
        <S.PostContent>{type === 'review' ? review?.content : quote?.content}</S.PostContent>
      </S.Post>
    </S.Container>
  );
}

export default Post;
