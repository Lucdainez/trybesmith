import { RowDataPacket } from 'mysql2/promise';
import { Login } from '../types';
import connection from './connection';

const loginUser = async (login: Login): Promise<number> => {
  const queryUsername = 'SELECT * FROM Trybesmith.users WHERE username = ?;';
  const queryPassword = 'SELECT * FROM Trybesmith.users WHERE password = ?;';
  const [[resultUsername]] = await connection
    .execute<RowDataPacket[]>(queryUsername, [login.username]);
  
  const [[resultPassword]] = await connection
    .execute<RowDataPacket[]>(queryPassword, [login.password]);
  
  if (!resultUsername || !resultPassword) {
    return 401;
  }
  return resultUsername.id;
};

export default {
  loginUser,
};