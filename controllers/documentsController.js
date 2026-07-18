const { readData, writeData } = require("../models/database");

// Create a new document
const createDocument = (req, res) => {
    const jsonData = readData();

    const now = new Date().toISOString();

    const { title, template, content, createdBy } = req.body;

    const newDocument = {
        id: Date.now(),
        title,
        template,
        content,
        createdBy,
        createdAt: now,
        updatedAt: now
    }

    jsonData.documents.push(newDocument);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Document created successfully",
        document: newDocument
    });
};

// Get all documents
const getAllDocuments = (req, res) => {
    const jsonData = readData();

    const document = jsonData.documents;

    if (document.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No documents found"
        });
    }

    return res.status(200).json({
        success: true,
        documents: jsonData.documents
    });
};

// Get a document by ID
const getDocumentById = (req, res) => {
    const id = Number(req.params.id);

    const jsonData = readData();

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
        document
    });
};

// Update a document by ID
const updateDocument = (req, res) => {
    const id = Number(req.params.id);

    const jsonData = readData();

    const document = jsonData.documents.find(
        document => document.id === id
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const { title, template, content } = req.body;

    document.title = title;
    document.template = template;
    document.content = content;
    document.updatedAt = new Date().toISOString();

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Document updated successfully",
        document
    });
};

// Delete a document by ID
const deleteDocument = (req, res) => {
    const id = Number(req.params.id);

    const jsonData = readData();

    const document = jsonData.documents.find(
        document => document.id === id
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    jsonData.documents = jsonData.documents.filter(
        document => document.id !== id
    );

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Document deleted successfully"
    });
};

// Import a new document
const importDocument = (req, res) => {
    const jsonData = readData();

    const { title, template, content, createdBy } = req.body;

    const newDocument = {
        id: Date.now(),
        title,
        template,
        content,
        createdBy,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    jsonData.documents.push(newDocument);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Document imported successfully",
        document: newDocument
    });
};

// Duplicate a document by ID
const duplicateDocument = (req, res) => {
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

    const duplicateDocument = {
        id: Date.now(),
        title: document.title + " (Copy)",
        template: document.template,
        content: document.content,
        createdBy: document.createdBy,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    jsonData.documents.push(duplicateDocument);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Document duplicated successfully",
        document: duplicateDocument
    });
};

// Export all the functions
module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    importDocument,
    duplicateDocument,
};