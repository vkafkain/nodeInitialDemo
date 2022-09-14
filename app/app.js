const express = require('express');
const app = express();
const morgan =  require('morgan');
const fileUpload = require('express-fileupload');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(fileUpload());
 
//Routes
app.use('/api/user',require('./routes/user'));
app.use('/api/upload',require('./routes/upload'))

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});