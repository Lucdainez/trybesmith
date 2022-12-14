import ordersModel from '../models/orders.model';
import { Orders } from '../types';

const getAllOrders = async (): Promise<Orders[]> => {
  const allProducts: Orders[] = await ordersModel.getAllOrders();
  return allProducts;
};

export default {
  getAllOrders,
};