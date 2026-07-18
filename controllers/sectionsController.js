const { readData, writeData } = require("../models/database");

// Add a new section to a document
const addSection = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === id
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const { name } = req.body;

    const newSection = {
        id: Date.now(),
        name,
        items: []
    };

    if (!document.sections) {
        document.sections = [];
    }

    document.sections.push(newSection);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Section added successfully",
        section: newSection
    });
};

// Retrieve all sections of a document
const getSections = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === id
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    return res.status(200).json({
        success: true,
        sections: document.sections
    });
};

// Update a specific section in a document
const updateSection = (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const sectionId = Number(req.params.sectionId);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const section = document.sections.find(
        section => section.id === sectionId
    );

    if (!section) {
        return res.status(404).json({
            success: false,
            message: "Section not found"
        });
    }

    const { name } = req.body;

    section.name = name;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Section updated successfully",
        section
    });
};

// Delete a specific section from a document
const deleteSection = (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const sectionId = Number(req.params.sectionId);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const section = document.sections.find(
        section => section.id === sectionId
    );

    if (!section) {
        return res.status(404).json({
            success: false,
            message: "Section not found"
        });
    }

    document.sections = document.sections.filter(
        section => section.id !== sectionId
    );

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Section deleted successfully"
    });
};

module.exports = {
    addSection,
    getSections,
    updateSection,
    deleteSection
};