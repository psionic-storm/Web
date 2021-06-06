import { psionicStorm } from 'Apis/baseAPI';
import userAPI from 'Apis/userAPI';
import { useAppDispatch, useAppSelector } from 'Hooks/redux';
import React, { useCallback, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getCurrentUser, signIn, signOut } from 'Slices/userSlice';

function Exercise() {
  console.log('렌더가 몇 번 되나요?');
  const dispatch = useAppDispatch();

  const { mutate: mutateSignIn, data: user, reset } = useMutation('user', userAPI.signIn, {
    onSuccess: data => {
      dispatch(signIn(data));
    },
    onError: () => {
      alert('there was an error');
    },
  });

  const onLogin = useCallback(() => {
    mutateSignIn({
      email: 'jungcome7@gmail.com',
      password: '12345',
    });
  }, [mutateSignIn]);

  const onLogout = useCallback(() => {
    userAPI.signOut();
    dispatch(signOut());
    reset();

  }, [dispatch, reset]);

  console.log('데이터는 있나요?', user);
  return (
    <>
      <button onClick={onLogin}>로그인</button>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
      <div>{user?.nickname}</div>
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
}

export default Exercise;