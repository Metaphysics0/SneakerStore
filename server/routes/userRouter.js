const express = require('express');
const router = express.Router();

const { logoutUser, addUser, loginUser, getUserById } = require('../controllers/userCtrl');

// router.get('/', test);

router.post('/signup', addUser);

router.post('/login', loginUser);

// all routes below protected to authenticated user
router.post('/logout', logoutUser);

// router.get('/:id', auth, getUserById);
router.get('/:id', getUserById);

// router.put('/:id', auth, updateUser);

module.exports = router;
