import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetCurrentUser, requestSignIn, requestSignUp } from 'Modules/user/userActions';

function useUser() {
  const { isSignedIn, userInfo, isSignUpSuccess, error } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const getUserInfo = useCallback(() => {
    dispatch(requestGetCurrentUser());
  }, [dispatch]);

  const signIn = useCallback(
    ({ loginId, password }) => {
      dispatch(requestSignIn({ loginId, password }));
    },
    [dispatch],
  );

  const signUp = useCallback(
    ({ loginId, password, nickname }) => {
      dispatch(requestSignUp({ loginId, password, nickname }));
    },
    [dispatch],
  );

  return { isSignedIn, userInfo, isSignUpSuccess, error, getUserInfo, signIn, signUp };
}

export default useUser;
