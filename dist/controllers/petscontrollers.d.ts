import type { Request, Response } from 'express';
import type { Pet } from '../data/pets.js';
type PetQueryParams = {
    species?: string;
    adopted?: string;
    minAge?: string;
    maxAge?: string;
};
export declare const getPets: (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[]>) => void;
export declare const getPetById: (req: Request<{
    id: string;
}>, res: Response<Pet | {
    message: string;
}>) => void;
export {};
//# sourceMappingURL=petscontrollers.d.ts.map