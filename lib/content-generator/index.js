'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const MergeTrees = require('broccoli-merge-trees');

const COMMON_CONFIGS = {
  attributes: ['version', 'changes'],
  collate: true
}

const EMBERJS_JSON = new StaticSiteJson('source/ember-js-changes', {
  ...COMMON_CONFIGS,
  collationFileName: 'all.json',
  contentFolder: '/api/ember-js-changes',
  type: 'ember-js-change'
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
      EMBERJS_JSON,
      EMBER_CLI_JSON
    ]);
  }
};
