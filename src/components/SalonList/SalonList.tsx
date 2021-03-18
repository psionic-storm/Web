import SalonAvatar from 'Elements/svg/SalonAvatar/SalonAvatar';
import React from 'react';
import * as S from './SalonListStyle';

function SalonList() {
  return (
    <S.Container>
      <S.Title>Salon</S.Title>
      <S.SalonItem>
        <SalonAvatar />
        <S.SalonName>잠수왕 포세이돈</S.SalonName>
      </S.SalonItem>
      <S.SalonItem>
        <SalonAvatar />
        <S.SalonName>양궁의 신 피닉스</S.SalonName>
      </S.SalonItem>
    </S.Container>
  );
}

export default SalonList;
