import React from 'react';
import { Button, Checkbox, CheckboxProps, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AddEditUserForm.scss';
import { useUser } from 'src/hooks';
import { User } from 'src/interfaces/auth';

interface FormValues {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
}

interface AddEditUserFormProps {
  toggleModal: () => void;
  onRefetch: () => void;
  user?: User;
}

const initialValues = {
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  is_active: true,
  is_staff: false,
};

const addUserValidationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  first_name: Yup.string(),
  last_name: Yup.string(),
  password: Yup.string().required(),
  is_active: Yup.bool().required(),
  is_staff: Yup.bool().required(),
});

const updateUserValidationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  first_name: Yup.string(),
  last_name: Yup.string(),
  is_active: Yup.bool().required(),
  is_staff: Yup.bool().required(),
});

export default function AddEditUserForm({
  toggleModal,
  onRefetch,
  user,
}: AddEditUserFormProps) {
  const { addUser, error, loading, updateUser } = useUser();

  const formik = useFormik<FormValues>({
    initialValues: user ? { ...user, password: '' } : initialValues,
    validationSchema: user
      ? updateUserValidationSchema
      : addUserValidationSchema,
    validateOnChange: false,
    onSubmit: async (formValues: FormValues) => {
      try {
        if (user) {
          updateUser(user.id, formValues);
        } else {
          addUser(formValues);
        }
        onRefetch();
        toggleModal();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className='add-edit-user-form' onSubmit={formik.handleSubmit}>
      <Form.Input
        name='username'
        placeholder='Username'
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      />
      <Form.Input
        name='email'
        placeholder='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name='first_name'
        placeholder='First name'
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      />
      <Form.Input
        name='last_name'
        placeholder='Last name'
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input
        name='password'
        placeholder='Password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className='add-edit-user-form__active'>
        <Checkbox
          toggle
          checked={formik.values.is_active}
          onChange={(_, data: CheckboxProps) => {
            formik.setFieldValue('is_active', data.checked);
          }}
        />
        Is active user?
      </div>
      <div className='add-edit-user-form__staff'>
        <Checkbox
          toggle
          checked={formik.values.is_staff}
          onChange={(_, data: CheckboxProps) => {
            formik.setFieldValue('is_staff', data.checked);
          }}
        />
        Is admin user?
      </div>
      <Button
        type='submit'
        content={user ? 'Update user' : 'Create user'}
        primary
        fluid
      />
    </Form>
  );
}
