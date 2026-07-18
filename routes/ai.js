const express = require("express");

// Import Validation Middleware
const {
    validateAIGeneration,
    validateSummary,
    validateRewrite,
    validatePrompt
} = require("../middleware/aiValidation");

// Import AI Controllers
const {
    bullets,
    summary,
    rewrite,
    prompt
} = require("../controllers/aiController");

const router = express.Router();

// Endpoint to improve or format resume bullet points
router.post("/bullets", validateAIGeneration, bullets);

// Endpoint to generate a professional summary based on provided text
router.post("/summary", validateSummary, summary);

// Endpoint to rewrite given text for better clarity and tone
router.post("/rewrite", validateRewrite, rewrite);

// Endpoint to handle generic AI prompts or queries
router.post("/prompt", validatePrompt, prompt);

module.exports = router;