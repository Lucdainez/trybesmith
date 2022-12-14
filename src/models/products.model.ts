import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewProduct } from '../types';

const postProducts = async ({ name, amount }: NewProduct): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId as number;
};

export default { postProducts };