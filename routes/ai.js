const express = require("express");

const router = express.Router();


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