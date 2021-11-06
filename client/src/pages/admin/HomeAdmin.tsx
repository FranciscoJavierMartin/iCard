import React, { useContext } from 'react';
import { AuthContext } from 'src/contexts';

export default function HomeAdmin() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home admin</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
