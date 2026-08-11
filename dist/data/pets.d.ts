export type Pet = {
    id: number;
    name: string;
    species: string;
    adopted: boolean;
    age: number;
    intakeDate: Date;
    adoptionDate?: Date;
    medicalRecord: {
        vaccination: string[];
        weight: number;
        microchipId: null | string;
    };
    photo: string;
};
export declare const pets: Pet[];
//# sourceMappingURL=pets.d.ts.map