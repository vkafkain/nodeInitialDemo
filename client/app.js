const express = require('express');
const path = require('path');

const app = express()
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
  })

app.listen(PORT,() => {
    console.log(`Client server listening on port ${PORT}`)
})