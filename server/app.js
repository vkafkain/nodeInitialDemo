require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const connectDB = require("./database/connectDB");
const sockets = require("./sockets/sockets");
const routes = require("./routes/routes");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { addAbortSignal } = require("stream");

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
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolf"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use(routes);

//invalid route handling
app.use((req, res) =>
  res.status(404).send({ status: "fail", message: "PAGE NOT FOUND" })
);

// Sockets
sockets(io);

PORT = process.env.SERVER_PORT || 3000;
http.listen(
  PORT,
  console.log(`Server listening on port ${process.env.SERVER_PORT}`)
);
