import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import { Orders } from '../types';

const getAllOrders = async (_req: Request, res: Response) => {
  const result: Orders[] = await ordersService.getAllOrders();
  return res.status(200).json(result);
};

export default {
  getAllOrders,
};