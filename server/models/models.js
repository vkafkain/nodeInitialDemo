const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: String,
    room: { roomId: String, roomName: String },
  },
  { timestamps: true }
);

const roomsSchema = new mongoose.Schema(
  {
    roomName: String,
    messages: [
      {
        user: { userName: String, userId: String },
        room: { roomName: String, roomId: String },
        text:  String,
        time: {type: Date, default: Date.now}
      },
    ],
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);
const Rooms = mongoose.model("Rooms", roomsSchema);


module.exports = { Users, Rooms };
