import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.post('/', usersController.postUser);

export default router;