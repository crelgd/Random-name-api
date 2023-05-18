const express = require('express');
const path = require('path');
const { randomName } = require('./header.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
    console.log(`${Date.now()} | /`);
});

app.get('/ping', (req, res) => {
    res.send('Pong!');
    console.log(`${Date.now()} | /ping`);
});

app.get('/random', (req, res) => {
    res.json(randomName());
    console.log(`${Date.now()} | /random`);
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
