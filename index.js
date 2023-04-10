const express = require('express');
const path = require('path');
const { randomName } = require('./header.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.get('/ping', (req, res) => {
    res.send('Pong!');
});

app.get('/random-name', (req, res) => {
    res.json(randomName());
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
