import type { Request, Response } from 'express';
import type { Pet } from '../data/pets.js';
import { pets } from '../data/pets.js';

type PetQueryParams = {
  species?: string;
  adopted?: string;
  minAge?: string;
  maxAge?: string;
};

export const getPets = (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[]>): void => {
  const { species, adopted, minAge, maxAge } = req.query;

  let filteredPets: Pet[] = pets;

  if (species) {
    filteredPets = filteredPets.filter((pet: Pet): boolean =>
      pet.species.toLowerCase() === species.toLowerCase()
    );
  }

  if (adopted !== undefined) {
    const isAdopted = adopted === 'true';
    filteredPets = filteredPets.filter((pet: Pet): boolean =>
      pet.adopted === isAdopted
    );
  }

  if (minAge !== undefined) {
    const minAgeValue = Number(minAge);
    filteredPets = filteredPets.filter((pet: Pet): boolean =>
      pet.age >= minAgeValue
    );
  }

  if (maxAge !== undefined) {
    const maxAgeValue = Number(maxAge);
    filteredPets = filteredPets.filter((pet: Pet): boolean =>
      pet.age <= maxAgeValue
    );
  }

  res.json(filteredPets);
}

export const getPetById = (req: Request<{ id: string }>, res: Response<Pet | { message: string }>): void => {
  const { id } = req.params;
  const pet = pets.find((pet) => pet.id.toString() === id);

  if (!pet) {
    res.status(404).json({ message: 'Pet not found🥲' });
    return;
  }

  res.json(pet);
}