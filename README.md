# Entrega 3.3: Developers Team 🫕
## Descripció del projecte 👁‍🗨

- Forma un equip amb 2 desenvolupadorxs més que estiguin en aquest mateix sprint (xl mentorx pot ajudar-te o suggerir-te companyxs). 
- Haureu de construir el projecte TO-DO, que ha de satisfer els següents requisits:

    - Creeu una aplicació que permeti portar un llistat de tasques per fer. 
    - Ha de contemplar les següents opcions:

        * Afegir tasques, 
        * Llistar les tasques
        * Mostrar la següent informació de cadascuna:

            - El seu estat: 'pendent', 'en execució' o 'acabada', 
            - L'hora d'inici i de finalalització de la tasca, 
            - L'usuarix que la va donar d'alta.

    - L'aplicatiu ha d'utilitzar-se per consola i ha de contenir les següents opcions: 

        * Crear tasca, 
        * Actualitzar tasca, 
        * Esborrar tasca, 
        * Llistar totes les tasques i 
        * Llistar una tasca específica.

    - S'ha d'utilitzar un repositori GitHub seguint la metodologia gitflow.
        En el cas d'aquest projecte:

         https://github.com/vkafkain/nodeInitialDemo/issues


## Nivell 1 ⭐

- Utilitzeu com a persistència un arxiu JSON.
- El projecte haurà d'estar correctament configurat en GitHub en la seva estructura de carpetes i de branches (seguint la metodologia gitflow).

### Estructura global del Projecte Developers Teams:

/3.3-DevTeams_nodeInitialDemo

    /controllers 
    |-- controllers-json.js
    |-- createTask.js
    |-- createUser.js
    |-- deleteTask.js
    |-- loginUser.js
    |-- mostrarOneTask.js
    |-- updateTask.js

    /databases
    |-- database.json
    |-- db-json.js

    /helpers 
    |-- inquirer-user.js
    |-- mensajes.js

    /models

    |-- .env-template
    |-- .gitignore
    |-- app.js
    |-- config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md

### Instruccions per executar:
- Instalar les dependències utilitzant al terminal la següent línia de comandaments: 

        npm install

- Per utilizar database.json cal executar la següent línia de comandament:

        npm run json


- Per iniciar:

        node app.js

## []Nivell 2 ⭐⭐

- Feu servir com a persistència MySQL.

## []Nivell 3 ⭐⭐⭐

- Useu com a persistència MongoDB.

**[] Nivells no realitzats.
