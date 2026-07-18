// Middleware for validating create document data
const validateCreateDocument = (req, res, next) => {
    const { title, template } = req.body;

    if (!title || !template) {
        return res.status(400).json({
            success: false,
            message: "Title and template are required."
        });
    }

    next();
};

// Middleware for validating update document database
const validateUpdateDocument = (req, res, next) => {
    const { title, template } = req.body;

    if (!title || !template) {
        return res.status(400).json({
            success: false,
            message: "Title and template are required."
        });
    }

    next();
};

// Middleware for validating import document data
const validateImportDocument = (req, res, next) => {
    const { title, template } = req.body;

    if (!title || !template) {
        return res.status(400).json({
            success: false,
            message: "Title and template are required."
        });
    }

    next();
};

module.exports = {
    validateCreateDocument,
    validateUpdateDocument,
    validateImportDocument
};