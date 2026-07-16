// Import the Express framework
const express = require('express');

// Import application routes
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const documentsRoute = require('./routes/documents');

// Create an Express application
const app = express();

// Server port
const PORT = 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Register application routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/documents", documentsRoute);

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