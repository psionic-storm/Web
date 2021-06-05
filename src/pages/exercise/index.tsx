import { psionicStorm } from 'Apis/baseAPI';
import userAPI from 'Apis/userAPI';
import { useAppSelector } from 'Hooks/redux';
import React from 'react';
import { useMutation } from 'react-query';

function Exercise() {
  const user = useAppSelector(state => state.user);

  const { mutate: signIn } = useMutation(userAPI.signIn, {
    onSuccess: data => {
      psionicStorm.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setTimeout(userAPI.refreshTokens, 5000);
    },
    onError: () => {
      alert('there was an error');
    },
  });

  function onLogin() {
    signIn({
      email: 'jungcome7@gmail.com',
      password: '12345',
    });
  }

  return (
    <>
      <button onClick={onLogin}>로긴</button>
      <div>{user.id}</div>
      <div>{user.email}</div>
      <div>{user.nickname}</div>
    </>
  );
}

export default Exercise;