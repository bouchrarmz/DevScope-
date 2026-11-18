# DevScope-
# DevScope – Application de recrutement Tech

## Présentation du projet

DevScope est une application web destinée aux recruteurs dans le domaine de la technologie. Elle permet de rechercher des développeurs à partir de leurs profils GitHub publics, de consulter leurs informations et leurs dépôts, puis d'ajouter les candidats intéressants à une shortlist.

L'objectif est de faciliter le processus de recrutement et de centraliser le suivi des candidats dans une seule application.

## Fonctionnalités principales

### 1. Page Recherche
- Recherche d'un développeur par son nom d'utilisateur GitHub.
- Validation du nom d'utilisateur avant l'envoi de la requête.
- Affichage des messages d'erreur en cas de nom invalide ou inexistant.
- Redirection vers la page Profil après une recherche réussie.

### 2. Page Profil
- Affichage de la photo du développeur.
- Affichage du nom, login, biographie et localisation.
- Affichage de la date d'inscription.
- Affichage du nombre de dépôts, abonnés et abonnements.
- Lien vers le profil GitHub.
- Affichage des dépôts sous forme de cartes avec :
  - Nom du dépôt.
  - Description.
  - Langage utilisé.
  - Nombre d'étoiles.
  - Nombre de forks.
  - Date de dernière mise à jour.
- Possibilité d'ajouter le développeur à la shortlist sans doublon.

### 3. Page Shortlist
- Affichage des candidats enregistrés.
- Affichage du nombre total de candidats.
- Recherche par nom ou login.
- Tri des candidats par nom ou date d'ajout.
- Récupération des candidats depuis MockAPI.

## Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript ES6+
- GitHub REST API
- MockAPI (REST API)
- Fetch API
- LocalStorage si utilisé dans le projet
- Git et GitHub

## Architecture du projet

```text
DevScope/
│
├── index.html
├── profil.html
├── shortlist.html
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── utils.js
│   ├── states.js
│   ├── search.js
│   ├── profile.js
│   └── shortlist.js
│
└── README.md
```

### Organisation des modules

- **config.js :** configuration des API et constantes.
- **api.js :** gestion des requêtes HTTP avec fetch.
- **utils.js :** fonctions utilitaires et validation.
- **states.js :** gestion des états de l'application.
- **search.js :** logique de recherche et validation du username.
- **profile.js :** affichage du profil et des dépôts GitHub.
- **shortlist.js :** gestion des candidats, recherche et tri.

## Communication avec les API

L'application utilise deux API :

**GitHub API :** récupération des profils et des dépôts publics des développeurs.

**MockAPI :** enregistrement et récupération des candidats de la shortlist.

Les requêtes sont réalisées avec fetch, async/await et try/catch. Les réponses HTTP sont vérifiées avec response.ok afin de gérer les erreurs.

## Installation et lancement

1. Cloner le dépôt GitHub.
2. Ouvrir le projet dans Visual Studio Code.
3. Installer l'extension Live Server si nécessaire.
4. Lancer `index.html` avec Live Server.

## Déploiement

L'application est destinée à être déployée sur GitHub Pages.

## Liens du projet

- GitHub : À compléter
- Application en ligne : À compléter
- Jira : À compléter

## Auteur

Projet réalisé dans le cadre d'un brief de développement Front-End – DevScope.