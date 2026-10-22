require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());

// Fake/in-memory product inventory
let products = [
  { id: 1, name: 'Laptop', price: 250000, quantity: 5 },
  { id: 2, name: 'Mouse', price: 5000, quantity: 20 },
  { id: 3, name: 'Keyboard', price: 12000, quantity: 10 }
];

// GET all products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// GET a single product
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});


/*
* Paul Edited here
* Run the code with  ``` npm run dev```
*/
app.put('/products/:id', (req,res)=>{
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if(index <= -1) return res.status(404).json({error: "Product not found"});

  const {name, price , quantity} = req.body;
  if(!name || !price || !quantity) return res.status(400).json({error: "Invalid Body!"});
  products[index] = {id, name, price, quantity};
  res.status(200).json({message:"Product updated successfully!", products});
});


// Start server
app.listen(PORT, () => {
  console.log(`Product Inventory API running at http://localhost:${PORT}`);
});