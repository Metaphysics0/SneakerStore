const express = require('express');
const router = express.Router();
const multer = require('multer');
const { logoutUser, addUser, loginUser, getUserById, updateProfilePicture } = require('../controllers/userCtrl');
const { updateProfile } = require('../services/userService');

// router.get('/', test);

router.post('/signup', addUser);

router.post('/login', loginUser);

// all routes below protected to authenticated user
router.post('/logout', logoutUser);

// router.get('/:id', auth, getUserById);
router.get('/:id', getUserById);

// router.put('/:id', auth, updateUser);

const storage = multer.diskStorage({});
const upload = multer({ storage });
router.post('/profilePicture', upload.single('file'), updateProfilePicture)

module.exports = router;
