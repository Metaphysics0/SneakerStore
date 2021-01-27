const { sneakerMethods } = require('../database/sneakerDB');
class sneaker {
  constructor() {
    this.db = new sneakerMethods();
  }
  getById = (id) => {
    return this.db.get(id);
  };
  add = (sneaker) => {
    return this.db.add(sneaker);
  };
  getAll = () => {
    return this.db.getAll();
  };
}

module.exports = new sneaker();
