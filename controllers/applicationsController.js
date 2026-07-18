const { readData, writeData } = require("../models/database");

// Create a new application
const createApplication = (req, res) => {
    const {
        company,
        position,
        status,
        appliedDate
    } = req.body;

    const newApplication = {
        id: Date.now(),
        company,
        position,
        status,
        appliedDate,
    };

    const jsonData = readData();

    jsonData.applications.push(newApplication);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Application createdAt successfully",
        application: newApplication
    });
};

// Get all applications
const getAllApplication = (req, res) => {
    const jsonData = readData();

    const applications = jsonData.applications;

    if (applications.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No applications found."
        });
    }

    return res.status(200).json({
        success: true,
        applications
    });
};

// Get an application by ID
const getApplicationById = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const application = jsonData.applications.find(
        application => application.id === id
    );

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found."
        });
    }

    return res.status(200).json({
        success: true,
        application
    });
};

// Update an application by ID
const updateApplication = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const application = jsonData.applications.find(
        application => application.id === id
    );

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found."
        });
    }

    const {
        company,
        position,
        status,
        appliedDate
    } = req.body;

    application.company = company;
    application.position = position;
    application.status = status;
    application.appliedDate = appliedDate;

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Application updated successfully",
        application
    });
};

// Delete an application by ID
const deleteApplication = (req, res) => {
    const jsonData = readData();

    const id = Number(req.params.id);

    const application = jsonData.applications.find(
        application => application.id === id
    );

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found."
        });
    }

    jsonData.applications = jsonData.applications.filter(
        application => application.id !== id
    );

    writeData(jsonData);

    return res.status(200).json({
        success: true,
        message: "Application deleted successfully"
    });
};

// Export all the functions
module.exports = {
    createApplication,
    getAllApplication,
    getApplicationById,
    updateApplication,
    deleteApplication
};