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

  async delete(sneakerObj) {
    try {
        const sneaker = await Sneaker.deleteOne({ id: sneakerObj.id });
        return {message: "Sneaker sold" , sneaker};
      } catch (e) {
        return { error: "Sneaker could not be deleted" };
    }
  }
}

module.exports = { sneakerMethods };