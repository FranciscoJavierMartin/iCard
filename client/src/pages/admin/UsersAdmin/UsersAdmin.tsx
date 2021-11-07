import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { TableUsers, Header, AddEditUserForm } from 'src/components/admin';
import { ModalBasic } from 'src/components/common';
import { useUser } from 'src/hooks';
import { User } from 'src/interfaces/auth';

export default function UsersAdmin() {
  const [titleModal, setTitleModal] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<any>(null);
  const [refetch, setRefetch] = useState<boolean>(false);
  const { users, loading, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, [refetch]);

  const toggleModal = (): void => setShowModal(prevState => !prevState);
  const onRefetch = (): void => setRefetch(prevState => !prevState);

  const addUser = () => {
    setTitleModal('New user');
    setContentModal(
      <AddEditUserForm toggleModal={toggleModal} onRefetch={onRefetch} />
    );
    toggleModal();
  };

  const updateUser = (user: User) => {
    setTitleModal(`Update ${user.username}`);
    setContentModal(
      <AddEditUserForm
        toggleModal={toggleModal}
        onRefetch={onRefetch}
        user={user}
      />
    );
    toggleModal();
  };

  return (
    <>
      <Header title='Users' btnTitle='New user' btnClick={addUser} />
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TableUsers users={users} updateUser={updateUser} />
      )}
      <ModalBasic show={showModal} title={titleModal} onClose={toggleModal}>
        {contentModal}
      </ModalBasic>
    </>
  );
}
