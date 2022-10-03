const express = require('express');
const playerRoutes = require('./routes/routes')
const app = express();

//middleware
app.use(express.json());

//routes
app.use(playerRoutes);

module.exports = app;

//TODO poner codigo correctos en los errores
//TODO codigo correctos res