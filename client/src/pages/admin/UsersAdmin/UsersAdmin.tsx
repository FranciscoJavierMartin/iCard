import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { TableUsers } from 'src/components/admin';
import { Header } from 'src/components/admin';
import { ModalBasic } from 'src/components/common';
import { useUser } from 'src/hooks';

export default function UsersAdmin() {
  const [titleModal, setTitleModal] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<any>(null);
  const { users, loading, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  const toggleModal = (): void => setShowModal(prevState => !prevState);

  return (
    <>
      <Header title='Users' btnTitle='New user' btnClick={toggleModal} />
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
      <ModalBasic show={showModal} title={titleModal} onClose={toggleModal}>
        {contentModal}
      </ModalBasic>
    </>
  );
}
