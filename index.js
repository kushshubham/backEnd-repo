const express = require("express"); // Importing Express
const mongoose = require("mongoose"); // Exporting Mongoose
const Product = require("./models/product.model.js"); // importing product model
const app = express(); // creating express app
const port = 3000;// port where server will run

app.use(express.json()); // middleware convert data to json


// create product that will be saved in database
app.post("/api/products", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
});


// get one product from database
app.get('/api/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
});

// update product from database

app.put('api/product/:id', async (req,res)=>{
  try {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id , req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({massage: error.massage})
  }
})



// this will shown on the localhost
app.get("/", (req, res) => {
  res.send("hello from node API");
});


// get all products from database calling database
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
});


// mosngoose connection 
mongoose
  .connect(
    "mongodb+srv://shubham18kushwaha:gpXmv0m1Kveelfvm@backenddb.vh9r7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("error connecting to database");
  });
