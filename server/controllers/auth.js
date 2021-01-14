
const { auth, requiresAuth } = require('express-openid-connect');

// req.isAuthenticated is provided from the auth router
exports.register = (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
};


exports.profile = (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
};