import { apiClient } from '../api/client';

export async function signIn(credentials: { email: string; password: string }) {
  const { data } = await apiClient.post('/auth/login', credentials);
  localStorage.setItem('token', data.access_token);
}

export async function checkAuth() {
  await apiClient.get('/auth/profile');
}

export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
