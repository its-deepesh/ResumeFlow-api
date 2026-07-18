// Middleware for validating adding items data
const validateAddItem = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required."
        });
    }

    next();
};

// Middleware for validating updating items data
const validateUpdateItem = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required."
        });
    }

    next();
};

module.exports = {
    validateAddItem,
    validateUpdateItem
};