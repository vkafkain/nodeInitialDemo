# Win95 Chat

Application created for Sprint 5 ItAcademy Formació mentoritzada Nodejs.

## Objetivos

### Descripció 💬

Construïm un Xat!!!

Necessitarem socket.io, una biblioteca de JavaScript per a aplicacions web en temps real. Permet la comunicació bidireccional en temps real entre clients i servidors web. Té dues parts: una biblioteca del costat del client que s'executa en el navegador i una biblioteca del costat del servidor per a Node.js. 

Trobaràs el que necessitis en ->socket.io

⭐️ Nivell 1

Crea una aplicació que mostri una pàgina de login on l'usuari/ària pugui entrar a una sala de xat (el client i el server han d'estar completament separats). Obrint la mateixa URL en una altra finestra del navegador podrem fer login amb un altre usuari/ària. Verifica que estan en la mateixa sala i permet que xategin. Afegeix la possibilitat de crear múltiples sales de xat i gestiona la persistència amb MongoDB (amb Mongoose) o MySQL (amb Sequelize).

⭐️⭐️ Nivell 2 

Afegeix autentificació utilitzant Google Token (google-auth-library)

⭐️⭐️⭐️ Nivell 3

Per superar aquest nivell pots afegir diferents opcions:
   - Afegeix qualsevol funcionalitat que vegis útil.
   - Afegeix la personalització del frontend que vulguis.
   - Realitza el frontend amb algun framework (React, Vue, Angular).
   - Efectua el projecte amb TypeScript.

## Instalación

Para que el proyecto funcione tenemos que instalar previamente: 
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)



Instalaremos los modulos necesarios para el funcionamiento del chat con el siguiente comando por terminal:
```
    npm install
```

¡Muy importante! Cambiar el nombre del archivo .env-template a solo .env.

## Ejecutar

Una vez hemos instalado todo tenemos que ejecutar tanto en la ruta del servidor chat-v.3.0/server, como en la ruta del cliente chat-v.3.0/client el comando: 
```
 npm run start
```

Esto nos inicializa el servidor, la base de datos y el cliente.

Una vez tenemos tanto el servidor del back como el del cliente escuchando, abrimos una pagina web con nuestro navegador favorito en la siguiente direccion:

http://127.0.0.1:5500/client/public/html/index.html


## Arquitectura del proyecto

Estructura:

Client

![Demo](https://github.com/vkafkain/nodeInitialDemo/blob/chat/docs/client.png)

Server

![Demo](https://github.com/vkafkain/nodeInitialDemo/blob/chat/docs/server.png)

## Rutas

_Registrar usuario - POST_
```
http://localhost:3000/users/register
```

_Login ususario - POST_
```
http://localhost:3000/users/login
```

## Programas utilizados

* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de Marcas de Hipertexto.
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Hojas de Estilo en Cascada.
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Mongoose](https://mongoosejs.com/) - Dependencia que nos ayuda a gestionar datos con MongoDB.
* [Socket.io](https://socket.io/) -  Esta biblioteca javascript permite la comunicación bidireccional en tiempo real.
* [JWT](https://jwt.io/) -  JSON Web Token (abreviado JWT) es un estándar abierto basado en JSON propuesto por IETF (RFC 7519) para la creación de tokens de acceso.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - bcrypt es un algoritmo diseñado específicamente para hash de contraseñas. MD5 y SHA1 son algoritmos de hash de propósito general.


## License

[MIT](https://opensource.org/licenses/MIT)