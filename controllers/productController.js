// controllers/productController.js
let products = []; // In-memory storage for products
let id = 1;

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const product = { id: id++, ...req.body };
  products.push(product);
  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });
  products[productIndex] = { id: products[productIndex].id, ...req.body };
  res.json(products[productIndex]);
};

exports.deleteProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });
  products.splice(productIndex, 1);
  res.json({ message: 'Product deleted' });
};
