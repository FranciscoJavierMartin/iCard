import { LOCAL_STORAGE_TOKEN } from 'src/constants/localStorage';

export function getToken(): string {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN) || '';
}

export function removeToken(): void {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
}

export function setToken(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
}
