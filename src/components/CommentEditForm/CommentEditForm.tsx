import React, { useCallback, useState } from 'react';
import * as S from './CommentEditFormStyle';

interface CommentEditFormProps {
  handleClickCancelComment: () => void;
  handleClickSaveComment: (comment: string) => void;
}

function CommentEditForm({ handleClickCancelComment, handleClickSaveComment }: CommentEditFormProps) {
  const [comment, setComment] = useState('');

  const handleChangeComment = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComment((e.target as any).value);
  }, []);

  return (
    <S.Container>
      <S.CommentInputForm value={comment} onChange={handleChangeComment} />
      <S.ButtonWrapper>
        <S.Button onClick={() => handleClickSaveComment(comment)}>Save</S.Button>
        <S.Button onClick={handleClickCancelComment}>Cancel</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default CommentEditForm;
