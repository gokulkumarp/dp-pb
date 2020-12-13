import { post } from './restProxy';

export const login = (data) => {
  return post('http://localhost:4000/api/auth/login', data);
};

export const register = (data) => {
  return post('http://localhost:4000/api/auth/register', data);
};