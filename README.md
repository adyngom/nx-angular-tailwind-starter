# NX Angular Tailwind Starter

<p align="center"><img src="https://raw.githubusercontent.com/adyngom/nx-angular-tailwind-starter/readme-media/images/nx-angular-tailwind-starter.jpg"></p>

[Tailwind CSS](https://tailwindcss.com/) is a superb utility first CSS framework that has taken the world of component first development by storm. It can be sometimes challenging to have it up and running in an Angular project let alone in an [Nx workspace](https://nx.dev).

Though native support has been announced by the [Angular team in upcoming versions](https://github.com/angular/angular-cli/commit/73b409881f71a8235769a345356dcde3c568d0c3), enterprise users who might want to take advantage of it might not have the luxury of quickly updating their versions.

# Meet Tukki ✈️

**Tukki** means travel in my native tongue Wolof spoken in [Senegal](https://www.cnn.com/travel/article/senegal-travel-parts-unknown/index.html) and the [Gambia](https://www.lonelyplanet.com/the-gambia). It was a perfect name to give for a starter that will allow you to take a journey into Tailwind within an Angular project - first class with no frustations 😀⛱️

## Quick Start & Documentation

You could just zip the project and check out the setup if you already have an existing project or you could just clone it and take it for a spin. If you choose the latter these steps might be helpful:

I assume you already have the Nx Cli installed, if not start with

```
npm install -g nx
```

you can swap **yarn** for **npm** if used as your package manager.

After cloning the repo cd into it and just run

```
npm install
```

you will see the structure below with **tukki** as the default app, a **shared/ui** folder under **libs** which host the bulk of the Tailwind UI components.

**Tailwind** was installed using the [**@ngneat/tailwind**](https://github.com/ngneat/tailwind) plugin - I highly recommend checking out the article - so you will see a couple of files that were added in root by the plugin: **tailwind.config.js** and **webpack.config.js**

In a short summary the plugin write an external webpack config file that properly adds the tailwind configuration, this gets picked by your build process using the [**@angular-builders/custom-webpack**](https://www.npmjs.com/package/@angular-builders/custom-webpack) package.

You can see the modified entry in the \*\*angular.json" file

```json
"architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          ...
```

You can read more about it in the article mentionned above, but now after having your dependencies instlled, just run

```
npm start
```

And you should see the page render just like the picture of the landing page above.

## Now what??

Yeah you have an Angular project inside an Nx workspace with Tailwind properly setup - it's getting hot in here 🔥🔥🔥🔥

Take a look at the **libs/shared/ui** folder and see how I've tried to emulate the model from Angular material by having everything reusable as a module, you will find individuals components under the **libs/shared/ui/partials** folder and how everuthing gets imported in the **app.module.ts** file

```javascript
/**
 * Shared modules
 */
import {
  SharedUiHeaderModule,
  SharedUiHeroModule,
  SharedUiPromoModule,
  SharedUiPartialsModule,
  SharedUiFooterModule,
} from '@tukki/shared/ui';
```

If you like that type of flow, well you are in for a treat, if not no hard feelings do what works for you - feel free to delete and replace as you see fit.

🧙🏾 Tailwind's magic is sprinkled all around the project already and that's the only thing that matters

## Copyrights notice and shoutouts

All the images use in the starter page are copyrighted to their respecvtive owners and should not be used in a commercial project without their consent or within the boundaries of their provided license agreements.

- [Tailwind UI Components](https://tailwindui.com/preview)
  - `Hero Section`
  - `Feature Section`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@tukki/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
