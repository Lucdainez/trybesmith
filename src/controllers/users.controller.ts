import { Request, Response } from 'express';
import usersService from '../services/users.service';
// import { ReturnProduct, AllProducts } from '../types';

const postUser = async (req: Request, res: Response) => {
  const token: string = await usersService.postUser(req.body);
  return res.status(201).json({ token });
};

export default {
  postUser,
};