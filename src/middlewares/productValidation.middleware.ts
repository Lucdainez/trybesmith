import { Request, Response, NextFunction } from 'express';

const nameValidationObrigatory = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return next();
};

const nameToStringValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  return next();
};

const nameLengthValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (name.length < 3) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  return next();
};

const amountValidationObrigatory = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  return next();
};

const amountToStringValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  return next();
};

const amountLengthValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (amount.length < 3) {
    return res
      .status(422)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
};

export default {
  nameValidationObrigatory,
  nameToStringValidation,
  nameLengthValidation,
  amountValidationObrigatory,
  amountToStringValidation,
  amountLengthValidation,
};