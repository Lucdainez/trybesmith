import jwt from 'jsonwebtoken';
// import { JwtConfig } from '../types';

const secret: string = process.env.JWT_SECRET || 'seuSecretAqui';

// const jwtConfig: JwtConfig = {
//   algorithm: 'HS256',
//   expiresIn: '1d',
// };

const createToken = (userId: number, username: string): string => jwt
  .sign({ data: userId, username }, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

export default {
  createToken,
};