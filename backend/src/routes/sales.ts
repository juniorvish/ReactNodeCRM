import express from 'express';
import SalesController from '../controllers/SalesController';

const router = express.Router();

router.get('/', SalesController.getAllSales);
router.post('/', SalesController.addSale);
router.get('/:id', SalesController.getSale);
router.put('/:id', SalesController.updateSale);
router.delete('/:id', SalesController.deleteSale);

export default router;