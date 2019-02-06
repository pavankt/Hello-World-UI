const fs = require("fs");
const express = require("express");

const app = express();
const timeStamp = () => new Date();

app.use((req, res, next) => {
    console.log(`${timeStamp()}: Requested for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.write("Hello");
    res.end();
});

module.exports = app;
