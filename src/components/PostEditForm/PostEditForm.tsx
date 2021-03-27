import React from 'react';
import * as S from './PostEditFormStyle';

interface PostEditFormProps {
  type: 'review' | 'quote';
}

function PostEditForm({ type }: PostEditFormProps) {
  return <S.Container>PostEditForm</S.Container>;
}

export default PostEditForm;
