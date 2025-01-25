// app.js

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from the other side 2');
});

module.exports = app;
