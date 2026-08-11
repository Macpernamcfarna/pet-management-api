import type {Request, Response, NextFunction} from 'express';

export const validatePetNumber = (
    req: Request<{ id: string }>, res: Response<{ message: string }>, next: NextFunction): void => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        res.status(400).json({ message: "Invalid pet ID 🥲 (Our system did a sniff test and couldn't find this good boy/girl!)" });
        return;
    }
    next();
};