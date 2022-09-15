const express = require('express');
const app = express();
const morgan =  require('morgan');
const route = require('../app/routes/routes');


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes
app.use('/', route);


//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});