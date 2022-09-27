const express = require('express');
const playerRoutes = require('./routes/players.routes')
const app = express();

//middleware
app.use(express.json());

//routes
app.use(playerRoutes);

module.exports = app;