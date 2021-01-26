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

//   updateSneaker = (id , sneakerObj) => {
//     return this.db.updateSneaker(id , sneakerObj);
//   }
}

module.exports = new sneaker();
