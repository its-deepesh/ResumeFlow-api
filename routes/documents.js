// Import required modules
const express = require("express");
const { readData, writeData } = require("../utils/file");

// Create a mini router for user-related routes
const router = express.Router();

// Create a new document
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

// Retrieve all documents
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

// Retrieve a specific document by ID
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

// Update an existing document by ID
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

// Delete a document by ID
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

// Import a new document
router.post("/import", (req, res) => {
    const jsonData = readData();

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
});

// Duplicate an existing document
router.post("/:id/duplicate", (req, res) => {
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
});

// Add a new section to a document
router.post("/:id/sections", (req, res) => {
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

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Section name is required."
        });
    }

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
});

// Retrieve all sections of a document
router.get("/:id/sections", (req, res) => {
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
});

// Update a specific section in a document
router.put("/:id/sections/:sectionId", (req, res) => {
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

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Section name is required."
        });
    }

    section.name = name;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Section updated successfully",
        section
    });
});

// Delete a specific section from a document
router.delete("/:id/sections/:sectionId", (req, res) => {
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
});

// Add a new item to a section
router.post("/:id/sections/:sectionId/items", (req, res) => {
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

    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required."
        });
    }

    const newItem = {
        id: Date.now(),
        title,
        description
    };

    if (!section.items) {
        section.items = [];
    }

    section.items.push(newItem);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Item added successfully",
        item: newItem
    });
});

// Retrieve all items in a specific section
router.get("/:id/sections/:sectionId/items", (req, res) => {
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

    return res.status(200).json({
        success: true,
        items: section.items
    });
});

// Update a specific item in a section
router.put("/:id/sections/:sectionId/items/:itemId", (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const sectionId = Number(req.params.sectionId);
    const itemId = Number(req.params.itemId);

    const document = jsonData.documents.find(
        document => document.id === documentId
    )

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

    const item = section.items.find(
        item => item.id === itemId
    );

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required."
        });
    }

    item.title = title;
    item.description = description;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Item updated successfully",
        item
    });
});

// Delete a specific item from a section
router.delete("/:id/sections/:sectionId/items/:itemId", (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const sectionId = Number(req.params.sectionId);
    const itemId = Number(req.params.itemId);

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

    const item = section.items.find(
        item => item.id === itemId
    );

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    section.items = section.items.filter(
        item => item.id !== itemId
    );

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Item deleted successfully"
    });
});

// Create a new version/snapshot of a document
router.post("/:id/versions", (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    if (!document.versions) {
        document.versions = [];
    }

    const newVersion = {
        id: Date.now(),
        versionNumber: document.versions.length + 1,
        createdAt: new Date().toISOString(),
        snapshot: {
            title: document.title,
            template: document.template,
            content: document.content,
            sections: JSON.parse(JSON.stringify(document.sections))
        }
    };

    document.versions.push(newVersion);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Version created successfully",
        version: newVersion
    });
});

// Retrieve all versions of a document
router.get("/:id/versions", (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    return res.status(200).json({
        success: true,
        versions: document.versions
    });
});

// Retrieve a specific version of a document
router.get("/:id/versions/:versionId", (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const versionId = Number(req.params.versionId);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const version = document.versions.find(
        version => version.id === versionId
    );

    if (!version) {
        return res.status(404).json({
            success: false,
            message: "Version not found"
        });
    }

    return res.status(200).json({
        success: true,
        version: version
    });
});

// Export router so it can be used in app.js
module.exports = router;