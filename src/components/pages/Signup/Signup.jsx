import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import Form from '../../common/Form/Form';
import AuthLayout from "../../common/AuthLayout/AuthLayout";
import { signupValidationSchema } from '../../../stubs/schemas/signupValidationSchema';
import { formFields } from '../../../stubs/data/signupFormFields';
import { selectAuth } from "../../../store/auth/slice";
import { useAuthUser } from '../../../hooks/useAuthUser';
import { useNavigationHelpers } from '../../../hooks/useBackButton';

const Signup = () => {
  const { signUp } = useAuthUser();
  const { loading, error, user} = useSelector(selectAuth);
  const {goBack} = useNavigationHelpers();

  useEffect(() => {
    if (user && !loading && !error) {
      goBack();
    }
  }, [user, loading, error, goBack]);

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
