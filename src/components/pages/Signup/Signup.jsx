import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import Form from '../../common/Form/Form';
import AuthLayout from "../../common/AuthLayout/AuthLayout";
import { signupValidationSchema } from '../../../stubs/schemas/signupValidationSchema';
import { formFields } from '../../../stubs/data/signupFormFields';
import { selectAuth } from "../../../store/auth/slice";
import { useAuthUser } from '../../../hooks/useAuthUser';
import { useNavigationHelpers } from '../../../hooks/useBackButton';
import { useSnackbar } from '../../common/SnackbarProvider/SnackbarProvider';

const Signup = () => {
  const { signUp } = useAuthUser();
  const { loading, error, user} = useSelector(selectAuth);
  const {goBack} = useNavigationHelpers();
   const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (user && !loading && !error) {
      goBack();
    }
    else if (!loading && error) {
      showSnackbar(error, 'error');
    }
  }, [user, loading, error, goBack, showSnackbar]);

  return (
    <AuthLayout
      title="Регистрация"
      desc="Возможно, вы еще не зарегистрированы"
      question="Уже есть аккаунт?"
      link="/signin"
      linkText="Войти">
        <Form fields={formFields} validationSchema={signupValidationSchema} 
        valueBtn="Зарегистрироваться" onSubmit={signUp} loading={loading}/>
    </AuthLayout>
  );
};

export default React.memo(Signup);
