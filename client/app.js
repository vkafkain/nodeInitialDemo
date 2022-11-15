require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.CLIENT_PORT;

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));

//route to index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
  })

app.listen(PORT,() => {
    console.log(`Client server listening on port ${PORT}`)
})