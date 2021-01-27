const Sneaker = require('../services/sneakerService');
const sneaker = require('../models/sneaker');
const sneakerDB = require('../database/sneakerDB');

const addSneaker = async (req, res) => {
  const newSneaker = req.body;
  try {
    const newSkrDB = await Sneaker.add(newSneaker);
    return res.status(201).json({ id: newSkrDB._id, success: newSkrDB });
  } catch (e) {
    // return res.send({ error: errorsArray(e) });
    return res.send(e);
  }
};

const getSneaker = async (req, res) => {
  try {
    const sneakerDB = await Sneaker.getById(req.params.id);
    return res.status(201).json(sneakerDB);
  } catch (e) {
    return res.send(e);
  }
};

const getAllSneakers = async (req, res) => {
  try {
    const response = await Sneaker.getAll();
    return res.status(201).json(response);
  } catch (e) {
    return res.send(2);
  }
};

module.exports = {
  addSneaker,
  getSneaker,
  getAllSneakers,
};
