import { Request, Response } from 'express';
import loginService from '../services/login.service';

const loginUser = async (req: Request, res: Response) => {
  const result: string = await loginService.loginUser(req.body);
  if (result === 'Invalid') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json({ token: result });
};

export default {
  loginUser,
};