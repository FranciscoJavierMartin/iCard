import { User } from 'src/interfaces/auth';
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
