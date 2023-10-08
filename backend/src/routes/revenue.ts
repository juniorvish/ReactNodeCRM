import express from 'express';
import RevenueController from '../controllers/RevenueController';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const revenueData = await RevenueController.getRevenueData();
        res.json(revenueData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newRevenue = await RevenueController.addRevenueData(req.body);
        res.status(201).json(newRevenue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;