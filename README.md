# TP-Versionning

Application de sauvegarde d’albums et photos

## Table des matières

- [Installation](#installation)
- [Workflow de Développement](#workflow-de-développement)
- [Fonctionnalités](#fonctionnalités)
- [Contributeurs](#contributeurs)

---

## Installation

### Prérequis

1. Assurez-vous d'avoir Node.js et npm installés.

### Installation du projet

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/aminemn14/tp-versionning
   cd tp-versionning

   ```

2. Installez les dépendances :
   npm install react-router-dom
   npm install framer-motion
   npm install @heroicons/react

Workflow de Développement

1. Structure de Branches
   Nous utilisons une structure de branches suivant le modèle Git Flow :
   main : Contient la version stable, prête pour la production.
   develop : Branche de développement intégrant les nouvelles fonctionnalités testées.
   feature/\* : Chaque nouvelle fonctionnalité est développée dans une branche dédiée. Exemple : feature/manage-photos.
2. Étapes de Développement
   Créer une branche de fonctionnalité :
   Basée sur develop :

git checkout develop
git checkout -b feature/nom-de-la-fonctionnalité

Développer la fonctionnalité :
Codez la fonctionnalité et effectuez des commits fréquents et descriptifs :

git add .
git commit -m "Ajoute la fonctionnalité de gestion des photos"
Tests et Intégration :
Test de la fonctionnalité localement.
Revue de code en équipe (via une pull request vers develop).
Fusion dans develop :
Une fois les tests validés, fusion de la branche de fonctionnalité dans develop :

git checkout develop
git merge feature/nom-de-la-fonctionnalité
git branch -d feature/nom-de-la-fonctionnalité
Préparation de la Release :
Création d’une branche de release à partir de develop :

git checkout develop
git checkout -b release/v1.0.0

Effectuez les tests finaux, corrigez les bugs éventuels, puis fusionnez dans main pour la version stable :

git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"

Fonctionnalités
• Une connexion à l’application
• La possibilité d’ajouter, modifier, supprimer des albums photos
• La possibilité d’ajouter, modifier, supprimer des photos à l’intérieur d’un album

Contributeurs
Amine Moumen
Mathis Perrault
