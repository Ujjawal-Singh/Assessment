const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", description: "A high-end laptop", price: 1200, imageUrl: "https://pixabay.com/photos/laptop-apple-computer-desk-macbook-1846277/" },
  { id: 2, name: "Phone", description: "A flagship smartphone", price: 700, imageUrl: "https://pixabay.com/photos/phone-iphone-mobile-green-8594571/" }
];

// getting products
app.get("/products", (req, res) => {
  res.json(products);
});

// getting single product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// creating new product
app.post("/products", (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  if (!name || !description || !price || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price: parseFloat(price),
    imageUrl
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// updating an existing product
app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });

  const { name, description, price, imageUrl } = req.body;
  if (!name || !description || !price || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  product.name = name;
  product.description = description;
  product.price = parseFloat(price);
  product.imageUrl = imageUrl;

  res.json(product);
});

// deletion of a product
app.delete("/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  const deletedProduct = products.splice(index, 1);
  res.json({ message: "Product deleted", product: deletedProduct[0] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
