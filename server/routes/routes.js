const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const router = express.Router();

const { user, updateUser } = require('../controllers/user');
const { register, profile } = require('../controllers/auth');

// user routes
router.put('/update-user/:id', updateUser);
router.get('/', register)
router.get('/profile', requiresAuth(), profile)

module.exports = router