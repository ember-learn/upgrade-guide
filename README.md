[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/upgrade-guide/workflows/CI/badge.svg)](https://github.com/ember-learn/upgrade-guide/actions?query=workflow%3ACI)

# upgrade-guide

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a working repository for the Ember Upgrade Guide.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd upgrade-guide`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Adding the latest Ember version 
To add new versions of Ember use the following commands in your terminal:

```ember generate upgrade-ember-model X.XX```
```ember generate upgrade-data-model X.XX```
```ember generate upgrade-cli-model X.XX```

You will have to manually add the new version to the VERSIONS array
```/upgrade-guide/app/models/versions.js```

The structure of generated markdown files is as follows:

```
---
version: "3.20"
changes:
  -
    deprecation: true
    title: ""
    link: ""
  -
    feature: true
    title: ""
    link: ""
---
```

If the release has no features or depresaions feel free to delete that section. If it has multiple deprecations/features you will need to manually copy paste those sections. 

For example:

```
---
version: ""
changes:
  -
    deprecation: true
    title: ""
    link: ""
  -
    deprecation: true
    title: ""
    link: ""
---
```

**PLEASE NOTE VERSION MUST BE A STRING**

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

### Contributing

Have a look at open [issues](https://github.com/ember-learn/upgrade-guide/issues). 

### Contributers
Abhilash LR
Jenny Judova
Kenneth Larsen 
Robert Jackson 

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
