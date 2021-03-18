import React from 'react';
import Avatar from 'Elements/Avatar/Avatar';
import * as S from './ProfileStyle';

function Profile() {
  return (
    <S.Container>
      <Avatar height="300" width="300" />
      <S.Nickname>Granzort</S.Nickname>
      <S.Email>jungcome7@gmail.com</S.Email>
    </S.Container>
  );
}

export default Profile;
