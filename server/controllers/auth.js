
const { auth, requiresAuth } = require('express-openid-connect');

exports.register = (req, res) => {
    try {
        res.send(req.oidc.isAuthenticated() ? 'Login' : 'LogOut')
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

exports.profile = (req, res) => {
    try {
        res.send(JSON.stringify(req.oidc.user))
    } catch (e) {
        res.status(500).json({ error: e });
    }
};