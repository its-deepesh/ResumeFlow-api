const { readData } = require("../models/database");

// Retrieve all templates
const getAllTemplates = (req, res) => {
    const jsonData = readData();

    const templates = jsonData.templates;

    if (templates.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No templates found."
        });
    }

    return res.status(200).json({
        success: true,
        templates
    });
};

// Retrieve a specific template by id
const getTemplateById = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const template = jsonData.templates.find(
        template => template.id === id
    );

    if(!template){
        return res.status(404).json({
            success: false,
            message: "Template not found."
        });
    }

    return res.status(200).json({
        success: true,
        template
    });
};

module.exports = {
    getAllTemplates,
    getTemplateById
};