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
    isSuccess: isSignUpSuccess,
  } = useMutation(userAPI.signUp, {
    onSuccess: data => {
      dispatch(signUp(data));
      router.push('/');
    },
    onError: () => {
      alert('signup error');
    },
  });

  const {
    data: signInData,
    mutate: mutateSignIn,
    isSuccess: isSignInSuccess,
  } = useMutation(userAPI.signIn, {
    onError: () => {
      alert('signin error');
    },
  });

  const handleSignUp = useCallback(({ email, password }) => {
    mutateSignUp({ email, password });

    if (isSignUpSuccess) {
      dispatch(signUp(signUpData));
      router.push('/');
    }
  }, [mutateSignUp, signUpData, isSignUpSuccess, router, dispatch]);

  const handleSignIn = useCallback(({ email, password }) => {
    if (isSignInSuccess) {
      dispatch(signIn(signInData));
      router.push('/');
    }
    mutateSignIn({ email, password });
  }, [mutateSignIn, signInData, isSignInSuccess, router,dispatch]);

  const handleSignOut = useCallback(() => {
    userAPI.signOut();
    dispatch(signOut());
  }, [dispatch, reset]);

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