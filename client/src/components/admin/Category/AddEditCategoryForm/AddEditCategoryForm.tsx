import React from 'react';
import { Form, Image, Button } from 'semantic-ui-react';
import './AddEditCategoryForm.scss';

export default function CategoryForm() {
  return (
    <Form className='add-edit-category-form'>
      <Form.Input name='title' placeholder='Category' />
      <Button type='button' fluid content='Upload image' />
      <Button type='submit' content='Create' primary fluid />
    </Form>
  );
}
