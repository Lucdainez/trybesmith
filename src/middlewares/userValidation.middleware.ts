import { Request, Response, NextFunction } from 'express';

const usernameIsRequireValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  return next();
};

const usernameToStringValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (typeof username !== 'string') { 
    return res.status(422).json({ message: '"username" must be a string' });
  }
  return next();
};

const usernameLengthValidation = (req: Request, res: Response, next: NextFunction) => { 
  const { username } = req.body;
  if (username.length < 3) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  return next();
};

const vocationIsRequireValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  return next();
};

const vocationToStringValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  return next();
};

const vocationLengthValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (vocation.length < 3) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  return next();
};

const levelIsRequireValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
  return next();
};
  
const levelNumberValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (typeof level !== 'number') { 
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return next();
};
  
const levelLengthValidation = (req: Request, res: Response, next: NextFunction) => { 
  const { level } = req.body;
  if (level < 1) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  return next();
};

const passwordIsRequireValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

const passwordToStringValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (typeof password !== 'string') { 
    return res.status(422).json({ message: '"password" must be a string' });
  }
  return next();
};

const passwordLengthValidation = (req: Request, res: Response, next: NextFunction) => { 
  const { password } = req.body;
  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  return next();
};

export default {
  usernameIsRequireValidation,
  usernameToStringValidation,
  usernameLengthValidation,
  vocationIsRequireValidation,
  vocationToStringValidation,
  vocationLengthValidation,
  levelIsRequireValidation,
  levelNumberValidation,
  levelLengthValidation,
  passwordIsRequireValidation,
  passwordToStringValidation,
  passwordLengthValidation,
};