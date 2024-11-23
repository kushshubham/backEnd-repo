const mongoose = require("mongoose"); // declaring mongoose


// creating product schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "product name is required"],
  },
  quantity: {
    type: Number,
    require: true,
    default: 0,
  },
  price: {
    type: Number,
    require: true,
    default: 0,
  },
  image: {
    type: String,
    require: false,
  },
});


// creating product model
const Product = mongoose.model("Product", productSchema)
module.exports = Product
