const cloudinary = require('../utils/cloudinary');// may use elsewhere
const Sneaker = require('../models/Sneaker');

exports.addSneaker = async ( req, res) => {
    const result = await handleUpload (req.file.path);
    const {productDescription, brand, askingPrice, availability} = req.body;
    const newSneaker = new Sneaker({
        picture: result.secure_url,
        cloudinary_id: result.public_id,
        brand, 
        productDescription,
        askingPrice,
        availability
    });
    try {
        const savedSneaker = await newSneaker.save();
        res.send(savedSneaker);
      }
      catch(err) {
        res.status(400).send({message: err});
      }
};

const handleUpload = async (req, res) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path);
        return result;
    }
    catch (err) {
        console.log(err.stack);
    }
};