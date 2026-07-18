// Middleware to validate user data
const validateUser = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    next();
};

// Middleware to validate login data
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    next();
};

// Middleware to validate forgot password data
const validateForgotPassword = (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    next();
};

// Middleware to validate reset password data
const validateResetPassword = (req, res, next) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    next();
};

module.exports = {
    validateUser,
    validateLogin,
    validateForgotPassword,
    validateResetPassword
};