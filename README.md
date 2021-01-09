[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/upgrade-guide/workflows/CI/badge.svg)](https://github.com/ember-learn/upgrade-guide/actions?query=workflow%3ACI)
[![This project uses Prettier for code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# upgrade-guide

This is a working repository for the Ember Upgrade Guide.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)


## Installation

* `git clone <repository-url>` this repository
* `cd upgrade-guide`
* `yarn install`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `yarn test`
* `yarn test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `yarn build` (production)

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
# Creates 3 Markdown files in the `source` directory
ember generate upgrade-notes 3.20
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
