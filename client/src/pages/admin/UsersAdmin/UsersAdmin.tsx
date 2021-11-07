import React, { useEffect } from 'react';
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
        btnTitleSecond='Remove user'
        btnClickSecond={() => {
          console.log('Bye');
        }}
      />
      {users.map(user => (
        <div key={user.username}>{user.username}</div>
      ))}
    </>
  );
}
