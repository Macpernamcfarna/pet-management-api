import { pets } from '../data/pets.js';
export const getPets = (req, res) => {
    const { species, adopted, minAge, maxAge } = req.query;
    let filteredPets = pets;
    if (species) {
        filteredPets = filteredPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());
    }
    if (adopted !== undefined) {
        const isAdopted = adopted === 'true';
        filteredPets = filteredPets.filter((pet) => pet.adopted === isAdopted);
    }
    if (minAge !== undefined) {
        const minAgeValue = Number(minAge);
        filteredPets = filteredPets.filter((pet) => pet.age >= minAgeValue);
    }
    if (maxAge !== undefined) {
        const maxAgeValue = Number(maxAge);
        filteredPets = filteredPets.filter((pet) => pet.age <= maxAgeValue);
    }
    res.json(filteredPets);
};
export const getPetById = (req, res) => {
    const { id } = req.params;
    const pet = pets.find((pet) => pet.id.toString() === id);
    if (!pet) {
        res.status(404).json({ message: 'Pet not found🥲' });
        return;
    }
    res.json(pet);
};
//# sourceMappingURL=petscontrollers.js.map