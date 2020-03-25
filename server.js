//default imports
const express = require('express');

//3rd-party imports
const helmet = require('helmet');

// personal imports -none yet

//router that will bring it everything in the projects file.
const projects = require('./Projects/project-router');

const server = express();

//middleware adds more security.
server.use(helmet());

//projects endpoint route
server.use('/api', projects);

module.exports = server;
