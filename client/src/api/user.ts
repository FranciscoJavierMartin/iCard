import { User } from 'src/interfaces/auth';
import {
  AddUserBodyRequest,
  UpdateUserBodyRequest,
} from 'src/interfaces/requests';
import { LoginResponse } from 'src/interfaces/responses';

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  let body: LoginResponse;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}auth/login/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );
    body = await response.json();

    if (response.status !== 200) {
      throw new Error((body as any).detail);
    }
  } catch (error: any) {
    throw new Error(error);
  }

  return body;
}

export async function getMeApi(token: string): Promise<User> {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}auth/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export async function getUsersApi(token: string): Promise<User[]> {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}

export async function addUserApi(
  user: AddUserBodyRequest,
  token: string
): Promise<User> {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

export async function updateUserApi(
  id: number,
  user: UpdateUserBodyRequest,
  token: string
): Promise<User> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}users/${id}/`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );

  return await response.json();
}
