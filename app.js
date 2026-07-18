// Import the Express framework
const express = require('express');

// Import logger middleware
const logger = require('./middleware/logger');

// Import all routes
const registerRoutes = require("./routes");

// Create an Express application
const app = express();

// Server port
const PORT = 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Use logger middleware before route registration
app.use(logger);

// Register application routes
registerRoutes(app);

// Health check / Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the ResumeFlow API'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});