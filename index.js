
require('dotenv').config();
const express = require('express');

const server = require("./server.js");

const port = process.env.PORT;

// make the server listen to requests
server.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`);
});