const express = require('express');

const products = require('./data/products.js');

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

app.listen(5000, () => {
    console.log('Server running on port 5000');
});