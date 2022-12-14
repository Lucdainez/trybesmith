import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { NewProduct, AllProducts } from '../types';

const postProducts = async ({ name, amount }: NewProduct): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId as number;
};

const getAllProducts = async (): Promise<AllProducts> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & AllProducts>(query);
  return result as AllProducts;
};

export default {
  postProducts,
  getAllProducts,
};