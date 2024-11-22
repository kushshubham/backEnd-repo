const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const port = 3000

app.use(express.json());




app.get('/', (req,res)=>{
    res.send('hello from node API')
})

app.post('api/products', async(req,res)=>{
    try {
        const Product = await Product.create(req.body)
        res.status(200).json(Product)
    } catch (error) {
    res.status(500).json({massage: error.message})
    }
})

mongoose.connect('mongodb+srv://shubham18kushwaha:gpXmv0m1Kveelfvm@backenddb.vh9r7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
.then(()=>{
    console.log('connected to database')
    app.listen(3000, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(()=>{
    console.log('error connecting to database')
})