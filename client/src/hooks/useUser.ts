import React, { useContext, useState } from 'react';
import { getMeApi, getUsersApi } from 'src/api/user';
import { AuthContext } from 'src/contexts';
import { User } from 'src/interfaces/auth';

export function useUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { auth } = useContext(AuthContext);

  const getMe = async (token: string): Promise<User> => await getMeApi(token);
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsersApi(auth?.token || '');
      setUsers(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    users,
    getMe,
    getUsers,
  };
}
