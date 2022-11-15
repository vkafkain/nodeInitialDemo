const mongoose = require("mongoose");
const { Rooms } = require("../models/models");

const connectDB = async () => {
  try {
    let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${process.env.DB_NAME}`);
  } catch (err) {
    console.log(err.message);
  }

  const roomFind = await Rooms.findOne( { roomName: "Main" } );
  if(!roomFind) {
    const room = await Rooms.create( {roomName: "Main"});
  }
};

module.exports = connectDB;
