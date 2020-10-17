[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/upgrade-guide/workflows/CI/badge.svg)](https://github.com/ember-learn/upgrade-guide/actions?query=workflow%3ACI)
[![This project uses Prettier for code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# upgrade-guide

# This is a working repository for the Ember Upgrade Guide.

## Routine minor version maintenance upgrades:- 

Let's say you are upgrading an app from v3.4 to v3.8. Although you heard there are some new features, your main goal is to keep up with security updates. To do this kind of version upgrade, follow the instructions here in the CLI Guides. That process will make sure that any peer dependencies of the ember.js core codebase get upgraded too. Automated tools will help you make the right changes to package.json and other files. The point of a minor version bump is that you shouldn't need to change anything in your app when you upgrade - it should all keep working, whether or not you choose to adopt new syntaxes and features.

## Using new features
Once you have upgraded an app's version, some new features may be available out of the box. On the other hand, some features will require that you enable them specifically in your app's configuration, since they may change the app's default behavior.

The best way to discover new features is to read the release blog posts. If a new feature requires you to opt-in, it's called an optional feature. Follow the optional features guide to learn which optional features are available in your app's version of Ember, and how to enable them. In many cases, codemods will be available to help you make syntax-related updates. A codemod is a tool that rewrites your existing code into a new syntax. When they are available, they can save a lot of time that you would spend making edits by hand.

## Managing deprecations
If an API you are using will be going away in the next major version of Ember, you will see a deprecation warning in the developer console. Sometimes, they will be deprecation warnings caused by code in your app, and other times, they may be caused by an addon.

For more guidance on what to do with deprecations, visit Handling Deprecations, check out the Ember Inspector tools for deprecations, or read about the specifics in the Deprecations Guides.

## Upgrading to Octane
Octane was a big shift in Ember's syntax, features, and mental models! If you are in the process of upgrading an existing app to use Octane patterns, check out our dedicated Octane Update Guide.

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


## Code Generators

Please use Ember CLI to create files in the `app` folder. You can run `ember help generate` for more detail.

### Adding the latest Ember version

When a new version of Ember is released (for example, version 3.20), we need to manually update this app. Let's look at how to provide information on version number, features, and deprecations.

First, we add the version number to the `VERSIONS` array:

```javascript
// app/utils/ember-versions.js

export const VERSIONS = Object.freeze([
  '1.0 Prerelease',
  ...
  '3.19',
  '3.20', // <-- new!
]);
```

Next, we use custom blueprints to create Markdown files that can list features and deprecations for Ember.js, Ember Data, and Ember CLI.

```bash
ember generate upgrade-ember-model 3.20
ember generate upgrade-data-model 3.20
ember generate upgrade-cli-model 3.20
```

Each Markdown file, by default, lists 1 deprecation and 1 feature:

```markdown
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

If the release has no deprecations (or no features), you can delete the default item. If the release has more than 1 deprecation (or more than 1 feature), you can copy-paste the default item to list all. 

For example, Ember CLI v3.20 has 2 deprecations and 1 feature. The Markdown file looks like,

```markdown
---
version: '3.20'
changes:
  -
    deprecation: true
    title: "Usage on Node 13 will now issue a warning"
    link: "https://blog.emberjs.com/2020/07/29/ember-3-20-released.html"
  -
    deprecation: true
    title: "Usage of PACKAGER is deprecated"
    link: "https://blog.emberjs.com/2020/07/29/ember-3-20-released.html"
  -
    feature: true
    title: "Syncing Blueprints"
    link: "https://blog.emberjs.com/2020/07/29/ember-3-20-released.html"
---
```

⚠️ Please note that the value of `version` must be a string.

### Where to find lists of features and deprecations

Please check the release notes and `CHANGELOG`.

- [Ember.js](https://github.com/emberjs/ember.js)
- [Ember Data](https://github.com/emberjs/data)
- [Ember CLI](https://github.com/ember-cli/ember-cli)

You can also check [Ember Blog - Releases](https://blog.emberjs.com/tags/releases.html).


## Contributing

Have a look at open [issues](https://github.com/ember-learn/upgrade-guide/issues). 

### Contributors

- Abhilash LR
- Jenny Judova
- Kenneth Larsen 
- Robert Jackson 


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
