import SalonAvatar from 'Elements/svg/SalonAvatar/SalonAvatar';
import UserAvatar from 'Elements/svg/UserAvatar/UserAvatar';
import React, { useMemo } from 'react';
import * as S from './AvatarListStyle';

interface AvatarListProps {
  title: string;
  type?: 'salon' | 'user';
}

function AvatarList({ title, type }: AvatarListProps) {
  const renderAvatar = useMemo(() => {
    if (type === 'salon') {
      return <SalonAvatar />;
    }

    if (type === 'user') {
      return <UserAvatar />;
    }
  }, [type]);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SalonItem>
        {renderAvatar}
        <S.SalonName>잠수왕 포세이돈</S.SalonName>
      </S.SalonItem>
      <S.SalonItem>
        {renderAvatar}
        <S.SalonName>양궁의 신 피닉스</S.SalonName>
      </S.SalonItem>
    </S.Container>
  );
}

export default AvatarList;
