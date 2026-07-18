const { readData, writeData } = require("../models/database");

// Create a new version/snapshot of a document
const createVersion = (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    if (!document.versions) {
        document.versions = [];
    }

    const newVersion = {
        id: Date.now(),
        versionNumber: document.versions.length + 1,
        createdAt: new Date().toISOString(),
        snapshot: {
            title: document.title,
            template: document.template,
            content: document.content,
            sections: JSON.parse(JSON.stringify(document.sections))
        }
    };

    document.versions.push(newVersion);

    writeData(jsonData);

    return res.status(201).json({
        success: true,
        message: "Version created successfully",
        version: newVersion
    });
};

// Retrieve all versions of a document
const getVersions = (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    return res.status(200).json({
        success: true,
        versions: document.versions
    });
};

// Retrieve a specific version of a document
const getVersionById = (req, res) => {
    const jsonData = readData();

    const documentId = Number(req.params.id);
    const versionId = Number(req.params.versionId);

    const document = jsonData.documents.find(
        document => document.id === documentId
    );

    if (!document) {
        return res.status(404).json({
            success: false,
            message: "Document not found"
        });
    }

    const version = document.versions.find(
        version => version.id === versionId
    );

    if (!version) {
        return res.status(404).json({
            success: false,
            message: "Version not found"
        });
    }

    return res.status(200).json({
        success: true,
        version: version
    });
};

module.exports = {
    createVersion,
    getVersions,
    getVersionById
}