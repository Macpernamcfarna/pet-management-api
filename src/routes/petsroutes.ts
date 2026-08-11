import express from 'express';
import type { Router } from 'express';

import { getPets, getPetById } from '../controllers/petscontrollers.js';

import { validatePetNumber } from '../middleware/petsmiddleware.js';

export const petRouter: Router = express.Router();


petRouter.get('/', getPets);

petRouter.get('/:id', validatePetNumber, getPetById);
