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

// Start server
app.listen(PORT, () => {
  console.log(`Product Inventory API running at http://localhost:${PORT}`);
});