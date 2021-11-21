import React, { useCallback, useState } from 'react';
import { Form, Image, Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCategory } from 'src/hooks';

import './AddEditCategoryForm.scss';
import { Category } from 'src/interfaces/category';

interface FormValues {
  title: string;
  image: string;
}

const initialValues: FormValues = {
  title: '',
  image: '',
};

const addCategoryValidationSchema = Yup.object({
  title: Yup.string().required(),
  image: Yup.string().required(),
});

const updateCategoryValidationSchema = Yup.object({
  title: Yup.string().required(),
  image: Yup.string(),
});

interface AddEditCategoryFormProps {
  onClose: () => void;
  onRefetch: () => void;
  category?: Category;
}

export default function AddEditCategoryForm({
  onClose,
  onRefetch,
  category,
}: AddEditCategoryFormProps) {
  const [previewImage, setPreviewImage] = useState<string>(
    category?.image || ''
  );
  const { addCategory, updateCategory } = useCategory();

  const formik = useFormik<FormValues>({
    initialValues: category ? { ...category, image: '' } : initialValues,
    validationSchema: category
      ? updateCategoryValidationSchema
      : addCategoryValidationSchema,
    validateOnChange: false,
    onSubmit: async (formValues: FormValues) => {
      try {
        if (category) {
          await updateCategory(category.id, formValues);
        } else {
          await addCategory(formValues);
        }
        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    await formik.setFieldValue('image', file);
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <Form className='add-edit-category-form' onSubmit={formik.handleSubmit}>
      <Form.Input
        name='title'
        placeholder='Category'
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <Button
        {...getRootProps()}
        type='button'
        fluid
        content={category ? 'Update image' : 'Upload image'}
        color={formik.errors.image ? 'red' : undefined}
      />
      <input {...getInputProps()} />
      <Image src={previewImage} fluid />
      <Button
        type='submit'
        content={category ? 'Update' : 'Create'}
        primary
        fluid
      />
    </Form>
  );
}
