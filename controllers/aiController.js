// AI bullets
const bullets = (req, res) => {
    const { text } = req.body;

    return res.status(200).json({
        success: true,
        original: text,
        improved: text + " (improved)"
    });
};

// AI summary
const summary = (req, res) => {
    const { text } = req.body;

    return res.status(200).json({
        success: true,
        summary: text + " (summary)"
    });
};

// AI rewrite
const rewrite = (req, res) => {
    const { text } = req.body;

    return res.status(200).json({
        success: true,
        original: text,
        rewritten: text + " (rewritten)"
    });
};

// AI prompt
const prompt = (req, res) => {
    const { text } = req.body;

    return res.status(200).json({
        success: true,
        response: "AI Response: " + text
    });
};

// Export all the functions
module.exports = {
    bullets,
    summary,
    rewrite,
    prompt
};