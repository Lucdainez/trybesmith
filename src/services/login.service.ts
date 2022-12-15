import loginModel from '../models/login.model';
import { Login } from '../types';
import jwt from '../auth/jwtFunctions';

const loginUser = async (login: Login): Promise<string> => {
  const result: number = await loginModel.loginUser(login);
  if (result === 401) return 'Invalid';
  const token: string = jwt.createToken(result, login.username);
  return token;
};

export default {
  loginUser,
};