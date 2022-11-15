const jwt = require("jsonwebtoken");
const roomsControllers = require("../controllers/roomsControllers");
const userControllers = require("../controllers/usersControllers");
const messageControllers = require("../controllers/messageControllers");

const sockets = async (io) => {
  io.use(function (socket, next) {
    if (socket.handshake.query && socket.handshake.query.token) {
      jwt.verify(
        socket.handshake.query.token,
        process.env.ACCESS_TOKEN_KEY,
        function (err, decoded) {
          if (err) return next(new Error("Authentication error"));
          socket.decoded = decoded;
          next();
        }
      );
    } else {
      next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    const user = {
      userId: socket.decoded.userId,
      userName: socket.decoded.userName,
    };

    console.log(`user ${user.userName} connected`);

    socket.on("new-message", async (message) => {
      let newMsg = await messageControllers.newMessage(message);
      if (newMsg.status === "ok") {
        socket.broadcast
          .to(message.room.roomId)
          .emit("new-message", newMsg.message);
      } else {
        io.to(socket.id).emit("error", newMsg.message);
      }
    });

    socket.on("new-room", async (roomName) => {
      let createdRoom = await roomsControllers.createRoom(roomName);

      if (createdRoom.status === "ok") {
        let currentUsers = await userControllers.getUsers(createdRoom.room);

        io.emit("new-room", createdRoom.room, currentUsers.users);
        io.to(socket.id).emit("ok", `${roomName} created`);
      } else {
        io.to(socket.id).emit("error", createdRoom.message);
      }
    });

    socket.on("get-rooms", async () => {
      let currentRooms = await roomsControllers.getRooms();

      if (currentRooms.status === "ok") {
        currentRooms.rooms.forEach(async (room) => {
          let currentUsers = await userControllers.getUsers(room);
          io.to(socket.id).emit("new-room", room, currentUsers.users);
        });
      } else {
        io.to(socket.id).emit("error", currentRooms.message);
      }
    });

    socket.on("join-room", async (room) => {
      let joinedRoom = await userControllers.joinRoom(user, room);

      if (joinedRoom.status === "ok") {
        if (joinedRoom.oldRoom.roomId) {
          socket.leave(joinedRoom.oldRoom.roomId);

          socket.broadcast
            .to(joinedRoom.oldRoom.roomId)
            .emit(
              "new-join-message",
              `${joinedRoom.user.userName} left the room`
            );

          let formerUsers = await userControllers.getUsers(joinedRoom.oldRoom);

          io.emit("update-room-users", joinedRoom.oldRoom, formerUsers.users);
        }

        socket.join(room.roomId);

        socket.broadcast
          .to(room.roomId)
          .emit(
            "new-join-message",
            `${joinedRoom.user.userName} joined the room`
          );

        let currentUsers = await userControllers.getUsers(room);

        io.emit("update-room-users", room, currentUsers.users);

        let currentMessages = await messageControllers.getMessages(room);

        if (
          currentMessages.status === "ok" &&
          currentMessages.messages !== null
        ) {
          currentMessages.messages.forEach((message) =>
            io.to(socket.id).emit("new-message", message)
          );
        } else {
          io.to(socket.id).emit("error", currentMessages.message);
        }
      } else {
        io.to(socket.id).emit("error", joinedRoom.message);
      }
    });

    socket.on("disconnect", async () => {
      let disconnectedUser = await userControllers.disconnectUser(user);

      if (disconnectedUser.status === "ok") {
        socket.leave(disconnectedUser.room.roomId);

        socket.broadcast
          .to(disconnectedUser.room.roomId)
          .emit(
            "new-join-message",
            `${disconnectedUser.user.userName} left the room`
          );

        let currentUsers = await userControllers.getUsers(
          disconnectedUser.room
        );

        io.emit("update-room-users", disconnectedUser.room, currentUsers.users);
      } else {
        io.to(socket.id).emit("error", disconnectedUser.message);
      }
    });
  });
};

module.exports = sockets;
