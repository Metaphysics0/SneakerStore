const express = require('express');
const multer = require('multer');
const router = express.Router();

const { user, signup } = require('../controllers/user');
const { addSneaker } = require('../controllers/sneaker');

// user routes
router.get('/user/:id', user);

router.post('/signup', signup);

const storage = multer.diskStorage({});
const upload = multer({storage});

router.post('/uploadSneaker',upload.single('file') ,addSneaker);

module.exports = router;
