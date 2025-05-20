import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { signupRequest, signinRequest, fetchUserRequest, logoutRequest } from "../store/auth/slice";

export const useAuthUser = () => {
  const dispatch = useDispatch();
  
  const signUp = useCallback((data) => {
    dispatch(signupRequest(data));
  }, [dispatch]);

  const signIn = useCallback((data) => {
    dispatch(signinRequest(data));
  }, [dispatch]);

  const fetchUser = useCallback(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  return {
    signUp,
    signIn,
    fetchUser,
    logOut,
  };
};
