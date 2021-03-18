import React from 'react';
import Post from 'Components/Post/Post';
import * as S from './SquarePageStyle';
import SideBar from 'Components/SideBar/SideBar';
import Header from 'Components/Header/Header';

function SquarePage() {
  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.PostWrapper>
          <Post />
          <Post />
          <Post />
        </S.PostWrapper>
      </S.Container>
    </>
  );
}

export default SquarePage;
