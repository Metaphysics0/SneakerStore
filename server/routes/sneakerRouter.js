const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const { addSneaker, getSneaker, purchasedSneaker } = require('../controllers/sneakerCtrl');
=======
const { addSneaker, getSneaker, getAllSneakers } = require('../controllers/sneakerCtrl');
>>>>>>> 10ec9d902303b0e17dc308df71b08a5a25b64dc0

//maybe to clear stuff up we will make a new js file for sneakerRouter
router.post('/addSneakerDB', addSneaker);

router.get('/get-sneaker/:id', getSneaker);

router.get('/get-sneakers', getAllSneakers);

router.post('/purchased-sneaker/:id', purchasedSneaker)

module.exports = router;
