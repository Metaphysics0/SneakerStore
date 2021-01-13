const express = require('express');
const router = express.Router();

const { user } = require('../controllers/user');

// user routes
router.get('/user/:id', user);
