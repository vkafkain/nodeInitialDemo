const jwt = require('jsonwebtoken');


jwt.sign({ player: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
    console.log(token);
  });

//TODO JWT autentificador
//TODO dar nombre anonimo a los anonimos