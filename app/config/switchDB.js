if(process.env.DATABASE === 'mongoDB'){
    const {connectMongo} = require('../models/')
    connectMongoDB()
    }
    if(process.env.DATABASE === 'mysql'){
    const {connectMySQL} = require('../models/')
    connectMySQLDB()
    }