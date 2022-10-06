const express = require("express");
const routes = require("./routes/routes");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(routes);

module.exports = app;
