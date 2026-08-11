import express from 'express';
import { getPets, getPetById } from '../controllers/petscontrollers.js';
import { validatePetNumber } from '../middleware/petsmiddleware.js';
export const petRouter = express.Router();
petRouter.get('/', getPets);
petRouter.get('/:id', validatePetNumber, getPetById);
//# sourceMappingURL=petsroutes.js.map