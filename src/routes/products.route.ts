import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.postProducts);

router.get('/', productsController.getAllProducts);

export default router;