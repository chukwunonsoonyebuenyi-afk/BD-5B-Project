require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());

// Fake/in-memory product inventory
let products = [
  { id: 1, name: "Laptop", price: 250000, quantity: 5 },
  { id: 2, name: "Mouse", price: 5000, quantity: 20 },
  { id: 3, name: "Keyboard", price: 12000, quantity: 10 },
];

// GET all products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// GET a single product
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

/*
 * Paul Edited here
 * Run the code with  ``` npm run dev```
 */
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index <= -1) return res.status(404).json({ error: "Product not found" });

  const { name, price, quantity } = req.body;
  if (!name || !price || !quantity)
    return res.status(400).json({ error: "Invalid Body!" });
  products[index] = { id, name, price, quantity };
  res.status(200).json({ message: "Product updated successfully!", products });
});

/*
 * MKO-Abiodun Edited here
 * Run the code with ``` npm run dev ```
 */
app.post("/products", (req, res) => {
  const { name, price, quantity } = req.body;

  if (!name || !price || !quantity)
    return res
      .status(400)
      .json({ error: "name, price and quantity are required" });

  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    price,
    quantity,
  };

  products.push(newProduct);

  res
    .status(201)
    .json({ message: "Product created successfully!", product: newProduct });
});

//DELETE route
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.filter((p) => p.id !== id);

  if (product.length === products.length)
    return res.status(404).json({ error: "Product not found" });
  products = product;
  res.status(200).json({ message: "Product deleted!", products });
});

app.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.filter((p) => p.id === id);
  console.log("Product after: ", product);
  if (product.length <= 0)
    return res.status(404).json({ error: "Product not found" });

  const index = products.indexOf(product);
  console.log("Index : ", index);

  if (!req.body) return res.status(404).json({ error: "No data recieved" });
  const newProduct = Object.assign(product[0], req.body);

  products[index] = newProduct;
  console.log("Product after: ", product);

  res.json({ message: "Product updated!", products });
});

// Start server
app.listen(PORT, () => {
  console.log(`Product Inventory API running at http://localhost:${PORT}`);
});
