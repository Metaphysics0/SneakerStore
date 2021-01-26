const express = require('express');
const router = express.Router();

const { addSneaker, getSneaker, getAllSneakers } = require('../controllers/sneakerCtrl');

//maybe to clear stuff up we will make a new js file for sneakerRouter
router.post('/addSneakerDB', addSneaker);

router.get('/get-sneaker/:id', getSneaker);

router.get('/get-sneakers', getAllSneakers);

module.exports = router;
