const { Users } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userControllers = {
  async register(req, res) {
    try {
      const { userName, password } = req.body;

      if (!userName || typeof userName !== "string")
        return res
          .status(400)
          .send({ status: "fail", message: `Nombre de ususario no válido` });

      if (!password || typeof password !== "string")
        return res
          .status(400)
          .send({ status: "fail", message: `Password no válido` });

      if (password.length < 5)
        return res.status(400).send({
          status: "fail",
          message: "El password debe contener al menos 6 caracteres",
        });

      const hashPassword = await bcrypt.hash(password, 10);
      await Users.create({ userName: userName, password: hashPassword });

      res.status(201).send({
        status: "ok",
        message: `${userName} registrado correctamente`,
      });
    } catch (error) {
      if (error.code === 11000)
        res.status(400).send({
          status: "error",
          message: "El nombre de ususario introducido ya se encuentra en uso",
        });
      throw error;
    }
  },

  async login(req, res) {
    try {
      const userName = req.body.userName;
      const userFind = await Users.findOne({ userName });
      const user = {
        userId: userFind._id,
        userName: userFind.userName,
      };

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);

      res.status(200).send({
        status: "ok",
        user,
        token,
      });
    } catch (err) {
      res.status(401).send({
        status: "error",
        message: err.message,
      });
    }
  },

  async getUsers(room) {

    try {
      let users = await Users.find({ "room.roomId": room.roomId });
      users = users.map(({ _id, userName }) => ({ userId: _id, userName }));
      return { status: "ok", users };
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },

  async disconnectUser(user) {
  
    try {
      const userDisconnected = await Users.findOneAndUpdate(
        { _id: user.userId },
        { "room.roomId": null, "room.roomName": null }
      );
      if (userDisconnected) {
        return { status: "ok", user, room: userDisconnected.room };
      } else {
        return {
          status: "fail",
          message: "socketid no encontrado para el id de usuario",
        };
      }
    } catch (err) {
      return { status: "error", message: err.message };
    }
  },

  async joinRoom(user, room) {

    try {
      const findUser = await Users.findOneAndUpdate(
        { _id: user.userId },
        { "room.roomId": room.roomId, "room.roomName": room.roomName }
      );
      if (findUser) {
        return {
          status: "ok",
          user: { userId: findUser._id, userName: findUser.userName },
          oldRoom: findUser.room,
        };
      } else {
        return { status: "fail", message: "Error al entrar en la sala" };
      }
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },
};

module.exports = userControllers;
