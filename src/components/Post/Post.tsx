import React from 'react';
import Avatar from 'Elements/Avatar/Avatar';
import * as S from './PostStyle';

function Post() {
  return (
    <S.Container>
      <S.PostHeader>
        <Avatar />
        <S.PostInfo>
          <S.WriterInfo>
            <S.WriterName>Granzort</S.WriterName>
            <S.SalonOrSpaceName>Granzort Space</S.SalonOrSpaceName>
            <S.BookTitle>Also sprach Zarathustra</S.BookTitle>
          </S.WriterInfo>
          <S.CreatedDate>March 7, 2021</S.CreatedDate>
        </S.PostInfo>
      </S.PostHeader>
    </S.Container>
  );
}

export default Post;
