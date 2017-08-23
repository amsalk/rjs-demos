## Requirements

- Install Node by following instructions on their [homepage](https://nodejs.org/en/)
- Install [bower](https://bower.io/), run `$ npm install -g bower`
- Run `$ bower install` to install project dependencies

## Basic

- Explain what `define` and `require` functions do?
- What are two main types of modules?
- Name two different ways how to "bootstrap" requirejs application.
- Create two modules.
  - `models/car` with the value of constructor function
  - `bootstrap/app` which instantiate two 'models/car' objects
- Create and load basic rjs config file. Configure it so every module in `ctrls/*` form with get loaded from `~/scripts/controllers/` folder.
- Adjust config file and define `low` module with value of [lodash](https://lodash.com/) global variable `_`.

## Simple

- Create simple html boilerplate app.
- Use `domReady` plugin. With use of this plugin print "ready" to the console.
- In requirejs config define `lodash`, `angularjs` and `jquery` as modules.
- Create simple application module `app` with value of angular module called "application".
- Create simple `ctrls/calc` module with value of angular controller registered in `app` module.
- Use `domReady` and bootstrap your application programatically.

## Advanced
