# Entrega 4.2: Node REST Server 🔥

## Tecnologies utilitzades 🧩

Hem fet servir els següents moduls de npm:

    - express => Crea el servidor i el fa funcionar
    - jsonwebtoken => Crea tokens únics
    - dotenv => Ens ajuda a fer servir les variables d'entorn
    - sequelize => Ens permet interactuar amb les bases de dades SQL
    - mysql2 => Ens permet crear connexions amb la base de dades.


## Què necessitem per fer-lo funcionar? 🧞

Necessitem instal·lar els mòduls necessaris. Hem de introduïr els següent comandament per términal.

    npm install

## Instruccions d'ús: 🧙‍♂️

Un cop hem instal·lat els diferents paquets hem d'iniciar el servidor amb la següent línia de codi.

    npm run start

## POSTMAN 📬

Per executar d'una manera ràpida i fàcil totes les diferents indicacions dels exercicis farem servir Postman un programa que ens permet fer diferents peticions al servidor. Es pot fer servir des del navegador o també el podem instal·lar com a programa.
El podem descarregar del següent enllaç:

[Enllaç Postman](https://www.postman.com/downloads/)

Un cop tinguem el programa postman obert hem de clicar en import, anem a la carpeta nodeInitialDemo i importem l'arxiu que es diu Postman.json.

Finalment, amb la col·lecció ja importada a postman fem clic en Run, això executarà la col·lecció.

### IMPORTANT 

La primera request que hem d'enviar del postman és "admin genera JWT", aquesta ens retornarà un token i l'haurem d'introduir a les següents request, concretament a Authorization seleccionem Bearer Token i introduïm el token.

## RUTES 🌌

### jugadors 👥

GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.

POST /players: crea un jugador/a.

PUT /players/{id}: modifica el nom del jugador/a.

## tirades 🎲

POST /games/{id}: un jugador/a específic realitza una tirada.

DELETE /games/{id}: elimina les tirades del jugador/a.

GET /games/{id}: retorna el llistat de jugades per un jugador/a.

## ranking 🏁

/ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.

/ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.

/ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.

## loguin 🔐

/login permet accedir com a administrador amb usuari/ària i contrasenya i retorna un token que introduirem al header.authorization Bearer Token, és imprescindible introduir-lo per poder accedir a tots els serveis de les rutes exceptua'n /login.
