import { Formik } from 'formik';
import * as yup from 'yup';
import { FormStyled, Input, Label, StyledButton } from '@/shared/FormikStyle/FormikStyle';
import React,{ FC } from 'react';

interface FormValues {
  name: string | number;
  email: string | number;
  password: string | number;
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

const RegisterForm:FC = () => {

  const handleSubmit = (values: FormValues) => {
    console.log(values);
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

        <Label>
          Email
          <Input type='email' name='email'/>
        </Label>

        <Label>
          Password
          <Input type='password' name='password'/>
        </Label>

        <StyledButton type='submit'>Register</StyledButton>
      </FormStyled>
    </Formik>
  )
}

export default RegisterForm;