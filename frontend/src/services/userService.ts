import {User} from '../types/User';
import api from './api';

export const registerUser = async (user: User) => {
  await api.post(
      '/users',
      user,
  );
};
