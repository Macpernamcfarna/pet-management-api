import express from 'express';
import cors from 'cors';
import { petRouter } from './routes/petsroutes.js';
import { validatePetNumber } from './middleware/petsmiddleware.js';
const PORT = 8000;
const app = express();
app.use(cors());
app.use('/pets/:id', validatePetNumber);
app.use('/pets', petRouter);
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map