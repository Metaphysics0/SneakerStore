const { userMethods } = require('../database/userDB');
class user {
  constructor() {
    this.db = new userMethods();
  }
  getById = (id) => {
    return this.db.get(id);
  };
  getByEmail = (email) => {
    return this.db.getByEmail(email);
  };
  add = (user) => {
    return this.db.add(user);
  };
  updateProfile = (id, updatedInfo) => {
    return this.db.updateProfile(id, updatedInfo);
  };
  updateSneaker = (id , sneakerObj) => {
    return this.db.updateSneaker(id , sneakerObj);
  }
}

module.exports = new user();
