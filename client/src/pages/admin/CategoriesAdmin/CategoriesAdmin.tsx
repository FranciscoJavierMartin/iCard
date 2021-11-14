import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import {
  Header,
  TableCategoryAdmin,
  AddEditCategoryForm,
} from 'src/components/admin';
import { ModalBasic } from 'src/components/common';
import { useCategory } from 'src/hooks';

export default function CategoriesAdmin() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const [contentModal, setContentModal] = useState<any>(null);
  const { loading, categories, getCategories } = useCategory();

  const toggleModal = () => setShowModal(prevState => !prevState);

  const addCategory = () => {
    setTitleModal('New category');
    setContentModal(<AddEditCategoryForm />);
    toggleModal();
  };

  useEffect(() => {
    getCategories();
  }, []);

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
        <TableCategoryAdmin categories={categories} />
      )}
      <ModalBasic show={showModal} onClose={toggleModal} title={titleModal}>
        {contentModal}
      </ModalBasic>
    </>
  );
}
