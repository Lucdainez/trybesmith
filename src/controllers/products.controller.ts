import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { ReturnProduct, AllProducts } from '../types';

const postProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const productId: number = await productsService.postProducts({ name, amount });
  const result: ReturnProduct = { id: productId, name, amount };
  return res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result: AllProducts = await productsService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  postProducts,
  getAllProducts,
};