import { module, test } from 'qunit';
import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | changes', function (hooks) {
  setupApplicationTest(hooks);

  test('When we visit the changes route without query parameters, we see the features and deprecations that occurred since version 3.15', async function (assert) {
    await visit('/changes');

    // Check new features in Ember.js
    const newFeaturesInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberJS.length,
      43,
      'We see 43 new features that occurred in Ember.js since version 3.15'
    );

    // Check deprecations in Ember.js
    const deprecationsInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberJS.length,
      33,
      'We see 33 deprecations that occurred in Ember.js since version 3.15'
    );

    // Check new features in Ember Data
    const newFeaturesInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberData.length,
      21,
      'We see 21 new feature that occurred in Ember Data since version 3.15'
    );

    // Check deprecations in Ember Data
    const deprecationsInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberData.length,
      18,
      'We see 18 deprecations that occurred in Ember Data since version 3.15'
    );

    // Check new features in Ember CLI
    const newFeaturesInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberCLI.length,
      74,
      'We see 74 new features that occurred in Ember CLI since version 3.15'
    );

    // Check deprecations in Ember CLI
    const deprecationsInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberCLI.length,
      10,
      'We see 10 deprecations that occurred in Ember CLI since version 3.15'
    );
  });

  test('When we visit the changes route with query parameters, we see the features and deprecations that occurred between fromVersion and toVersion', async function (assert) {
    await visit('/changes?fromVersion=2.17&toVersion=3.3');

    // Check new features in Ember.js
    const newFeaturesInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberJS.length,
      8,
      'We see 8 new features that occurred in Ember.js between 2.17 and 3.3'
    );

    // Check deprecations in Ember.js
    const deprecationsInEmberJS = findAll(
      '[data-test-package="Ember.js"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberJS.length,
      9,
      'We see 9 deprecations that occurred in Ember.js between 2.17 and 3.3'
    );

    // Check new features in Ember Data
    const newFeaturesInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberData.length,
      5,
      'We see 5 new features that occurred in Ember Data between 2.17 and 3.3'
    );

    // Check deprecations in Ember Data
    const deprecationsInEmberData = findAll(
      '[data-test-package="Ember Data"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberData.length,
      1,
      'We see 1 deprecation that occurred in Ember Data between 2.17 and 3.3'
    );

    // Check new features in Ember CLI
    const newFeaturesInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-feature]'
    );

    assert.strictEqual(
      newFeaturesInEmberCLI.length,
      2,
      'We see 2 new features that occurred in Ember CLI between 2.17 and 3.3'
    );

    // Check deprecations in Ember CLI
    const deprecationsInEmberCLI = findAll(
      '[data-test-package="Ember CLI"] [data-test-deprecation]'
    );

    assert.strictEqual(
      deprecationsInEmberCLI.length,
      1,
      'We see 1 deprecation that occurred in Ember CLI between 2.17 and 3.3'
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
