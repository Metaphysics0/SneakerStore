const express = require('express');
const router = express.Router();

const { addSneaker, getSneaker } = require('../controllers/sneakerCtrl');

//maybe to clear stuff up we will make a new js file for sneakerRouter
router.post('/addSneakerDB', addSneaker);

router.get('/getSneakerById/:id', getSneaker)

module.exports = router;
