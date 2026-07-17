const express = require("express");

const router = express.Router();


// Endpoint to improve or format resume bullet points
router.post("/bullets", (req, res) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    return res.status(200).json({
        success: true,
        original: text,
        improved: text + " (improved)"
    });
});

// Endpoint to generate a professional summary based on provided text
router.post("/summary", (req, res) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    return res.status(200).json({
        success: true,
        summary: text + " (summary)"
    });
});

// Endpoint to rewrite given text for better clarity and tone
router.post("/rewrite", (req, res) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({   
            success: false,
            message: "Text is required."
        });
    }

    return res.status(200).json({
        success: true,
        original: text,
        rewritten: text + " (rewritten)"
    });
});

// Endpoint to handle generic AI prompts or queries

router.post("/prompt", (req, res) => {
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            success: false,
            message: "Text is required."
        });
    }

    return res.status(200).json({
        success: true,
        response: "AI Response: " + text
    });
});

module.exports = router;