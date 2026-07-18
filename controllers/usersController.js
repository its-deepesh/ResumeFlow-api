const { readData, writeData } = require("../models/database");

// Get the profile of the first user (Public Route)
const getProfile = (req, res) => {
    const jsonData = readData();

    const user = jsonData.users[0];

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Authentication successful",
        user
    });
};

// Get a user profile by ID (Private Route)
const getProfileById = (req, res) => {
    const jsonData = readData();
    const user = jsonData.users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    return res.status(200).json({
        success: true,
        user
    });
};

// Update a user profile by ID (Private Route)
const updateProfile = (req, res) => {
    const jsonData = readData();

    const user = jsonData.users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, email, password } = req.body;

    user.name = name;
    user.email = email;
    user.password = password;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
};

// Delete a user profile by ID (Private Route)
const deleteProfile = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const user = jsonData.users.find(
        user => user.id === id
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    jsonData.users = jsonData.users.filter(
        user => user.id !== id
    );
    writeData(jsonData);
    return res.status(200).json({
        success: true,
        message: "Profile deleted successfully"
    });
};

module.exports = {
    getProfile,
    getProfileById,
    updateProfile,
    deleteProfile
};