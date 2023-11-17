import { Formik } from 'formik';
import * as yup from 'yup';
import { FormStyled, Input, Label, StyledButton } from '@/shared/FormikStyle/FormikStyle';
import React,{ FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import { logIn } from '@/redux/auth/operation';
import { Error } from '@/shared/Error/Error.styled';
import { AppDispatch } from '@/redux/store';
import ErrorForm from '../ErrorForm/ErrorForm';
import { useRouter } from 'next/router';

interface FormValues {
    email: string;
    password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Please fill in the email'),

  password: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('Please fill in the password'),
});

const LoginForm: React.FC<{}> = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { error } = useAuth() as  { error: string } ;

  const handleSubmit = async (values: FormValues) => {
    try {
      await dispatch(logIn(values));
      
      router.push('/contacts');
    } catch (error: any) {
      console.error('Ошибка входа:', error);
    }
    
  };
   

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Email
          <Input type='email' name='email'/>
        </Label>
        <ErrorForm name='email'/>

        <Label>
          Password
          <Input type='password' name='password'/>
        </Label>
        <ErrorForm name='password'/>

        {error === 'string' && <Error>{error}</Error>}

        <StyledButton type='submit'>Log In</StyledButton>
      </FormStyled>
    </Formik>
  )
}

export default LoginForm