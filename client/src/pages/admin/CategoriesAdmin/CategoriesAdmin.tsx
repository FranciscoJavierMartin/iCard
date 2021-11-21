import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import {
  Header,
  TableCategoryAdmin,
  AddEditCategoryForm,
} from 'src/components/admin';
import RemoveCategoryForm from 'src/components/admin/Category/RemoveCategoryForm/RemoveCategoryForm';
import { ModalBasic } from 'src/components/common';
import { useCategory } from 'src/hooks';
import { Category } from 'src/interfaces/category';

export default function CategoriesAdmin() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const [contentModal, setContentModal] = useState<any>(null);
  const [refetch, setRefetch] = useState<boolean>(false);
  const { loading, categories, getCategories } = useCategory();

  const toggleModal = (): void => setShowModal(prevState => !prevState);
  const onRefetch = (): void => setRefetch(prevState => !prevState);

  const addCategory = () => {
    setTitleModal('New category');
    setContentModal(
      <AddEditCategoryForm onClose={toggleModal} onRefetch={onRefetch} />
    );
    toggleModal();
  };

  const updateCategory = (data: Category) => {
    setTitleModal(`Update ${data.title}`);
    setContentModal(
      <AddEditCategoryForm
        onClose={toggleModal}
        onRefetch={onRefetch}
        category={data}
      />
    );
    toggleModal();
  };

  const removeCategory = (id: number): void => {
    setTitleModal('Remove category');
    setContentModal(
      <RemoveCategoryForm
        toggleModal={toggleModal}
        id={id}
        onRefetch={onRefetch}
      />
    );
    toggleModal();
  };

  useEffect(() => {
    getCategories();
  }, [refetch]);

  return (
    <>
      <Header
        title='Categories'
        btnTitle='New category'
        btnClick={addCategory}
      />
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TableCategoryAdmin
          categories={categories}
          updateCategory={updateCategory}
          removeCategory={removeCategory}
        />
      )}
      <ModalBasic show={showModal} onClose={toggleModal} title={titleModal}>
        {contentModal}
      </ModalBasic>
    </>
  );
}
