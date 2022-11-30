require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const connectDB = require("./database/connectDB");
const sockets = require("./sockets/sockets");
const routes = require("./routes/routes");


const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(routes);

// Sockets
sockets(io);

PORT = process.env.SERVER_PORT || 3000;
http.listen(
  PORT,
  console.log(`Server listening on port ${process.env.SERVER_PORT}`)
);
