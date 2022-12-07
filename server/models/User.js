const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: String,
    room: { roomId: String, roomName: String },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = { Users };
