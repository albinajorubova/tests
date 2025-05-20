import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { signupRequest, signinRequest, fetchUserRequest } from "../store/auth/slice";

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

  return {
    signUp,
    signIn,
    fetchUser,
  };
};
