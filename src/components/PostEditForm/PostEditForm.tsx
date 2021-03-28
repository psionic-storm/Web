import React, { useCallback, useMemo, useState } from 'react';
import * as S from './PostEditFormStyle';

interface PostEditFormProps {
  type: 'review' | 'quote';
  handleClickCancelBtn: (type: 'review' | 'quote') => void;
  handleClickSaveBtn: ({ payload }: any) => void;
}

function PostEditForm({ type, handleClickCancelBtn, handleClickSaveBtn }: PostEditFormProps) {
  const [reviewTitle, setReiveiwTitle] = useState('');
  const [quotePage, setQuotePage] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setReiveiwTitle(e.target.value);
  }, []);

  const handleChangePage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuotePage(e.target.value);
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
