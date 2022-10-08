const express = require("express");
const routes = require("./routes/routes");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(routes);

module.exports = app;
