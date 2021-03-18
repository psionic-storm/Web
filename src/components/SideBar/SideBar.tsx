import React from 'react';
import * as S from './SideBarStyle';

function SideBar() {
  return (
    <S.Container>
      <S.Button>Review</S.Button>
      <S.Button>Quote</S.Button>
      <S.Button>Discussion</S.Button>
    </S.Container>
  );
}

export default SideBar;
