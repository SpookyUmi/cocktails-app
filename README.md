# Cocktails App

Une web app simple permettant d'afficher 3 cocktails aléatoires qui changent à chaque accès à la page à l'aide de l'API TheCocktailDB.

## Configuration du projet

J'ai choisi de coder mon app avec Vue3 comme framework JS et Vite comme build tool. Pour ce faire, j'ai utilisé la commande `npm create vue@latest`.

### Pourquoi Vite

C'est un outil performant, rapide et simple. C'est un build tool qui scale mieux que Webpack par exemple. Pour plus de détails, voici un lien vers une présentation de Vite que j'ai réalisée auprès de mes collègues dans mon précédent poste : [Vite](https://docs.google.com/presentation/d/1CFz4IQNBfzCLc91L6FSB2lVgjfYTVHl-/edit?usp=drive_link&ouid=116990524144160548293&rtpof=true&sd=true)

### ESlint & Prettier

En plus d'assurer un code propre, cohérent et sans erreurs basiques, ces outils, bien configurés, offrent une meilleure expérience de développement : on gagne du temps sur du débuggage de base, et sur le formatage. De plus, en établissant des règles et un cadre fixes, cela rend la collaboration entre développeurs plus simple et fluide, notamment lors de code reviews ou de pair programming.

On peut également utiliser un fichier de configuration `.editorconfig`, utile en cas de collaboration sur une même codebase, pour éviter que sa propre config ESlint/Prettier personnelle n'entre en collision avec celle du projet.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
