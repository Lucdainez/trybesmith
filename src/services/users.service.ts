import userModel from '../models/users.model';
import { NewUser } from '../types';
import jwt from '../auth/jwtFunctions';

const postUser = async (newUser: NewUser): Promise<string> => {
  const userId: number = await userModel.postUser(newUser);
  const token: string = jwt.createToken(userId, newUser.username);
  return token;
};

export default {
  postUser,
};
