import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.scss';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: formValues => {
      console.log('Email sent');
    },
  });

  return (
    <Form className='login-form-admin'>
      <Form.Input
        name='email'
        placeholder='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        type='password'
        name='password'
        placeholder='Password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type='submit' content='Login' primary fluid />
    </Form>
  );
}
