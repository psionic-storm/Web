import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetCurrentUser, requestSignIn } from 'Modules/user/userActions';

function useUser() {
  const { isSignedIn, userInfo } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const getUserInfo = useCallback(() => {
    dispatch(requestGetCurrentUser());
  }, [dispatch]);

  const signIn = useCallback(
    ({ loginId, password }: any) => {
      dispatch(requestSignIn({ loginId, password }));
    },
    [dispatch],
  );

  return { isSignedIn, userInfo, getUserInfo, signIn };
}

export default useUser;
