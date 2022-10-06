const express = require('express');
const playerRoutes = require('./routes/routes')
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use(playerRoutes);

module.exports = app;

