# Vue Web Template
Release 20/09/2019

TODO: 
- Axios and Vuex complete crud integration with and without modals
- Documentation improvement


*** This repository is in current development, don't use it in production ***
WebApp/site vuejs boilerplate using bootstrap. The obvious purpose of this is to get a Vuejs Starter Kit with just a git cloning and npm install command.

The main Idea is to provide a proper working CRUD example, based on my experience on Yii2, with a complete toolkit for anywebsite creation. Even if Yii2 enables you to create quickly
and efficiently a webapp that works on steroïds, I was a tad frustrated, after a while, that I took habit of using the tight frontend/backend  integration in Yii2. 

Yes, you get something rapidly with Yii2, but at the end, you want the best of both worlds and also, to embrace the REST API way of doing apps. 

So came VUEjs which reminded me of Yii2 when it comes to try it out: you get something working quickly without a headache. 

I'm not a defender of one technology, (so please, no war of religions on technologies) But Yii2 and Vuejs worked for me. Plus, it is always a great deal of time investment when you dig deep into any framework.

I'm quite sure that you can get the same level of efficiency with Laravel and any other frontend framework like, Angular, React, ...and so on.

But this is about VUEJS :-)

This starter includes
- axios : for API calls
- vuex : for state mamangement
- vue-router : for routing
- moment : for date formating
- i18n : for internationalization
- Bootstrap-Vue : as a presentation framework
- Vue-PageTransition : for fancy navigation
- Vue js modal : well...for dialogs and so on
- vuetable 2 : for CRUD sake (like the gridview in Yii2)
- vue-iziToast : for pushing messages to the client

I18n is configured as well as Router. You'll find also examples with axios and vuex in order to just modify the base url you are using. 

## environment configuration
There are 2 .env files in the root of the app.
The env.local will be ignored by GIT.

To access an env variable use
```
process.env.VUE_APP_NAME
```
An example can be found in the home component.

## Added files and folders for this project

Nowadays we find a lot of folder arborescence based on the app you want to build.

In the components folder I've tried to group the components as best as I could but you can change all that with a a bit of refactor. I'm not a huge fan of deep tree folder hierachy because you have to click to much to get to the file you want to edit. 

So I limited myself and tried to stick to the original vucli folder hierachy.

### Component folder hierachy - Pages

In components you'll find a folder named "pages" which will contain website pages which are static predominently, like the about page.

### Component folder hierachy - Modals

If not used as a dialog, modals can be very complicated. In the CRUD example I've made it all about that. So I put them in that folder so we know that those are modal based components.

TODO: TO BE CONTINUED

## The CRUD thing with VUEX and AXIOS

To be documented.

## Usage for i18n

The translations are found in the /locales folder. They are in a json string form. In order to use them in the app/components use the following syntax

```
{{ $t('welcome') }} //welcome is declared in the locales/files.
```

Modify the i18n settings in the i18n.js file. Add any additional language in locales folder. The language selector is found in the NavigationBar component.
Make sure to adapt it as well.


The current language is found through
```
{{ $i18n.locale }}
```


## Routing
doc coming but it is there already


## Additional assets
Additional assets must be placed in the assets folder inside the src folder.
You can create any subfolder.

When you want to refer to an asset in that folder from whithin a component, use

```
<img alt="Vue logo" src="./../assets/img/logo.png">
```

add any new css or global file in the main.js file like this:

```
import './assets/css/custom.css'
```

I've found it to complicated to add font Awesome as a component so it is included as an asset. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve 
or vue serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Feel free to modify at will and/or suggest improvements.
