import React, { useEffect } from 'react';
import { useUser } from 'src/hooks';

export default function UsersAdmin() {
  const { users, loading, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users admin</h1>
      {users.map(user => (
        <div key={user.username}>{user.username}</div>
      ))}
    </div>
  );
}
