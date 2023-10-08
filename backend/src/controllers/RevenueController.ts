import { Request, Response } from 'express';
import Revenue from '../models/Revenue';

class RevenueController {
  static async getRevenue(req: Request, res: Response) {
    try {
      const revenue = await Revenue.find();
      res.status(200).json({ revenue });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addRevenue(req: Request, res: Response) {
    try {
      const revenue = new Revenue(req.body);
      await revenue.save();
      res.status(201).json({ revenue });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateRevenue(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const revenue = await Revenue.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ revenue });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteRevenue(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Revenue.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Revenue deleted");
      }
      throw new Error("Revenue not found");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default RevenueController;