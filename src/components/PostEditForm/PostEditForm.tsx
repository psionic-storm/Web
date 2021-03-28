import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Quote } from 'Types/quote';
import { Review } from 'Types/review';
import * as S from './PostEditFormStyle';

interface PostEditFormProps {
  type: 'review' | 'quote';
  review?: Review;
  quote?: Quote;
  handleClickCancelBtn: (type: 'review' | 'quote') => void;
  handleClickSaveBtn: ({ payload }: any) => void;
}

function PostEditForm({ type, review, quote, handleClickCancelBtn, handleClickSaveBtn }: PostEditFormProps) {
  const [reviewTitle, setReiveiwTitle] = useState('');
  const [quotePage, setQuotePage] = useState<number>(0);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (review) {
      setReiveiwTitle(review.title);
      setContent(review.content);
    }
    if (quote) {
      setQuotePage(quote.page);
      setContent(quote.content);
    }
  }, [review, quote]);

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setReiveiwTitle(e.target.value);
  }, []);

  const handleChangePage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuotePage(parseInt(e.target.value));
  }, []);

  const handleChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const renderReviewEditForm = useMemo(() => {
    return (
      <>
        <S.TitleInputForm type="text" placeholder="Write title.." value={reviewTitle} onChange={handleChangeTitle} />
        <S.ContentInputForm placeholder="Write content.." value={content} onChange={handleChangeContent} />
      </>
    );
  }, [content, reviewTitle, handleChangeContent, handleChangeTitle]);

  const renderQuoteEditForm = useMemo(() => {
    return (
      <>
        <S.PageInputForm type="number" placeholder="Write page.." value={quotePage} onChange={handleChangePage} />
        <S.ContentInputForm placeholder="Write content.." value={content} onChange={handleChangeContent} />
      </>
    );
  }, [content, quotePage, handleChangeContent, handleChangePage]);

  return (
    <S.Container>
      {type === 'review' && renderReviewEditForm}
      {type === 'quote' && renderQuoteEditForm}
      <S.ButtonWrapper>
        <S.Button onClick={() => handleClickSaveBtn({ type, title: reviewTitle, page: quotePage, content })}>
          Save
        </S.Button>
        <S.Button onClick={handleClickCancelBtn}>Cancel</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default PostEditForm;
