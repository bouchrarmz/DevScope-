
# DevScope 
## Présentation
**DevScope** est une application web de recrutement destinée aux startups et aux recruteurs techniques. Elle permet de rechercher des développeurs sur GitHub, consulter leurs profils et repositories, puis sauvegarder les candidats intéressants dans une shortlist.

## Fonctionnalités

### 1. Recherche de développeurs
- Rechercher un développeur à partir de son nom d'utilisateur GitHub.
- Vérifier la validité du nom d'utilisateur.
- Afficher un message en cas d'erreur ou de profil introuvable.

### 2. Profil GitHub
- Afficher les informations du développeur :
  - Avatar
  - Nom et bio
  - Localisation
  - Nombre de repositories publics
  - Lien vers le profil GitHub
- Afficher les repositories publics du développeur.
- Ajouter un candidat à la shortlist.

### 3. Shortlist
- Enregistrer les candidats sélectionnés via MockAPI.
- Afficher les candidats sauvegardés.
- Consulter les informations des candidats.

## Technologies utilisées
- HTML5
- Tailwind CSS
- JavaScript (ES6)
- GitHub REST API
- MockAPI
- Git & GitHub

## APIs utilisées
**GitHub REST API**

Permet de récupérer les informations publiques des développeurs et leurs repositories.

Documentation : https://docs.github.com/en/rest

**MockAPI**
Permet de sauvegarder et gérer les candidats dans une API REST.
Site : https://mockapi.io/

## Installation

1. Cloner le repository :

git clone https://github.com/bouchrarmz/DevScope-.git

2. Accéder au dossier du projet :
cd DevScope-
3. Ouvrir le fichier `index.html` avec Live Server.
## Structure du projet
DevScope/
│
├── index.html
├── profil.html
├── shortlist.html
│
├── page-js/
│   ├── pageRecherch.js
│   ├── pageProfil.js
│   └── ...
│
└── README.md


## Objectif du projet

Développer une application web simple et intuitive qui facilite la recherche, l'analyse et la sélection de profils techniques à partir de GitHub.

## Auteur

**Bouchra Ramzi**
GitHub : https://github.com/bouchrarmz