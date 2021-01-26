const Sneaker = require('../services/sneakerService');
const sneaker = require('../models/sneaker');
const sneakerDB = require('../database/sneakerDB');

const addSneaker = async (req, res) => {
    const newSneaker = req.body;
    try {
        const newSkrDB = await Sneaker.add(newSneaker);
        res.status(201).json({ id: newSkrDB._id, success: newSkrDB });
      } catch (e) {
        // return res.send({ error: errorsArray(e) });
         return res.send(e);
      }
};


const getSneaker = async (req, res) => {
    const sneakerDB = await Sneaker.getById(req.params.id);
    // if (!userDB || userDB.error) {
    //   return res.send(errors.incorrectID);
    // }
    res.json(sneakerDB);
  };
  

module.exports ={
    addSneaker,
    getSneaker
}