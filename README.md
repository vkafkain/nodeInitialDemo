# Win95 Chat

This API has been developed by Víctor López.

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


```
Instalaremos los modulos necesarios para el funcionamiento del chat con el siguiente comando por terminal:
```
    npm install
```

## Ejecutar

Una vez hemos instalado todo tenemos que ejecutar tanto en la ruta del servidor chat-v.3.0/server, como en la ruta del cliente chat-v.3.0/client el comando: 
```
    npm run start
```
Esto nos inicializa el servidor, la base de datos y el cliente.

## Arquitectura del proyecto

Estructura:

![Demo](https://github.com/vkafkain/Jump2Digital_2022_Backend/blob/main/docs/01.png)

## Rutas

_Obtener compañías ordenadas por tamaño - GET_
```
http://localhost:3000/companies/size
```

_Obtener compañías ordenadas por fecha de creación - GET_
```
http://localhost:3000/companies/date
```

_Obtener número de empresas de cada industria, rango de tamaños y año de creación - GET_
```
http://localhost:3000/companies/count
```
## POSTMAN

En la direccion /POSTMAN/Jump2Digital.postman_collection.json


## Programas utilizados

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Mongoose](https://mongoosejs.com/) - Dependencia que nos ayuda a gestionar datos con MongoDB.


## Autor

* Github [Víctor López](https://github.com/vkafkain)  |  Email vlopezmoles@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)