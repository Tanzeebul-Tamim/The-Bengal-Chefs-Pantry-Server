const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const bannerDishes = require('./data/bannerDishes.json');
const chefs = require('./data/chefs.json');
const tipsAndTricks = require('./data/tipsAndTricks.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe Hunter is running')
});

app.get('/bannerdishes', (req, res) => {
    res.send(bannerDishes);
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/tips', (req, res) => {
    res.send(tipsAndTricks);
})

app.listen(port, () => {
    console.log(`Recipe Hunter API is running on port: ${port}`)
})