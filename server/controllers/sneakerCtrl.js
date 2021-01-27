const Sneaker = require('../services/sneakerService');
const User = require('../services/userService');

const addSneaker = async (req, res) => {
    const newSneaker = req.body;
    try {
        const newSkrDB = await Sneaker.add(newSneaker);
        res.status(201).json({ id: newSkrDB._id, success: newSkrDB });
      } catch (e) {
        // return res.send({ error: errorsArray(e) });
         return res.send(e);
      }
};


const getSneaker = async (req, res) => {
    const sneakerDB = await Sneaker.getById(req.params.id);
    // if (!userDB || userDB.error) {
    //   return res.send(errors.incorrectID);
    // }
    res.json(sneakerDB);
};

const purchasedSneaker = async (req, res ) => {
    try {
        const userSneaker = await User.boughtSneaker(req.params.id, req.body);
        const deletedSneaker = await Sneaker.delete(req.body);
        res.status(201).json({ userSneaker, deletedSneaker });
    } catch(e){
        return res.send(e);
    }
    
}
  

module.exports ={
    addSneaker,
    getSneaker,
    purchasedSneaker,
}