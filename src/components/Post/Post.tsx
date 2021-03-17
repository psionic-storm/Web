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
      <S.Post>
        <S.PostTitle>Hello! My name is Zaratustra, a crazy guy</S.PostTitle>
        <S.PostContent>
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me gggThunderbot and lightning very
          very frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me
          Thunderbot and lightning very very frightening me Thunderbot and
          lightning very very frightening me Thunderbot and lightning very very
          frightening me Thunderbot and lightning very very frightening me{' '}
        </S.PostContent>
      </S.Post>
    </S.Container>
  );
}

export default Post;
