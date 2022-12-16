import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import productValidationMiddleware from '../middlewares/productValidation.middleware';
import tokenValidationMiddleware from '../middlewares/tokenValidation.middleware';

const router = Router();

router.get('/', ordersController.getAllOrders);

router.post(
  '/',
  tokenValidationMiddleware.tokenNotFound,
  tokenValidationMiddleware.invalidToken,
  productValidationMiddleware.productsIdsIsRequiredValidation,
  productValidationMiddleware.productsIdsArrayValidation,
  productValidationMiddleware.productsIdsNumberValidation,
  ordersController.postNewOrder,
);

export default router;