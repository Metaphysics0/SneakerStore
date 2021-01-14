const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema(
  {
    picture: {
      type: String,
      required: true, 
    },
    brand: {
      type: String, 
      required: true,
    },
    productDescription: {
      type: String,
      required: true, 
    },
    askingPrice: {
      type: Number,
      required: true, 
    },
    availability: {
      type: Boolean,
      default: true,
    },
    viewedBy: [],
    ownedBy: [],//will consist of owner _id
  },
  {
    timestamps: true,
    collection: 'sneakers',
  }
);
module.exports = mongoose.model('Sneaker', sneakerSchema);

