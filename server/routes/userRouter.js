const express = require('express');
const router = express.Router();

const { logoutUser, addUser, loginUser, getUserById, uploadSneaker } = require('../controllers/userCtrl');

// router.get('/', test);

router.post('/signup', addUser);

router.post('/login', loginUser);

// all routes below protected to authenticated user
router.post('/logout', logoutUser);

// router.get('/:id', auth, getUserById);
router.get('/:id', getUserById);

//maybe to clear stuff up we will make a new js file for sneakerRouter
router.post('/uploadSneaker', uploadSneaker)

// router.put('/:id', auth, updateUser);

module.exports = router;
