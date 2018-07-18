![](images/header.jpg)

# Javascript VueJS/Mobile.

Le but de ce projet est de vous permettre de compléter l'acquisition des compétences pour les modules `Javascript` et `Mobile`.

⚠️ Faites d'abord un point sur les compétences qui vous manquent ⚠️

Ce projet est découpé en plusieurs parties :

* Une sur du Javascript permettant de voir les compétences du module `Javascript`.
* Une sur du Javascript avancé avec notamment le framework VueJS.
* Une sur la partie mobile.

La partie 3 peut être abordée avant la fin du module 2. Gardez vous au moins une journée ( probablement deux en fonction des compétences manquantes pour spécifiquement travailler sur la partie mobile ).

### Modalités de rendu.

Tout votre travail doit être fait en utilisant **Git**. Votre avancement devra être présenté dans des commits, sous la forme suivante :
- Un commit minimum par exercice, avec un message reprenant l'intitulé de l'exercice
- Chaque commit contient les modifications de code **et** une modification du sujet pour renseigner l'avancement. 

( Exemple de commit )
Exemple pour le [premier exercice](https://github.com/campus-digital-grenoble/alternance-rattrapage-mobile-js#mise-en-place-dune-page) :

<img width="956" alt="git-commit-list" src="https://user-images.githubusercontent.com/632197/42624459-bc56d8ac-85c5-11e8-83a5-b9058dd9c938.png">

*Les fichiers readme sont [au format Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Pour chaque exercice que vous compléterez, cochez la case dans le sujet en rajoutant une croix :* 
[Exemple de 1er commit](https://user-images.githubusercontent.com/632197/42624447-b7be13a0-85c5-11e8-8c31-4e2a1b191e45.png)
[Exemple de 2nd commit](https://user-images.githubusercontent.com/632197/42624453-ba0e3568-85c5-11e8-9e49-c495b5edee2c.png)

➡️ **Commencez donc par forkez ce repo, et cloner votre fork. Vous aurez ainsi un projet dont vous serez propriétaire, qui contiendra ce readme à compléter**

### Description du sujet.

Nous allons réaliser une interface d'administration d'une **application web permettant de gérer des projets**.

Voici quelques fonctionnalités que nous souhaitons :

* Pouvoir lister la liste des projets.
* Pouvoir ajouter un projet.
* Pouvoir supprimer des projets.
* Pouvoir éditer des projets.

## Partie 1 : Javascript

### Mise en place d'une page

- [ ] Créez une simple page HTML avec un titre.
- [ ] Ajoutez les libraries jQuery et Bootstrap qui nous serviront pour la suite du développement.

Une fois que tout fonctionne, faites un premier commit ( vous aurez sûrement besoin d'initialiser le repository git ). Quelle est la commande à utiliser ? 🤔

### Récupération des données et affichage simple.

- [ ] Créez dans votre fichier Javascript une variable dont la valeur correspond au tableau suivant :

<details>
 <summary>Exemple de données ( cliquer pour dérouler )</summary>
 
```js
[
  {
    "_id": "5b3e3da860e7c6eeb88e3ceb",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ZENTURY",
    "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da85d52b4482e60904a",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "POLARAX",
    "creation": "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da830d91c6264ec2371",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "BICOL",
    "creation": "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da84172d52b597c35ca",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "CYTREX",
    "creation": "Tue Oct 06 1970 07:07:42 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8bdabcef689e8f0d4",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "PLAYCE",
    "creation": "Sun Aug 29 2010 07:52:18 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8f5132e9b61630c5e",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "NETROPIC",
    "creation": "Fri Nov 17 1989 09:10:32 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da83cec1f4a3f959388",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "UNISURE",
    "creation": "Tue Aug 09 2005 02:26:51 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da83319a70043710f9f",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "CALCU",
    "creation": "Mon Jan 14 1980 12:08:39 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8dfc260a3993d2e64",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "QUADEEBO",
    "creation": "Thu Jan 08 2009 03:25:20 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8a8b5ffda3cf89cc0",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "PROXSOFT",
    "creation": "Sun Jan 04 1998 23:19:53 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da87d3d148f090316ca",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "VERBUS",
    "creation": "Mon Mar 12 1990 07:33:18 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8e734d6f18fd20d99",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "FURNITECH",
    "creation": "Fri Jan 15 1971 15:23:19 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da84769754f62adcd1e",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ZENTHALL",
    "creation": "Mon Sep 26 1994 07:13:17 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8e0ca663902594537",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "BEADZZA",
    "creation": "Sun Dec 07 1975 14:46:01 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da88c8a4ff9e7a470af",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ENERSOL",
    "creation": "Fri Oct 28 2016 03:41:22 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8971220d673089795",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ORBIN",
    "creation": "Wed Mar 17 1999 20:59:11 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8b36fc54ea95f52fe",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ANDRYX",
    "creation": "Sat Apr 20 2013 16:19:59 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8387a4b96cd64ac5c",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "MARKETOID",
    "creation": "Wed Apr 14 2004 19:06:20 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8524620a282935367",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "COMBOGENE",
    "creation": "Thu Apr 02 1998 14:13:33 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8bd1847d4bd46ceb3",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "PASTURIA",
    "creation": "Fri Jan 26 1979 22:25:57 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da83802b7161e97bcb5",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ECRAZE",
    "creation": "Sun Jul 30 1989 18:07:17 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da81b7d9fdc1ac4a598",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "KEEG",
    "creation": "Tue Nov 23 1976 03:32:12 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da8408a1a197944bb07",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "SHOPABOUT",
    "creation": "Sun Jun 24 1990 03:34:24 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da855907b132f341230",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "ZILLAR",
    "creation": "Mon Oct 10 2016 19:36:16 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da8a72b0faaac30690b",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "EQUITAX",
    "creation": "Fri Sep 11 1992 06:15:12 GMT+0200 (Central European Summer Time)"
  },
  {
    "_id": "5b3e3da85447219ab25178da",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "DIGIPRINT",
    "creation": "Thu Dec 10 1981 23:31:45 GMT+0100 (Central European Standard Time)"
  },
  {
    "_id": "5b3e3da861f2d927949fa8da",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "PUSHCART",
    "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
  }
]
```
</details>

Est ce que c'est mieux de déclarer la variable avec `let` ou `const` 🤔 ?
*Votre réponse :*

## Afficher dans une table bootstrap avec JQuery.

Nous voulons afficher une table avec sur chaque ligne les informations d'un projet :

- L'image.
- Le nom.
- Le statut ( actif ou non ).
- La date de création.

- [ ] Ajoutez dans votre document html une table avec une en tête comprenant ces 4 colonnes.

- [ ] Enfin, affichez autant de lignes dans la table qu'il y a d'éléments dans votre tableau.

Voici un exemple de résultat :

![](images/js-table-bootstrap.png)


## Champ de recherche.

Nous voulons pouvoir chercher dans la table un projet par son nom.

Avant de se pencher sur l'interface écrivons la fonction de recherche.

* Combien la fonction prend-elle de paramètres ?
* De quel type sera le résultat retourné ?

Avant d'écrire du code, prenez un papier et un crayon pour écrire l'algorithme.

```js
function research() {

}
```

- [ ] Complétez la fonction, vérifiez notamment qu'il y a 5 projets commençant par la lettre `P`, mais un seul commençant par les lettres `PO`.

- [ ] Ajoutez un input au dessus du tableau et faites en sorte que à chaque fois que l'utilisateur tape une lettre, on lance la fonction de recherche et on met à jour la vue.

- [ ] Les noms des projets étant en majuscule, convertissez la saisie de l'utilisateur avant de lancer votre fonction de recherche.

Voici un exemple d'interface auquelle vous [pourriez parvenir](http://recordit.co/nFSyim9OGw)

## Trier par date croissante et/ou décroissante.

- [ ] Nous allons ajouter une icone dans le header de notre table, lorsque nous cliquerons dessus le tableau sera trié du plus récent au plus ancien.

Vous pouvez par exemple utiliser la très connue librarie [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css)

La fonction [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort) de Javascript vous aidera beaucoup.

Voici un exemple d'interface à laquelle vous [pourriez parvenir](http://recordit.co/Uvb85D470w)

- [ ] Autre idée : trier par ordre alphabétique les noms des projets.

## Ajouter un nouveau projet.

- [ ] Faites un formulaire d'ajout d'un projet, je vous propose pour cela d'utiliser les [fenêtres modales de bootstrap](https://getbootstrap.com/docs/4.0/components/modal/) afin d'avoir le formulaire dans une modale.

Voici un exemple de résultats :

![](images/js-create-project.png)


## Partie 2 : VueJS

### 1) Initialiser une application Vue.

- [x] Commençons par créer une application VueJS, pour cela utilisons l'interface en ligne de commande officielle `vue-cli`.

Si ce n'est pas fait, il faut d'abord l'installer avec npm :

```
npm install --global vue-cli
```

**Question :** Rappeler ce qu'est npm et pourquoi nous utilisons l'option --global ?

*Votre réponse :*npm est un gestionnaire de packages, on l'installe en global pour qu'il soit accessible de partout

- [x] Créez maintenant l'application :

```
vue init webpack [NOM_PROJET]
```

Des questions vont vous être posées, voici un exemple de choix :

![](images/choix-vue-cli.png)


* Quels sont des bons réflexes à avoir quand vous télécharger un nouveau projet ? Quels fichiers regarder ? Avant même de commencer à lancer l'application et sans regarder le code vous pouvez apprendre plein de choses.

*Votre réponse :* regarder le readme et le package.json

* Si vous regardez le fichier `README.md` du projet vous voyez que trois commandes sont indiquées, quel est le but de chacune ?

*Votre réponse :* npm install (pour installer les packages et dépendances), npm run dev (pour lancer l'application) et npm build(construire le script)
 
* Lancez le projet.

- [x] Une fois que tout fonctionne, faites un premier commit ( vous aurez sûrement besoin d'initialiser le repository git ). Quelle est la commande à utiliser ? 🤔

*Votre réponse :* git init


### 2) Analyse du contenu du starter.

- [x] Prenez le temps d'analyser le contenu du répertoire créé par `vue-cli`, et de comprendre l'utilité des fichiers.

| Question                      | Réponse           |
| -------------                 |:-------------:|
| Nombre de dépendances de l'application|
| Dossier `src/`                   |       |
| Dossier `build/` |       |
| Fichier `App.vue` |       |
| Fichier `main.js` |       |
| Dossier `router/` |       |


### 3) Créer un premier composant.

##### 1) Composant statique

Nous allons travailler sur le même type de données que dans l'exercice précédent.

C'est à dire qu'un projet respecte ce format : 

```js
{
  "_id": "5b3e3da861f2d927949fa8da",
  "isActive": false,
  "picture": "http://placehold.it/32x32",
  "name": "PUSHCART",
  "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
}
```

- [x] Changez le contenu du composant `HelloWorld.vue` afin qu'il puisse afficher un projet.

Voici un exemple de style que cela pourrait avoir :

![](images/vue-project-comp.png)

- [x] Renommez le fichier pour qu'il reflète son contenu.

##### 2) Changer le style

- [x] Faites en sorte de changer le style entre un projet actif et un projet non actif, par exemple, la couleur du nom du projet ou la couleur de fond.


##### 3) Marquer l'état avec une checkbox

- [x] Plutôt que d'écrire du texte, vous allez marquer l'état actif ou non avec une checkbox, la checkbox doit être fonctionnelle et permettre le changement.

Voici un [exemple](http://recordit.co/pkAPiKSGsg.) de résultat auquel vous pourriez parvenir.

Ressources : 
  * https://vuejs.org/v2/guide/index.html
  * https://github.com/vuejs/vue-devtools ( devtools de Vue, à installer absolument ! )


### 4) Afficher la liste des projets.

VueJS offre la possibilité de faire des listes très facilement, nous allons le faire de deux manières.

##### 1) Sans créer de nouveau composant.

- [x] Dans le code du composant précédemment créé, faites les modifications pour afficher la liste.

##### 2) En créant un nouveau composant.

- [x] On souhaite séparer le composant affichant la liste, `ProjectsList`, de celui affichant un élément de la liste, `Project` ( c'est extrêmement classique ), ce qui nous permettra de réutiliser le composant `Project` indépendamment.

* Comment passe-t-on de la donnée à un composant enfant ? Grâce aux props
* Quels sont les avantages en procédant ainsi ? Un composant peut réutiliser les données présentes dans un autre composant. 

Ressources : 
  * https://vuejs.org/v2/guide/components-props.html#ad
  * https://vuejs.org/v2/guide/index.html
  * https://vuejs.org/v2/guide/list.html

Voici un exemple : ![](images/vue-projects-list.png)

### 5) Faire une liste dans une nouvelle route.

- [ ] Nous allons séparer la vue détaillée d'un projet de la vue contenant la liste, qui sera alors affichée sous forme de table.

##### 1) Créer une nouvelle route

- [ ] Ajoutez une nouvelle route dans votre projet, vous aurez besoin de créer un nouveau composant qui contiendra la nouvelle table.

##### 2) Afficher le tableau des noms des projets.

- [ ] Affichez sous forme de table la liste des projets avec uniquement leur nom.

##### 3) Cliquer sur un élément pour passer à une autre page.

- [ ] Dans ce nouveau composant, faites en sorte que lorsqu'on clique sur un élément de la table, alors on est redirigé vers la page présentant le détail de ce projet.

Vous aurez besoin de passer des paramètres d'une Vue à l'autre : https://router.vuejs.org/guide/essentials/passing-props.html

Voici un [exemple](http://recordit.co/dJ5uhyVRK0) d'interface à laquelle vous pourriez parvenir.


### 6) Intégrez les fonctions de recherche et de tri de l'exercice précédent.

- [ ] En vous basant sur ce que vous avez fait à l'exercice précédent, intégrez dans votre application une fonction de recherche et de tri par date de création des objets.

* Quelle est la différence de logique entre JQuery et VueJS ?

Ressources : 
  * https://vuejs.org/v2/guide/list.html

### 7) Faire un appel HTTP.

Jusqu'à maintenant, toutes les données sont statiques. Dans la vraie vie, les données proviennent très généralement d'une API.

Nous allons en utiliser une dans cet exercice, celle ci est disponible à cette [adresse](https://daily-standup-campus.herokuapp.com/).

Vous allez d'abord devoir intégrer une librairie permettant de faire des appels HTTP.
La plus utilisée avec Vue est [axios](https://github.com/axios/axios).

Avant de vous lancer dans le code pour appeler une API, il existe des outils permettant de tester une API sans écrire la moindre ligne.
Le plus connu est probablement [POSTMAN](https://www.getpostman.com/), celui ci peut s'installer sous la forme d'une extension chrome.

Une fois fait, vous pouvez tenter de récupérer les projets d'un utilisateur en utilisant cette URL :

```
https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg
```

Celle ci contient un token d'identification, nous verrons plus tard comment cela fonctionne.

- [ ] En utilisant axios, mettez à jour votre code pour qu'il affiche les données provenant de l'API.

*Attention, la structure d'un projet est différente de celle utilisée précedemment, plus de `picture`, plus de `isActive` mais d'autres infos sur le créateur et les collaborateurs du projet.*

Voici un exemple d'adaptation du composant :

![](images/vue-comp-adapt.png)

* À quel moment de la vie d'un composant faisons-nous un appel HTTP ?
*Votre réponse :*

* Comment faire pour utiliser une librairie externe en VueJS ?
*Votre réponse :*

* Comment savoir si la requête est en cours ou non ? Ajouter un loader pour montrer que la requête est en cours.
*Votre réponse :*

Ressources : 
  * https://vuejs.org/v2/guide/list.html
  * http://putaindecode.io/fr/articles/js/es2015/promises/

### 8) Faire une requête DELETE.

Jusqu'à maintenant, nous avons fait une requête pour récuperer des données, mais nous voulons aussi modifier des données existantes.

* Quels sont les 4 types de requêtes les plus courantes en HTTP ?
*Votre réponse :*

* À quoi correspond la notion de promesse ? Pourquoi en a-t-on besoin en Javascript ? Quelles sont les alternatives ?
*Votre réponse :*

- [ ] Dans le tableau des projets, ajoutez une colonne permettant de supprimer un projet, la suppression doit s'accompagner d'un appel à l'API afin de réellement supprimer le projet.


Voici un [exemple de résultat](http://recordit.co/4zIK4ILdKU) auquel vous pourriez parvenir.

### 9) Formulaire d'authentification.

Comme déjà mentionné l'API est protégée par authentification.
- [ ]  Ajoutez un formulaire d'authentification vous permettant d'être ensuite authentifié auprès de l'API.

* Quelle est la route d'authentification ?
*Votre réponse :*

- [ ]  Ajoutez un formulaire "Mot de passe oublié ?". En appelant la bonne route, un mail sera envoyé à l'adresse email spécifiée. Ce mail contiendra un lien qui devra renvoyer sur une nouvelle page de votre application permettant à l'utilisateur de choisir son nouveau mot de passe.

Ressources :
* https://paweljw.github.io/2017/09/vue.js-front-end-app-part-3-authentication/

### 10) Implémentez un CRUD

- [ ]  Complétez votre implémentation en un CRUD complet sur la ressource Projet.

Ressources :
  * https://fr.wikipedia.org/wiki/CRUD

## Partie 3 : mobile

Les compétences manquantes sont principalement le mémo ainsi que le schéma, reprenez les présentations faites en groupe pour valider ces compétences.

Pour pratiquer Cordova, vous pouvez prendre votre application VueJS précédemment faite et l'encapsuler dans Cordova : 

Ressources :
  * https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b


