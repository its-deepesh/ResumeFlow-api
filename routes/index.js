// Import application routes
const authRoute = require('./auth');
const usersRoute = require('./users');
const documentsRoute = require('./documents');
const templatesRoute = require('./templates');
const aiRoute = require('./ai');
const applicationRoute = require('./application');

const registerRoutes = (app) => {
    app.use("/api/auth", authRoute);
    app.use("/api/users", usersRoute);
    app.use("/api/documents", documentsRoute);
    app.use("/api/templates", templatesRoute);
    app.use("/api/ai", aiRoute);
    app.use("/api/application", applicationRoute);
}

module.exports = registerRoutes;