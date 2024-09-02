import {Login} from '../types/Login';
import {Token} from '../types/Token';
import {User} from '../types/User';
import api from './api';

export const registerUser = async (user: User): Promise<User> => {
  const response = await api.post(
      '/users',
      user,
  );
  const {data} = response;
  return data;
};

export const login = async (loginData: Login): Promise<Token> => {
  const response = await api.post(
      '/login',
      loginData,
  );
  const {data} = response;
  return data;
};
