import express from 'express';
import resourceRoutes from './routes/resourceRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', resourceRoutes);

export default app;
