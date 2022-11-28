# Entrega 4.1: Node REST Server 🔥

## Què necessitem per fer-lo funcionar? 🧞

Necessitem instal·lar els mòduls express, multer, cors, cross-fetch de Nodejs amb la següent línia de codi per la terminal.

    npm i express multer cors cross-fetch

## Instruccions d'ús: 🧙‍♂️

Un cop hem instal·lat els diferents paquets hem d'iniciar el servidor amb la següent línia de codi.

    node app/app.js

## POSTMAN 📬

Per executar d'una manera ràpida i fàcil totes les diferents indicacions dels exercicis farem servir Postman un programa que ens permet fer diferents peticions al servidor. Es pot fer servir des del navegador o també el podem instal·lar com a programa.
El podem descarregar del següent enllaç:

[Enllaç Postman](https://www.postman.com/downloads/)


Un cop tinguem el programa postman obert hem de clicar en import, anem a la carpeta nodeInitialDemo i importem l'arxiu que es diu Postman.json.

Finalment, amb la col·lecció ja importada a postman fem clic en Run, això executarà la col·lecció.

## Actualitzacions

> Les rutes no especificades ara retornen un HTML predeterminat, han de retornar JSON amb el codi HTTP corresponent ❌

->  He afegit una ruta amb l'error 404 per aquelles rutes no especificades  ✅

> El mateix si falla la pujada d'un arxiu, ha de retornar bad request si l'arxiu no és del tipus correcte amb un missatge que ho expliqui (i el codi HTTP que no sigui el 500!) ❌

->  He reordenat i canviat alguns parametres del controller per fer upload dels arxius, ara si pujes un arxiu que no és una imatge salta l'error 415 (Unsupported media type) i el missatge corresponent  ✅

> L'autorització del N2 no sé com fer-la (la tens configurada a Postman al N3, que no calia, i al 2 no funciona)  ❌

-> He corregit el postman, ara em funciona correctament, igualment tinc un dubte amb POSTMAN quan estiguis recuperat ho comentem. ✅

> Al N3 s'hauria de fer alguna cosa perquè el server contesti si li passes com a ID un número massa gran o algo que no sigui una string (ara mateix no respon) ❌

-> He ficat dues validacions una que només permeti números i d'altra banda he modificat el controller pokemon, per fer saltar un missatge d'error si el número del id especificat no correspont amb cap id de la api. ✅ 

> El .env l'has d'excloure del repo i renombrar-lo ❌

-> L'he eliminat ja que estava en blanc i no feia res ✅

> Als noms de les imatges els hi hauries de fer alguna cosa perquè no es puguin sobreescriure ❌

-> He afegit al storage de les imatge que se li sumi al nom, el número que genera Date.now() ✅


