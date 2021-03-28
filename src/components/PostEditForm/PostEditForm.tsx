import React, { useMemo } from 'react';
import * as S from './PostEditFormStyle';

interface PostEditFormProps {
  type: 'review' | 'quote';
}

function PostEditForm({ type }: PostEditFormProps) {
  const renderReviewEditForm = useMemo(() => {
    return (
      <>
        <S.TitleInputForm type="text" placeholder="Write title.." />
        <S.ContentInputForm placeholder="Write content.." />
      </>
    );
  }, []);

  const renderQuoteEditForm = useMemo(() => {
    return (
      <>
        <S.PageInputForm type="number" placeholder="Write page.." />
        <S.ContentInputForm placeholder="Write content.." />
      </>
    );
  }, []);

  return (
    <S.Container>
      {type === 'review' && renderReviewEditForm}
      {type === 'quote' && renderQuoteEditForm}
      <S.ButtonWrapper>
        <S.Button>Save</S.Button>
        <S.Button>Cancel</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default PostEditForm;
