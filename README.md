# Vue Web Template
Release 20/09/2019

TODO: 
- Axios and Vuex complete crud integration. 
- Documentation improvement


*** This repository is in current development, don't use it in production ***
WebApp/site vuejs boilerplate using bootstrap. The obvious purpose of this is to get a Vuejs Starter Kit with just a git cloning and npm install command.

includes
- axios
- vuex
- vue-router
- moment
- i18n
- Bootstrap-Vue

I18n is configured as well as Router. You'll find also examples with axios and vuex in order to just modify the base url you are using. 

## Added files and folders for this project

To be documented.


## Project setup
```
npm install
```

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
