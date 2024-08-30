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
