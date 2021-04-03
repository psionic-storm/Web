import React from 'react';
import * as S from './CommentEditFormStyle';

function CommentEditForm() {
  return (
    <S.Container>
      <S.CommentInputForm />
      <S.ButtonWrapper>
        <S.Button>Save</S.Button>
        <S.Button>Cancel</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default CommentEditForm;
