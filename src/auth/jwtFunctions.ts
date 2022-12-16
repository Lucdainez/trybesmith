import { verify, sign } from 'jsonwebtoken';
import { Token } from '../types';
// import { JwtConfig } from '../types';

const secret: string = process.env.JWT_SECRET || 'seuSecretAqui';

// const jwtConfig: JwtConfig = {
//   algorithm: 'HS256',
//   expiresIn: '1d',
// };

const createToken = (userId: number, username: string): string => sign({
  id: userId, username,
}, secret, {
  algorithm: 'HS256',
  expiresIn: '1d',
});

const verifyToken = (authorization: string): Token => {
  try {
    const payload = verify(authorization, secret);
    return payload as Token;  
  } catch (error) {
    const payload: Token = {
      id: 0,
      username: '',
      iat: 0,
      exp: 0,
    };
    return payload;
  }  
};

export default {
  createToken,
  verifyToken,
};