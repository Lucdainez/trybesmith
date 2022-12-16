import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

import { Orders } from '../types';

const getAllOrders = async (_req: Request, res: Response) => {
  const result: Orders[] = await ordersService.getAllOrders();
  return res.status(200).json(result);
};

const postNewOrder = async (req: Request, res: Response) => { 
  const { productsIds } = req.body;
  const { authorization } = req.headers;
  const result = await ordersService.postNewOrder(productsIds, authorization as string);
  return res.status(201).json(result);
};

export default {
  getAllOrders,
  postNewOrder,
};