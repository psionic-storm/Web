import React from 'react';
import Avatar from 'Elements/svg/UserAvatar/UserAvatar';
import * as S from './ProfileStyle';

interface ProfileProps {
  name?: string;
  loginId?: string;
}

function Profile({ name, loginId }: ProfileProps) {
  return (
    <S.Container>
      <Avatar height="300" width="300" />
      <S.Title>{name}</S.Title>
      <S.SubTitle>{loginId}</S.SubTitle>
    </S.Container>
  );
}

export default Profile;
