import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from "./config/db.js";
import products from './data/products.js';

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

connectDB(() => {
    app.listen(PORT, () => {
        console.log(`Server running in ${MODE} mode on port ${PORT}.`.blue.bold);
    });
}).then(r => console.log('Successfully connected to database.'.blue.bold));
