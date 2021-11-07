import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './AddEditUserForm.scss';

export default function AddEditUserForm() {
  return (
    <Form className='add-edit-user-form'>
      <Form.Input name='username' placeholder='Username' />
      <Form.Input name='email' placeholder='Email' />
      <Form.Input name='first_name' placeholder='First name' />
      <Form.Input name='last_name' placeholder='Last name' />
      <Form.Input name='password' placeholder='Password' type='password' />
      <div className='add-edit-user-form__active'>
        <Checkbox toggle />
        Is active user?
      </div>
      <div className='add-edit-user-form__staff'>
        <Checkbox toggle />
        Is admin user?
      </div>
      <Button type='submit' content='Create user' primary fluid />
    </Form>
  );
}
