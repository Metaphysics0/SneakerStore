const User = require('../models/User');
const bcrypt = require('bcrypt');

// Get current user profile
exports.user = async (req, res) => {
  try {
    const profile = await User.find({ email: req.params.id });
    res.status(200).json({ success: profile });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


// Updating users, deleting etc..


