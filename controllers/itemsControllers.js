const { readData, writeData } = require("../models/database");

// Add a new item to a section
const addItem = (req, res) => {
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
};

// Retrieve all items in a specific section
const getItems = (req, res) => {
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
};

// Update a specific item in a section
const updateItem = (req, res) => {
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

    item.title = title;
    item.description = description;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Item updated successfully",
        item
    });
};

// Delete a specific item from a section
const deleteItem = (req, res) => {
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
};

module.exports = {
    addItem,
    getItems,
    updateItem,
    deleteItem
}