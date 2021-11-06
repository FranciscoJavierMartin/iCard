import React from 'react';
import { getMeApi } from 'src/api/user';

export function useUser() {
  const getMe = async (token: string) => {
    const response = await getMeApi(token);

    return response;
  };

  return {
    getMe,
  };
}
