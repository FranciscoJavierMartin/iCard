import React, { useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { TableUsers } from 'src/components/admin';
import Header from 'src/components/admin/Header/Header';
import { useUser } from 'src/hooks';

export default function UsersAdmin() {
  const { users, loading, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header
        title='Users'
        btnTitle='New user'
        btnClick={() => {
          console.log('hello');
        }}
      />
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
    </>
  );
}
