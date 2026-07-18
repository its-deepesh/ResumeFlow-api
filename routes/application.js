const express = require("express");
const router = express.Router();

// Import Validation Middleware
const {
    validateAddApplication,
    validateUpdateApplication
} = require("../middleware/applicationValidation");

// Import Application Controllers
const {
    createApplication,
    getAllApplication,
    getApplicationById,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationsController");

// Create a new job application
router.post("/", validateAddApplication, createApplication);

// Retrieve all job applications
router.get("/", getAllApplication);

// Retrieve a specific job application by ID
router.get("/:id", getApplicationById);

// Update an existing job application by ID
router.put("/:id", validateUpdateApplication, updateApplication);

// Delete a job application by ID
router.delete("/:id", deleteApplication);

module.exports = router;