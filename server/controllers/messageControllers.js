const { Rooms } = require("../models/models.js");

const messageControllers = {
  async getMessages(room) {
    
    try {
      let roomFind = "";
      let messages = "";

      if (room.roomId) {
        roomFind = await Rooms.findOne({ _id: room.roomId });
      } else if (room.roomName) {
        roomFind = await Rooms.findOne({ roomName: room.roomName });
      } else {
        throw new Error("No puede haber dos salas con el mismo nombre");
      }

      if (roomFind.messages !== null) {
        messages = roomFind.messages.map(({ user, room, text }) => ({
          user,
          room,
          text,
        }));
      }

      return { status: "ok", messages };
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },

  async newMessage(message) {
    try {
      let findRoom = await Rooms.updateOne(
        { _id: message.room.roomId },
        { $push: { messages: message } }
      );
      return findRoom = { status: "ok", message };
      
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },
};

module.exports = messageControllers;
