// Middleware for validating adding sections data
const validateAddSection = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Section name is required."
        });
    }

    next();
};

// Middleware for validating updating sections data
const validateUpdateSection = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Section name is required."
        });
    }

    next();
};

module.exports = {
    validateAddSection,
    validateUpdateSection
};