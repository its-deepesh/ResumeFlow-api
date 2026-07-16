// Import required modules
const express = require("express");
const { readData, writeData } = require("../utils/file");

// Create a mini router for user-related routes
const router = express.Router();

router.post("/", (req, res) => {
    const jsonData = readData();

    const now = new Date().toISOString();

    const { title, template, content, createdBy } = req.body;

    if (!title || !template) {
        return res.status(400).json({
            success: false,
            message: "Title and template are required."
        });
    }

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
});

router.get("/", (req, res) => {
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
});

router.get("/:id", (req, res) => {
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
});

router.put("/:id", (req, res) => {
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


    if (!title || !template) {
        return res.status(400).json({
            success: false,
            message: "Title and template are required."
        });
    }

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
});

router.delete("/:id", (req, res) => {
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
});

// Export router so it can be used in app.js
module.exports = router;