import { Request, Response } from 'express';
import { Sales } from '../models/Sales';

export class SalesController {
    public static async getSales(req: Request, res: Response): Promise<void> {
        try {
            const sales = await Sales.find();
            res.status(200).json({ sales });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public static async addSale(req: Request, res: Response): Promise<void> {
        try {
            const sale = new Sales(req.body);
            await sale.save();
            res.status(201).json({ sale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public static async updateSale(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const sale = await Sales.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({ sale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public static async deleteSale(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const sale = await Sales.findByIdAndDelete(id);
            res.status(200).json({ sale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}