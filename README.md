# Entrega 4.2: Node REST Server 🔥

## Què necessitem per fer-lo funcionar? 🧞

Necessitem instal·lar els mòduls necessaris. Hem de introduïr els següent comandament per términal.

    npm install

## Instruccions d'ús: 🧙‍♂️

Un cop hem instal·lat els diferents paquets hem d'iniciar el servidor amb la següent línia de codi.

    node app/index.js

## POSTMAN 📬

Per executar d'una manera ràpida i fàcil totes les diferents indicacions dels exercicis farem servir Postman un programa que ens permet fer diferents peticions al servidor. Es pot fer servir des del navegador o també el podem instal·lar com a programa.
El podem descarregar del següent enllaç:

[Enllaç Postman](https://www.postman.com/downloads/)

Un cop tinguem el programa postman obert hem de clicar en import, anem a la carpeta nodeInitialDemo i importem l'arxiu que es diu Postman.json.

Finalment, amb la col·lecció ja importada a postman fem clic en Run, això executarà la col·lecció.

## RUTES 🌌´

### jugadors

GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
router.get("/", getPlayers);

POST /players: crea un jugador/a.

PUT /players/{id}: modifica el nom del jugador/a.

## tirades

POST /games/{id}: un jugador/a específic realitza una tirada.

DELETE /games/{id}: elimina les tirades del jugador/a.

GET /games/{id}: retorna el llistat de jugades per un jugador/a.

## ranking

/ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.

/ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.

/ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.

## loguin


