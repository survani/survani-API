//default imports
const express = require('express');
//3rd-party imports

//router that will bring it everything in the projects file.
const projects = require('./Projects/project-router');

const server = express();


//projects endpoint route
server.use('/api/projects', projects);

module.exports = server;
