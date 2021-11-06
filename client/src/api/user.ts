import { LoginResponse } from 'src/interfaces/responses';

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}auth/login/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
  );
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(body.details);
  }

  return await body;
}
