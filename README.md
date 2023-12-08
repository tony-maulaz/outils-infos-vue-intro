# Installation
## Initiation à Node.js (Pas besoin si package.json est déjà présent)
- Pour créer le package.json : `npm init -y`
- Ajouter le package Express : `npm install express --save`
- Ajouter Nodemon pour le mode de surveillance : `npm install nodemon --save-dev`
- Ajouter vue-router : `npm install vue-router@next --save`
- Ajouter vuetify : `npm install vuetify@next --save`

## VSCode
- Installer l'extension Volar


# Développement

## Démarrer le serveur (A faire à chaque fois)
- Démarrer le conteneur Docker : `docker-compose up -d`
- Se connecter au conteneur web : `docker exec -it vue_intro bash`

## Marche à suivre pour créer un projet Vue (A faire une seule fois)
- Une fois dans le conteneur web
- Créer un projet Vue : `npm create vite@latest`
  - Entrer `y` pour continuer
  - Entrer le nom du projet ex : `vue_intro`
  - Sélectionner `vue`
  - Sélectionner `JavaScript`
- Aller dans le dossier du projet : `cd <nom_du_projet>`
- Initialiser le projet : `npm install`

## Pour développer
- Une fois dans le conteneur web
- Démarrer le serveur avec le mode de watch : `npm run dev`
- Accéder au site : `http://localhost:3000/`



## Démarrer le serveur
- Démarrer le serveur avec le mode de watch : `npm run dev`
- Démarrer le serveur en mode normal : `npm run start`


# API (serveur experess)
## Pour utiliser l'api (A faire une seule fois)
- Ouvrir un autre terminal
- Se connecter au conteneur web : `docker exec -it vue_intro bash`
- Aller dans le dossier du serveur express : `cd express`
- Démarrer le serveur : `npm run start`