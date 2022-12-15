import { Router } from 'express';
import usersController from '../controllers/users.controller';
import userValidationMiddleware from '../middlewares/userValidation.middleware';

const router = Router();

router.post(
  '/',
  userValidationMiddleware.usernameIsRequireValidation,
  userValidationMiddleware.passwordIsRequireValidation,
  userValidationMiddleware.usernameToStringValidation,
  userValidationMiddleware.usernameLengthValidation,
  userValidationMiddleware.levelLengthValidation,
  userValidationMiddleware.passwordLengthValidation,
  userValidationMiddleware.vocationIsRequireValidation,
  userValidationMiddleware.vocationToStringValidation,
  userValidationMiddleware.passwordToStringValidation,
  userValidationMiddleware.vocationLengthValidation,
  userValidationMiddleware.levelIsRequireValidation,
  userValidationMiddleware.levelNumberValidation,
  usersController.postUser,
);

export default router;