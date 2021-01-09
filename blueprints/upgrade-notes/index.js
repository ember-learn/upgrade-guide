'use strict';

module.exports = {
  description: [
    'Input:',
    '  Ember release version number (e.g. `3.25`)',
    '',
    'Output:',
    '  The generator creates 3 Markdown files for the specified',
    '  release version.',
    '',
    '  Use these files to record features and deprecations for',
    '  ember-source, ember-data, and ember-cli projects.',
    '',
    'Examples:',
    '  ember generate upgrade-notes 3.25',
  ].join('\n\t'),
};
