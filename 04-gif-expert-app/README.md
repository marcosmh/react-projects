# Gif Expert App

## gif-expert-app

-------------------------

### Crear Proyecto
* yarn create vite git-expert-app

### Instalar dependencias
* yarn install

### Levantar App
* yarn dev


### Documentación

* https://es.legacy.reactjs.org/docs/faq-structure.html

* https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

### GIPHY Developer 

* https://developers.giphy.com/dashboard/

### Compilar
* yarn build

###
* https://www.netlify.com/

### Testing Library

* yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
* yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
* yarn add --dev whatwg-fetch

* Actualizar los scripts del package.json

"scripts: {
  ...
  "test": "jest --watchAll"


* Crear la configuración de babel babel.config.js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

* crear Jest config y setup:

jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

* yarn test