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

exports.signup = async ( req, res) => {
  const {email, firstName, lastName, password, phone} = req.body;
  // checkIfUserExists may be unnecessary with Auth0
  const userExists = await checkIfUserExists(email);
  if (userExists) {
    return res.send({message: "The email chosen is already taken!"});
  };
  // encripting password may be unnecessary with Auth0
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hashSync(password, salt);
  const newUser = new User({
    email,
    firstName, 
    lastName,
    phone,
    password: hashPassword
  })
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  }
  catch(err) {
    res.status(400).send({message: err});
  }
}

//check if user exists with email
async function checkIfUserExists(email) {
  try {
      const userDoc = await User.findOne({
          email: email
      });
      return userDoc != null; //if there is NOT a user it will return null thus return TRUE
  } catch (err) {
      console.log(err.stack)
  }
};

