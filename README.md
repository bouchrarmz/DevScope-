# DevScope V2 

## Présentation du projet

**DevScope** est une application web destinée aux recruteurs pour rechercher des développeurs sur GitHub, consulter leurs profils et gérer une shortlist de candidats.

La version 2 apporte de nouvelles fonctionnalités pour faciliter le suivi des candidats, la recherche de dépôts et améliorer les performances grâce au système de cache.

## Fonctionnalités

### 1. Recherche de développeurs
- Rechercher un développeur par son nom d'utilisateur GitHub.
- Consulter les informations de son profil.
- Afficher ses statistiques et ses dépôts publics.

### 2. Gestion de la shortlist
- Ajouter un candidat à la shortlist.
- Modifier le statut du candidat :
  - À contacter
  - Entretien
  - Retenu
  - Refusé
- Modifier la note sur 5.
- Ajouter un commentaire.
- Supprimer un candidat après confirmation.
- Rechercher et filtrer les candidats par statut.

### 3. Recherche et filtre des dépôts
- Rechercher un dépôt par son nom.
- Filtrer les dépôts par langage de programmation.
- Combiner la recherche et le filtre.
- Afficher un message lorsqu'aucun dépôt ne correspond.

### 4. Optimisation des performances
- Mise en place d'un système de cache avec `localStorage`.
- Conservation des profils consultés pendant 10 minutes.
- Chargement du profil et des dépôts en parallèle avec `Promise.all`.
- Réduction des requêtes répétées vers l'API GitHub.

## Technologies utilisées

- HTML5
- CSS3
- Tailwind CSS
- JavaScript ES6+
- GitHub API
- MockAPI
- LocalStorage
- Fetch API
- Git & GitHub

## Architecture du projet

```text
DevScope/
│
├── index.html
├── profil.html
├── shortlist.html
│
├── page-js/
│   ├── config.js
│   ├── api.js
│   ├── cache.js
│   ├── utils.js
│   ├── pagerecherch.js
│   ├── pageprofile.js
│   └── pageshortlist.js
│
└── README.md
```

## Installation et utilisation

1. Cloner le dépôt GitHub :

```bash
git clone URL_DU_DEPOT
```

2. Ouvrir le dossier du projet.

3. Lancer le fichier `index.html` avec Live Server.

4. Rechercher un développeur avec son nom d'utilisateur GitHub.

5. Consulter son profil et ajouter le candidat à la shortlist.

## APIs utilisées

**GitHub API :** récupération des profils publics et des dépôts.

**MockAPI :** stockage et gestion des candidats dans la shortlist avec les opérations POST, GET, PUT et DELETE.

## Version

- Version 1.0 : première version de l'application.
- Version 2.0 : ajout de la modification et suppression des candidats, recherche et filtre des dépôts et système de cache.

## Auteur

**Bouchra Ramzi**

Projet réalisé dans le cadre de la formation Développement Digital – Full Stack à YouCode.
---
**DevScope V2 – Simplifier le recrutement des développeurs.**