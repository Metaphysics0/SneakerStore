const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const router = express.Router();

const { user } = require('../controllers/user');
const { register } = require('../controllers/auth');
const { profile } = require('../controllers/auth');

// user routes
router.get('/user/:id', user);
router.get('/', register)
router.get('/profile', requiresAuth, profile)

module.exports = router