const User = require('../services/userService');
const { hashPassword, comparePasswords, createToken } = require('../utils/helper');
const { errors, errorsArray } = require('../utils/error');
const cloudinary = require('../utils/cloudinary');

const test = async (req, res) => {
  console.log(req.cookies.token);
  res.send('pass test');
};

const addUser = async (req, res) => {
  const NewUser = req.body.user;
  if (!NewUser) {
    return res.send(errors.missingParams);
  }
  if (await User.getByEmail(NewUser.email)) {
    return res.send(errors.emailExist);
  }
  try {
    const hashedPassword = await hashPassword(NewUser.password);
    NewUser.password = hashedPassword;
    const addedUser = await User.add(NewUser);
    res.status(201).json({ id: addedUser._id, success: addedUser });
  } catch (e) {
    return res.send({ error: errorsArray(e) });
  }
};

const loginUser = async (req, res) => {
  const user = req.body.user;
  if (!user || !user.email || !user.password) {
    return res.send(errors.missingParams);
  }
  const userDB = await User.getByEmail(user.email);
  if (!userDB) {
    return res.send(errors.incorrectLoginParams);
  }
  try {
    const isEqual = await comparePasswords(user.password, userDB.password);
    if (!isEqual) {
      return res.send(errors.incorrectLoginParams);
    }
    const token = createToken(userDB._id);
    res.cookie('token', token, {
      maxAge: 24 * 60 * 60 * 100,
      httpOnly: true,
    });
  } catch (e) {
    console.log(e);
    return res.send({ error: errorsArray(e) });
  }
  res.json({ id: userDB._id, role: userDB.role });
};

const getUserById = async (req, res) => {
  const userDB = await User.getById(req.params.id);
  if (!userDB || userDB.error) {
    return res.send(errors.incorrectID);
  }
  const user = {
    name: userDB.name,
    savedSneakers: userDB.savedSneakers,
    email: userDB.email,
    purchasedSneakers: userDB.sellingSneakers,
    sellingSneakers: userDB.sellingSneakers,
    profilePicture: userDB.profilePicture,
    reviews: userDB.reviews,
    rating: userDB.rating, 
    totalSales: userDB.totalSales,

  };
  res.json(user);
};

const updateUser = async (req, res) => {
  const infoToUpdate = req.body;
  const id = req.params.id;
  try {
    if (infoToUpdate.password) {
      const hasedPassword = await hashPassword(infoToUpdate.password);
      infoToUpdate.password = hasedPassword;
    }
    const updatedUser = await User.updateProfile(id, infoToUpdate);
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (e) {
    return res.send({ error: errorsArray(e) });
  }
};

const updateProfilePicture = async (req, res) => {
  let result = await handleCloudUpload(req.file.path);
  // these are the two things we need to do inside the userDoc
  // avatar: result.secure_url,
  // cloudinary_id: result.public_id,
  let userDoc = await User.profilePictureUpdate(req.body.email, result.secure_url, result.public_id);
  console.log(userDoc);
  res.send("in works")
}


//we can maybe put this function in utils/cloudinary
const handleCloudUpload = async (filePath) => {
  try {
    let result = await cloudinary.uploader.upload(filePath);
    return result;
  }
  catch (err) {
    console.log(err.stack);
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie('token');
  res.send('deleted token');
};

module.exports = {
  test,
  addUser,
  loginUser,
  getUserById,
  updateUser,
  logoutUser,
  updateProfilePicture
};
