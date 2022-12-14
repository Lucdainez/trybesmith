import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { ReturnProduct } from '../types';

const postProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const productId: number = await productsService.postProducts({ name, amount });
  const result: ReturnProduct = {
    id: productId,
    name,
    amount,
  };
  return res.status(201).json(result);
};

export default { postProducts };