const express = require('express');
const morgan = require('morgan');

const territoriesRoutes = require('./territories/territoriesRouter');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));

server.use('/territories', territoriesRoutes);

module.exports = server;
