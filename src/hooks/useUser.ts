import { useCallback } from 'react';
import userAPI from 'Apis/userAPI';
import { useMutation } from 'react-query';
import { getCurrentUser, signIn, signOut, signUp } from 'Slices/userSlice';
import { useAppDispatch, useAppSelector } from 'Hooks/redux';
import { useRouter } from 'next/router';

function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const router = useRouter();

  const {
    data: signUpData,
    mutate: mutateSignUp,
  } = useMutation(userAPI.signUp, {
    onSuccess: data => {
      if (data.id) {
        dispatch(signUp(data));
        router.push('/');
      }
    },
    onError: () => {
      alert('signup error');
    },
  });

  const {
    data: signInData,
    mutate: mutateSignIn,
  } = useMutation(userAPI.signIn, {
    onSuccess: data => {
      if (data.id) {
        dispatch(signUp(data));
        router.push('/');
      }
    },
    onError: () => {
      alert('signin error');
    },
  });

  const handleSignUp = useCallback(({ email, password }) => {
    mutateSignUp({ email, password });
  }, [mutateSignUp]);

  const handleSignIn = useCallback(({ email, password }) => {
    mutateSignIn({ email, password });
  }, [mutateSignIn]);

  const handleSignOut = useCallback(() => {
    userAPI.signOut();
    dispatch(signOut());
  }, [dispatch]);

  // const handleGetCurrentUser = useCallback(({ email, password }) => {
  //   mutateSignUp({ email, password });
  //   router.push('/');

  // }, [mutateSignUp, router]);

  return {
    user,
    isSignedIn: user.isSignedIn,
    handleSignUp,
    handleSignIn,
    handleSignOut,
  };
}

export default useUser;