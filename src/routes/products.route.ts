import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productValidationMiddleware from '../middlewares/productValidation.middleware';

const router = Router();

router.post(
  '/',
  productValidationMiddleware.nameValidationObrigatory,
  productValidationMiddleware.amountValidationObrigatory,
  productValidationMiddleware.amountLengthValidation,
  productValidationMiddleware.nameToStringValidation,
  productValidationMiddleware.amountToStringValidation,
  productValidationMiddleware.nameLengthValidation,
  productsController.postProducts,
);

router.get('/', productsController.getAllProducts);

export default router;