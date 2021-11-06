import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../../api/user';
import './LoginForm.scss';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (formValues: FormValues) => {
      try {
        const response = await loginApi(formValues.email, formValues.password);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.toString());
      }
    },
  });

  return (
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
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
