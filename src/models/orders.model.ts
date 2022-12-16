import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Orders } from '../types';

const getAllOrders = async (): Promise<Orders[]> => {
  const query = `SELECT 
  o.id,
  o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
FROM
  Trybesmith.orders AS o
      INNER JOIN
  Trybesmith.products AS p
WHERE
  o.id = p.order_id GROUP BY o.id;`;
  const [result] = await connection.execute<RowDataPacket[] & Orders[]>(query);
  return result;
};

const postNewOrder = async (productsIds: number[], userId: number): Promise<void> => {   
  const queryOrder = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?);';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(queryOrder, [userId]);
  await Promise.all(productsIds.map(async (productId) => {
    await connection.execute<ResultSetHeader>(`UPDATE Trybesmith.products 
    SET order_id = ? WHERE id = ?;`, [insertId, productId]);
  }));
};

export default {
  getAllOrders,
  postNewOrder,
};