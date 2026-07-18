// Middleware to validate AI generation data
const validateAIGeneration = (req, res, next) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    next();
};

// Middleware for validating AI Summary
const validateSummary = (req, res, next) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    next();
};

// Middleware for validating AI Rewrite
const validateRewrite = (req, res, next) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({   
            success: false,
            message: "Text is required."
        });
    }

    next();
};

// Middleware for validating AI Prompt
const validatePrompt = (req, res, next) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    next();
};

module.exports = {
    validateAIGeneration,
    validateSummary,
    validateRewrite,
    validatePrompt
};