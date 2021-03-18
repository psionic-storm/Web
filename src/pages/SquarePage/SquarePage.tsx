import React from 'react';
import Post from 'Components/Post/Post';
import * as S from './SquarePageStyle';

function SquarePage() {
  return (
    <S.Container>
      <S.PostWrapper>
        <Post />
        <Post />
        <Post />
      </S.PostWrapper>
    </S.Container>
  );
}

export default SquarePage;
