// Import required modules
const express = require("express");

// Import validation middleware
const { validateUpdateProfile } = require("../middleware/usersValidation");

// Import controller functions
const {
    getProfile,
    getProfileById,
    updateProfile,
    deleteProfile
} = require("../controllers/usersController");

// Create a mini router for user-related routes
const router = express.Router();

// GET /profile - Get the profile of the first user (Public)
router.get("/profile", getProfile);

// GET /profile/:id - Get a user profile by ID
router.get("/profile/:id", getProfileById)

// PUT /profile/:id - Update a user's profile
router.put("/profile/:id", validateUpdateProfile, updateProfile);

// DELETE /profile/:id - Delete a user profile
router.delete("/profile/:id", deleteProfile);

// Export router so it can be used in app.js
module.exports = router;