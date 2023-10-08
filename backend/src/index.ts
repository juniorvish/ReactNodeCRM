import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import salesRoutes from './routes/sales';
import revenueRoutes from './routes/revenue';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/sales', salesRoutes);
app.use('/revenue', revenueRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});