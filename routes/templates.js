const express = require("express");
const { getAllTemplates, getTemplateById } = require("../controllers/templatesController");

const router = express.Router();

// Retrieve all resume templates
router.get("/", getAllTemplates);

// Retrieve a specific resume template by ID
router.get("/:id", getTemplateById);

module.exports = router;