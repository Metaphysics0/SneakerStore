const express = require('express');
const multer = require('multer');
const router = express.Router();

const { user, updateUser } = require('../controllers/user');
const { addSneaker } = require('../controllers/sneaker');
const { auth, requiresAuth } = require('express-openid-connect');
const { register, profile } = require('../controllers/auth');

// sneaker routes
const storage = multer.diskStorage({});
const upload = multer({storage});
router.post('/uploadSneaker',upload.single('file') ,addSneaker);

// user routes
router.put('/update-user/:id', updateUser);
router.get('/', register)
router.get('/profile', requiresAuth(), profile)


module.exports = router