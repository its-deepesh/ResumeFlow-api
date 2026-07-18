const { readData, writeData } = require("../models/database");

const register = (req, res) => {
    const jsonData = readData();

    const { name, email, password } = req.body;

    const existingUser = jsonData.users.find(
        user => user.email === email
    );

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    jsonData.users.push(newUser);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser
    });
};

const login = (req, res) => {
    const jsonData = readData();

    const { email, password } = req.body;

    const user = jsonData.users.find(
        user => user.email === email
    );
    if (!user || user.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }

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
};

const logout = (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Logout successful"
    });
};

const forgotPassword = (req, res) => {
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
};

const resetPassword = (req, res) => {
    const jsonData = readData();

    const { email, newPassword } = req.body;

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
};

module.exports = {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
};