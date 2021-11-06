import { LoginResponse } from 'src/interfaces/responses';

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  let body: any;

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
      throw new Error(body.detail);
    }
  } catch (error: any) {
    throw new Error(error);
  }

  return body;
}
