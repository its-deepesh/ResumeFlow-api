// Import required modules
const express = require("express");
const { readData, writeData } = require("../utils/file");

// Create a mini router for user-related routes
const router = express.Router();

// GET /profile - Get the profile of the first user (Public)
router.get("/profile", (req, res) => {

    // Read users data from data.json
    const jsonData = readData();

    // Get the first user from the users array
    const user = jsonData.users[0];

    // Return an error if no user exists
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Return the user's profile
    return res.status(200).json({
        success: true,
        message: "Authentication successful",
        user
    });
});


// GET /profile/:id - Get a user profile by ID
router.get("/profile/:id", (req, res) => {

    // Read users data from data.json
    const jsonData = readData();

    // Find the user using the ID provided in the URL
    const user = jsonData.users.find(
        user => user.id === Number(req.params.id)
    );

    // Return an error if the user does not exist
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Return the requested user's profile
    return res.status(200).json({
        success: true,
        user
    });
});


// PUT /profile/:id - Update a user's profile
router.put("/profile/:id", (req, res) => {

    // Read users data from data.jsonData
    const jsonData = readData();

    // Find the user to update
    const user = jsonData.users.find(
        user => user.id === Number(req.params.id)
    );

    // Return an error if the user does not exist
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Extract updated user details from the request body
    const { name, email, password } = req.body;

    // Update the user's information
    user.name = name;
    user.email = email;
    user.password = password;

    // Save the updated users data
    writeData(jsonData);

    // Return the updated user details
    return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

// DELETE /profile/:id - Delete a user profile
router.delete("/profile/:id", (req, res) => {

    // Read users data from data.json
    const jsonData = readData();

    // Convert the route parameter into a number
    const id = Number(req.params.id);

    // Check whether the user exists
    const user = jsonData.users.find(
        user => user.id === id
    );

    // Return an error if the user does not exist
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Remove the matching user from the users array
    jsonData.users = jsonData.users.filter(
        user => user.id !== id
    );

    // Save the updated users data
    writeData(jsonData);

    // Return a success response
    return res.status(200).json({
        success: true,
        message: "Profile deleted successfully"
    });
});

// Export router so it can be used in app.js
module.exports = router;