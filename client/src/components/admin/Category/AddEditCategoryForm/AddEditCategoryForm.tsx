import React, { useCallback, useState } from 'react';
import { Form, Image, Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';

import './AddEditCategoryForm.scss';

export default function CategoryForm() {
  const [previewImage, setPreviewImage] = useState<string>('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <Form className='add-edit-category-form'>
      <Form.Input name='title' placeholder='Category' />
      <Button
        type='button'
        fluid
        content='Upload image'
        {...(getRootProps() as any)}
      />
      <input {...getInputProps()} />
      <Image src={previewImage} fluid />
      <Button type='submit' content='Create' primary fluid />
    </Form>
  );
}
