export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
}

export interface AuthState {
  me: User;
  token: string;
}
