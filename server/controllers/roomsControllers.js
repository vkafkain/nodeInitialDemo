const { Rooms } = require("../models/Room");

const roomsControllers = {

  async createRoom(roomName) {
    
    try {
      const roomExist = await Rooms.findOne({ roomName });

      if (roomExist) {
        return { status: "fail", message: "Ya existe una sala con ese nombre" };
      } else {
        const room = await Rooms.create({ roomName });
        return {
          status: "ok",
          room: { roomId: room._id, roomName: room.roomName },
        };
      }
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },
  
  async getRooms() {
    
    try {
      let rooms = await Rooms.find({});
      rooms = rooms.map(({ _id, roomName }) => {
        return { roomId: _id, roomName };
      });
      return { status: "ok", rooms };
    } catch (error) {
      return { status: "error", message: error.message };
    }
  },
};

module.exports = roomsControllers;
