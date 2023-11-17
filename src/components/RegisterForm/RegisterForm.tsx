import { Formik } from 'formik';
import * as yup from 'yup';
import { FormStyled, Input, Label, StyledButton } from '@/shared/FormikStyle/FormikStyle';
import React,{ FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { register } from '@/redux/auth/operation';
import { useAuth } from '@/hooks/useAuth';
import ErrorForm from '../ErrorForm/ErrorForm';
import { Error } from '@/shared/Error/Error.styled';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .required('Please fill in the name'),

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

const RegisterForm: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const { error } = useAuth() as  { error: string } ;

  const handleSubmit = (values: FormValues) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Username
          <Input type='text' name='name'/>
        </Label>
        <ErrorForm name='name'/>

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

        <StyledButton type='submit'>Register</StyledButton>
      </FormStyled>
    </Formik>
  )
}

export default RegisterForm;