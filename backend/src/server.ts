import express from 'express';
import cors from 'cors';
import salesRoutes from './routes/sales';
import revenueRoutes from './routes/revenue';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/sales', salesRoutes);
app.use('/revenue', revenueRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});