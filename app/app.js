const express = require('express');
const app = express();
const route = requite('./routes/routes');

//Settings
app.set('port', 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use('/', route);

//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});