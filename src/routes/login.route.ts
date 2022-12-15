import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidationMiddleware from '../middlewares/loginValidation.middleware';

const router = Router();

router.post(
  '/', 
  loginValidationMiddleware.usernameValidations, 
  loginValidationMiddleware.passwordValidations, 
  loginController.loginUser,
);

export default router;
