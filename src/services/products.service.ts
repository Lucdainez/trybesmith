import productsModel from '../models/products.model';
import { NewProduct, AllProducts } from '../types';

const postProducts = async ({ name, amount }: NewProduct): Promise<number> => {
  const productId: number = await productsModel.postProducts({ name, amount });
  return productId;
};

const getAllProducts = async (): Promise<AllProducts> => {
  const allProducts: AllProducts = await productsModel.getAllProducts();
  return allProducts;
};

export default {
  postProducts,
  getAllProducts,
};