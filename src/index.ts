import express from 'express';
import type { Express, Request, Response } from 'express';
import cors from 'cors';

import { petRouter } from './routes/petsroutes.js';
import { validatePetNumber } from './middleware/petsmiddleware.js';

const PORT = 8000;
const app: Express = express();
app.use(cors());

app.use('/pets/:id', validatePetNumber);
app.use('/pets', petRouter);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});