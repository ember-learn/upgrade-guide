import { module, test } from 'qunit';
import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { a11yAudit } from 'ember-a11y-testing/test-support';

// When a new version is added, update these numbers
const LATEST_DELTAS = {
  version: '7.2',
  emberNewFeatures: 55,
  emberDeprecations: 36,
  emberDataNewFeatures: 21,
  emberDataDeprecations: 18,
  emberCLINewFeatures: 106,
  emberCLIDeprecations: 14,
};

module('Acceptance | changes', function (hooks) {
  setupApplicationTest(hooks);

  test('When we visit the changes route without query parameters, we see the features and deprecations that occurred since version 3.15', async function (assert) {
    await visit('/changes');

    // Check new features in Ember.js
    const newFeaturesInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberJS.length,
      LATEST_DELTAS.emberNewFeatures,
      `We see ${LATEST_DELTAS.emberNewFeatures} new features that occurred in Ember.js since version 3.15`,
    );

    // Check deprecations in Ember.js
    const deprecationsInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberJS.length,
      LATEST_DELTAS.emberDeprecations,
      `We see ${LATEST_DELTAS.emberDeprecations} deprecations that occurred in Ember.js since version 3.15`,
    );

    // Check new features in Ember Data
    const newFeaturesInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberData.length,
      LATEST_DELTAS.emberDataNewFeatures,
      `We see ${LATEST_DELTAS.emberDataNewFeatures} new feature that occurred in Ember Data since version 3.15`,
    );

    // Check deprecations in Ember Data
    const deprecationsInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberData.length,
      LATEST_DELTAS.emberDataDeprecations,
      `We see ${LATEST_DELTAS.emberDataDeprecations} deprecations that occurred in Ember Data since version 3.15`,
    );

    // Check new features in Ember CLI
    const newFeaturesInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberCLI.length,
      LATEST_DELTAS.emberCLINewFeatures,
      `We see ${LATEST_DELTAS.emberCLINewFeatures} new features that occurred in Ember CLI since version 3.15`,
    );

    // Check deprecations in Ember CLI
    const deprecationsInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberCLI.length,
      LATEST_DELTAS.emberCLIDeprecations,
      `We see ${LATEST_DELTAS.emberCLIDeprecations} deprecations that occurred in Ember CLI since version 3.15`,
    );
  });

  test('When we visit the changes route with query parameters, we see the features and deprecations that occurred between fromVersion and toVersion', async function (assert) {
    await visit('/changes?fromVersion=2.17&toVersion=3.3');

    // Check new features in Ember.js
    const newFeaturesInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberJS.length,
      8,
      'We see 8 new features that occurred in Ember.js between 2.17 and 3.3',
    );

    // Check deprecations in Ember.js
    const deprecationsInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberJS.length,
      9,
      'We see 9 deprecations that occurred in Ember.js between 2.17 and 3.3',
    );

    // Check new features in Ember Data
    const newFeaturesInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberData.length,
      5,
      'We see 5 new features that occurred in Ember Data between 2.17 and 3.3',
    );

    // Check deprecations in Ember Data
    const deprecationsInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberData.length,
      1,
      'We see 1 deprecation that occurred in Ember Data between 2.17 and 3.3',
    );

    // Check new features in Ember CLI
    const newFeaturesInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-feature]',
    );

    assert.strictEqual(
      newFeaturesInEmberCLI.length,
      2,
      'We see 2 new features that occurred in Ember CLI between 2.17 and 3.3',
    );

    // Check deprecations in Ember CLI
    const deprecationsInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-deprecation]',
    );

    assert.strictEqual(
      deprecationsInEmberCLI.length,
      1,
      'We see 1 deprecation that occurred in Ember CLI between 2.17 and 3.3',
    );
  });

  test('When we click the Choose different versions button, we are redirected to the index route', async function (assert) {
    await visit('/changes');
    await click('[data-test-link="Choose different versions"]');

    assert.strictEqual(currentURL(), '/', 'We see the correct URL.');
  });

  test('Accessibility audit', async function (assert) {
    await visit('/changes');
    await a11yAudit();

    assert.ok(true);
  });
});
