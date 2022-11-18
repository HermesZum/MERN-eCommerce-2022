const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products.js');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find(product => product._id === productId);
    res.json(product);
});

const MODE = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${MODE} mode on port ${PORT}`);
});