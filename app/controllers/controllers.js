const fetch = require("cross-fetch");
const multer = require("multer");
const path = require("path");

const error404 = (req, res) => {
  res.status(404).json({
    message: "Error 404 - page not found",
  });
};

//user
const user = (req, res) => {
  let url = req.protocol + "://" + req.get("Host") + req.originalUrl;
  res.status(200).json({
    nom: "Víctor",
    edad: 36,
    url: url,
  });
};

//upload

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public"),
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  dest: path.join(__dirname, "public"),
  limits: { fileSize: 50000000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb("Error: Images Only");
    }
  },
}).single("images");

const uploadPost = (req, res) => {
  try {
    upload(req, res, (error) => {
      if (error) {
        return res.status(415).send({ status: "fail", message: "Images Only" });
      }
      if (!req.file) {
        return res
          .status(400)
          .send({ status: "fail", message: "File not found" });
      }
      return res
        .status(200)
        .send({ message: "File upload successfully", file: req.file });
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: error.message,
    });
  }
};

//time
const time = (req, res) => {
  try {
    res.status(200).json({
      date: new Date().toDateString(),
      hour:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: "Request Error",
    });
  }
};

//pokemon
const pokemon = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({ error: "Only numbers allowed" });
  }
  const api = fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((res) => {
      if (api.status >= 400) {
        throw new Error("400: Bad response from server");
      }
      return res.json();
    })
    .then((data) => {
      if (data.name !== "FetchError") {
        res.json({
          name: data.name,
          height: data.height,
          weight: data.weight,
        });
      }
    })
    .catch(() => {
      res.status(400).json({
        status: "error",
        message: "The id entered does not correspond to any pokemon",
      });
    });
};

module.exports = { user, uploadPost, time, pokemon, error404 };
