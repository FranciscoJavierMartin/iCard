import React, { useContext, useState } from 'react';
import { addUserApi, getMeApi, getUsersApi, updateUserApi } from 'src/api/user';
import { AuthContext } from 'src/contexts';
import { User } from 'src/interfaces/auth';
import {
  AddUserBodyRequest,
  UpdateUserBodyRequest,
} from 'src/interfaces/requests';

export function useUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { auth } = useContext(AuthContext);

  const getMe = async (token: string): Promise<User> => await getMeApi(token);
  const getUsers = async (): Promise<void> => {
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

  const addUser = async (data: AddUserBodyRequest): Promise<void> => {
    try {
      setLoading(true);
      await addUserApi(data, auth?.token || '');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (
    id: number,
    data: UpdateUserBodyRequest
  ): Promise<void> => {
    try {
      setLoading(true);
      await updateUserApi(id, data, auth?.token || '');
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
    addUser,
    updateUser,
  };
}
