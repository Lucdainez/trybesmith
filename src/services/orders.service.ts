import ordersModel from '../models/orders.model';
import { Orders } from '../types';
import jwtFunctions from '../auth/jwtFunctions';

const getAllOrders = async (): Promise<Orders[]> => {
  const allProducts: Orders[] = await ordersModel.getAllOrders();
  return allProducts;
};

const postNewOrder = async (productsIds: number[], authorization: string) => { 
  const payload = jwtFunctions.verifyToken(authorization);
  await ordersModel.postNewOrder(productsIds, payload.id);
  return { userId: payload.id, productsIds };
};

export default {
  getAllOrders,
  postNewOrder,
};