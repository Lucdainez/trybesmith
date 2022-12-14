import productsModel from '../models/products.model';
import { NewProduct } from '../types';

const postProducts = async ({ name, amount }: NewProduct): Promise<number> => {
  const productId: number = await productsModel.postProducts({ name, amount });
  return productId;
};

export default { postProducts };