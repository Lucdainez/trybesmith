import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewUser } from '../types';

const postUser = async (newUser: NewUser): Promise<number> => {
  const query = `INSERT INTO 
  Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [
    newUser.username, newUser.vocation, newUser.level, newUser.password]);
  return insertId as number;
};

export default {
  postUser,
};
