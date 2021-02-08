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
You will also see that the Tailwind directives have been added as an import at the top of your **styles.[s]css** file
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

You can read more about it in the article mentionned above, but now after having your dependencies installed, just run

```
npm start
```

When the build succeeds, you will notice a huge file size for your styles, which is to be expected since Tailwind comes with thousand of utility classes

```
pic of dev build
```

But this is where **postcss** kicks in when you create a production build which gets rid off all the unwanted and unused CSS

Now you can navigate to your local url and you should see the page render just like the picture of the landing page above.

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

- [**Tailwind UI Components**](https://tailwindui.com/preview)
  - Hero Section
  - Feature Section
- [**Unsplash**](https://unsplash.com/)
  - [**Stakkholtsgja canyon, Iceland**](https://unsplash.com/photos/3l3RwQdHRHg) <span>Photo by <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jonatan Pie</a> on <a href="https://unsplash.com/s/photos/northern-lights?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  - [**Wet mountain valley**](https://unsplash.com/photos/Bkci_8qcdvQ) <span>Photo by <a href="https://unsplash.com/@kalenemsley?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kalen Emsley</a> on <a href="https://unsplash.com/s/photos/mountain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  - [**Peaceful waterfall**](https://unsplash.com/photos/YvkH8R1zoQM) <span>Photo by <a href="https://unsplash.com/@jeffreyp?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jeffrey  Workman</a> on <a href="https://unsplash.com/s/photos/river?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  - [**Tree in forest of plants**](https://unsplash.com/photos/sMQiL_2v4vs) <span>Photo by <a href="https://unsplash.com/@veeterzy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">veeterzy</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  - [**Iceland Cave**](https://unsplash.com/photos/CZABLi1Lbk4) <span>Photo by <a href="https://unsplash.com/@mfbehrens99?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Michael Behrens</a> on <a href="https://unsplash.com/s/photos/cave?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
- **Vimeo**
  - [**Underwater Planet**](https://vimeo.com/196769464) by [**Darek Sepiolo**](https://vimeo.com/user827458)
- [**Nrwl**](https://nrwl.io) - huge shoutout to the entire team with special mention to:
  - [**Brandon Roberts**](https://brandonroberts.dev/about/) ([**@brandonroberts**](https://twitter.com/brandontroberts))
  - [**Zack DeRose**](https://t.co/lLJOZbAZWY?amp=1) ([**@zackderose**](https://twitter.com/zackderose))
- [**Community**](https://expressjs.com)
  - [**Amadou Sall**](https://www.amadousall.com/) ([**@ahasall**](https://twitter.com/ahasall)) - Don't miss his talk on Tailwind at NGConf 2021
  - **Ibrahima Ciss**] ([**@bionik6**](https://twitter.com/bionik6))
  - [**Bram Borggreve**](https://beesoftlabs.dev/es/inicio) ([**@beeman_nl**](https://twitter.com/beeman_nl))