'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const MergeTrees = require('broccoli-merge-trees');

const COMMON_CONFIGS = {
  attributes: ['version', 'changes'],
  collate: true
}

const DEPRECATIONS_JSON = new StaticSiteJson('source/deprecations', {
  ...COMMON_CONFIGS,
  collationFileName: 'all.json',
  contentFolder: '/api/deprecations',
  type: 'deprecation'
});

const EMBER_CLI_JSON = new StaticSiteJson('source/ember-cli-changes', {
  ...COMMON_CONFIGS,
  collationFileName: 'all.json',
  contentFolder: '/api/ember-cli-changes',
  type: 'ember-cli-change'
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return MergeTrees([
      DEPRECATIONS_JSON,
      EMBER_CLI_JSON
    ]);
  }
};
