// Import the Express framework
const express = require('express');

// Import application routes
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const documentsRoute = require('./routes/documents');
const templatesRoute = require('./routes/templates');
const aiRoute = require('./routes/ai');
const applicationRoute = require('./routes/application');

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
app.use("/api/templates", templatesRoute);
app.use("/api/ai", aiRoute);
app.use("/api/application", applicationRoute);

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