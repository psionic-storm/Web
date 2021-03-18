import React from 'react';
import Avatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './ProfileStyle';

function Profile() {
  return (
    <S.Container>
      <Avatar height="300" width="300" />
      <S.Title>Granzort</S.Title>
      <S.SubTitle>jungcome7@gmail.com</S.SubTitle>
    </S.Container>
  );
}

export default Profile;
