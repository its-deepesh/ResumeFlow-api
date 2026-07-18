const express = require("express");

// Import middleware
const {
    validateUser,
    validateLogin,
    validateForgotPassword,
    validateResetPassword
} = require("../middleware/authValidation");

// Import controller functions
const {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
} = require("../controllers/authController");

const router = express.Router();

// POST /register - Register a new users
router.post("/register", validateUser, register);

// POST /login - Authenticate an existing user
router.post("/login", validateLogin, login);

// POST /logout - Logout the current user
router.post("/logout", logout);

// POST /forgot-password - Send a password reset link to the user
router.post("/forgot-password", validateForgotPassword, forgotPassword);

// POST /reset-password - Reset the user's password using the provided details
router.post("/reset-password", validateResetPassword, resetPassword);

// Export router so it can be used in app.js
module.exports = router;