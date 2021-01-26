const { ObjectId } = require('mongodb');
const Sneaker = require('../models/sneaker')

class sneakerMethods {
  async get(id) {
    try {
      const sneaker = await Sneaker.findOne({ id: id });
      return sneaker;
    } catch (e) {
      return { error: "Sneaker doesn't exist" };
    }
  }

  async add(sneaker) {
    const sneakerDB = await Sneaker.create({ ...sneaker });
    return sneakerDB;
  }
}

module.exports = { sneakerMethods };