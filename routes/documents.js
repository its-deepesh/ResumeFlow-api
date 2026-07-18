// Import required modules
const express = require("express");

// Import validation middleware
const {
    validateCreateDocument,
    validateUpdateDocument,
    validateImportDocument
} = require("../middleware/documentValidation");

// Import items validation middleware
const {
    validateAddItem,
    validateUpdateItem
} = require("../middleware/itemsValidation");

// Import sections validation middleware
const {
    validateAddSection,
    validateUpdateSection
} = require("../middleware/sectionsValidation");

// Import document controllers
const {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    importDocument,
    duplicateDocument
} = require("../controllers/documentsController");

// Import section controllers
const {
    addSection,
    getSections,
    updateSection,
    deleteSection
} = require("../controllers/sectionsController");

// Import item controllers
const {
    addItem,
    getItems,
    updateItem,
    deleteItem
} = require("../controllers/itemsControllers");

// Import version controllers
const {
    createVersion,
    getVersions,
    getVersionById
} = require("../controllers/versionsController");

// Create a mini router for user-related routes
const router = express.Router();

// Create a new document
router.post("/", validateCreateDocument, createDocument);

// Retrieve all documents
router.get("/", getAllDocuments);

// Retrieve a specific document by ID
router.get("/:id", getDocumentById);

// Update an existing document by ID
router.put("/:id", validateUpdateDocument, updateDocument);

// Delete a document by ID
router.delete("/:id", deleteDocument);

// Import a new document
router.post("/import", validateImportDocument, importDocument);

// Duplicate an existing document
router.post("/:id/duplicate", duplicateDocument);

// Add a new section to a document
router.post("/:id/sections", validateAddSection, addSection);

// Retrieve all sections of a document
router.get("/:id/sections", getSections);

// Update a specific section in a document
router.put("/:id/sections/:sectionId", validateUpdateSection, updateSection);

// Delete a specific section from a document
router.delete("/:id/sections/:sectionId", deleteSection);

// Add a new item to a section
router.post("/:id/sections/:sectionId/items", validateAddItem, addItem);

// Retrieve all items in a specific section
router.get("/:id/sections/:sectionId/items", getItems);

// Update a specific item in a section
router.put("/:id/sections/:sectionId/items/:itemId", validateUpdateItem, updateItem);

// Delete a specific item from a section
router.delete("/:id/sections/:sectionId/items/:itemId", deleteItem);

// Create a new version/snapshot of a document
router.post("/:id/versions", createVersion);

// Retrieve all versions of a document
router.get("/:id/versions", getVersions);

// Retrieve a specific version of a document
router.get("/:id/versions/:versionId", getVersionById);

// Export router so it can be used in app.js
module.exports = router;