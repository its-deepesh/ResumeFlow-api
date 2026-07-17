const { readData, writeData } = require("../utils/file");
const express = require("express");

const router = express.Router();

// POST /register - Register a new user
router.post("/register", (req, res) => {

    // Read existing data from data.json
    const jsonData = readData();

    // Extract user details from request body
    const { name, email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = jsonData.users.find(
        user => user.email === email
    );

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

    // Create a new user object
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    // Add the new user to the users array
    jsonData.users.push(newUser);

    // Save the updated users array to data.json
    writeData(jsonData);

    // Return success response
    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser
    });
});


// POST /login - Authenticate an existing user
router.post("/login", (req, res) => {

    // Extract login credentials from request body
    const { email, password } = req.body;

    // Read existing users from data.json
    const jsonData = readData();

    // Find the user using the provided email
    const user = jsonData.users.find(
        user => user.email === email
    );

    // Validate email and password
    if (!user || user.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }

    // Return success response with a mock authentication token
    return res.status(200).json({
        success: true,
        message: "Login successful.",
        token: "mock-jwt-token-12345",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

// POST /logout - Logout the current user
router.post("/logout", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Logout successful"
    });
});

// POST /forgot-password - Send a password reset link to the user
router.post("/forgot-password", (req, res) => {
    const jsonData = readData();

    const { email } = req.body;

    const user = jsonData.users.find(
        user => user.email === email
    );

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Email not found"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Password reset link sent successfully"
    });
})

// POST /reset-password - Reset the user's password using the provided details
router.post("/reset-password", (req, res) => {
    const jsonData = readData();

    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    const user = jsonData.users.find(
        user => user.email === email
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    user.password = newPassword;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Password reset successfully"
    });
});

// Export router so it can be used in app.js
module.exports = router;