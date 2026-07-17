const express = require("express");
const { readData, writeData } = require("../utils/file");

const router = express.Router();

// Create a new job application
router.post("/", (req, res) => {
    const {
        company,
        position,
        status,
        appliedDate
    } = req.body;

    if (!company || !position || !status || !appliedDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

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
});

// Retrieve all job applications
router.get("/", (req, res) => {
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
});

// Retrieve a specific job application by ID
router.get("/:id", (req, res) => {
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
});

// Update an existing job application by ID
router.put("/:id", (req, res) => {
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

    if (!company || !position || !status || !appliedDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

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
});

// Delete a job application by ID
router.delete("/:id", (req, res) => {
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
});

module.exports = router;