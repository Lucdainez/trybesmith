import { Request, Response, NextFunction } from 'express';
import jwtFunctions from '../auth/jwtFunctions';

const tokenNotFound = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) { 
    return res.status(401).json({ message: 'Token not found' });
  }
  return next();
};

const invalidToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const payload = jwtFunctions.verifyToken(authorization as string);
  if (payload.username === '') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  return next();
};

export default {
  tokenNotFound,
  invalidToken,
};