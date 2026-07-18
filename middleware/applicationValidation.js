// Middleware for validating Application Routes
const validateAddApplication = (req, res, next) => {
    const {
        company,
        position,
        status,
        appliedDate
    } = req.body;

    if (!company || !position || !status || !appliedDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    next();
};

// Middleware for validating update application database
const validateUpdateApplication = (req, res, next) => {
    const {
        company,
        position,
        status,
        appliedDate
    } = req.body;

    if (!company || !position || !status || !appliedDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }   

    next();
};

module.exports = {
    validateAddApplication,
    validateUpdateApplication
};