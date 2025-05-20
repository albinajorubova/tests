import * as yup from 'yup';

export const signupValidationSchema = yup.object({
    username: yup
      .string()
      .trim()
      .min(4, 'Username must be at least 4 characters')
      .required('Username is required'),
    password: yup
      .string()
      .trim()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    password_confirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
});