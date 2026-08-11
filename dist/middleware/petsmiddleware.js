export const validatePetNumber = (req, res, next) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        res.status(400).json({ message: "Invalid pet ID 🥲 (Our system did a sniff test and couldn't find this good boy/girl!)" });
        return;
    }
    next();
};
//# sourceMappingURL=petsmiddleware.js.map