import { psionicStorm } from 'Apis/baseAPI';
import userAPI from 'Apis/userAPI';
import { useAppDispatch, useAppSelector } from 'Hooks/redux';
import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getCurrentUser, signIn, signOut } from 'Slices/userSlice';

function Exercise() {
  console.log('렌더가 몇 번 되나요?')
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  const { mutate: mutateSignIn } = useMutation(userAPI.signIn, {
    onSuccess: data => {
      dispatch(signIn());
      console.log(data);
    },
    onError: () => {
      alert('there was an error');
    },
  });

  useQuery('user', userAPI.getCurrentUser, {
    onSuccess: data => {
      dispatch(getCurrentUser(data));
    },
    onError: () => {
      alert('there was an error');
    },
    enabled: user.isSignedIn,
  });

  function onLogin(): void {
    mutateSignIn({
      email: 'jungcome7@gmail.com',
      password: '12345',
    });
  }

  function onLogout(): void {
    userAPI.signOut();
    dispatch(signOut());
  }

  return (
    <>
      <button onClick={onLogin}>로그인</button>
      <div>{user.id}</div>
      <div>{user.email}</div>
      <div>{user.nickname}</div>
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
}

export default Exercise;