'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('source/deprecations', {
  attributes: ['link', 'version', 'title'],
  contentFolder: '/api',
  collate: true,
  collationFileName: 'deprecations.json',
  type: 'deprecation'
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return contentsJson;
  }
};
