import { useCallback } from 'react';
import userAPI from 'Apis/userAPI';
import { useMutation } from 'react-query';
import { signOut, signUp, signIn } from 'Slices/userSlice';
import { useAppDispatch, useAppSelector } from 'Hooks/redux';
import { useRouter } from 'next/router';

function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const router = useRouter();

  const {
    mutate: mutateSignUp,
  } = useMutation(userAPI.signUp, {
    mutationKey: 'signUp',
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
    mutate: mutateSignIn,
  } = useMutation(userAPI.signIn, {
    mutationKey: 'signIn',
    onSuccess: data => {
      if (data.id) {
        dispatch(signIn(data));
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

  const handleGetCurrentUser = useCallback(async () => {
    const currentUser = await userAPI.getCurrentUser();
    return currentUser;
  }, []);

  return {
    user,
    isSignedIn: user.isSignedIn,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleGetCurrentUser,
  };
}

export default useUser;