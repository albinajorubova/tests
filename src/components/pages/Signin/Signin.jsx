import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import Form from '../../common/Form/Form';
import AuthLayout from "../../common/AuthLayout/AuthLayout";
import { signinValidationSchema } from '../../../stubs/schemas/signinValidationSchema';
import { formFields } from "../../../stubs/data/signinFormFields";
import { selectAuth } from "../../../store/auth/slice";
import { useNavigationHelpers } from '../../../hooks/useBackButton';
import { useAuthUser } from "../../../hooks/useAuthUser";
import { useSnackbar } from '../../common/SnackbarProvider/SnackbarProvider';

const Signin = () => {
   const { signIn } = useAuthUser();
   const { loading, error, user } = useSelector(selectAuth);
   const {goHome} = useNavigationHelpers();
   const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (user && !loading && !error) {
      goHome();
  } else if (!loading && error) {
      showSnackbar(error, 'error');
    }
  }, [user, loading, error, showSnackbar, goHome]);

  return (
     <AuthLayout
        title="Вход в аккаунт"
        question="Нет аккаунта?"
        link="/signup"
        linkText="Зарегистрироваться" 
      >
         <Form fields={formFields} validationSchema={signinValidationSchema} valueBtn="Войти" onSubmit={signIn} loading={loading}/>
     </AuthLayout>
  );
};

export default Signin;
