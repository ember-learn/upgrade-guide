import { module, test } from 'qunit';
import { currentURL, fillIn, findAll, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupFeatureAndDeprecationAssertions from 'upgrade-guide/tests/helpers/features-deprecations';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupFeatureAndDeprecationAssertions(hooks);

  test('When we visit the index route, we see the form for selecting Ember versions', async function (assert) {
    await visit('/');

    assert
      .dom('[data-test-form="Ember Versions"]')
      .exists({ count: 1 }, 'We see the form for selecting Ember versions.');
  });

  // TODO: Update the form and routing so that the URL does NOT change.
  test('When we select Ember versions, the URL includes fromVersion and toVersion as query parameters', async function (assert) {
    await visit('/');
    await fillIn('[data-test-select="From Version"]', '2.17');
    await fillIn('[data-test-select="To Version"]', '3.3');

    assert.strictEqual(
      currentURL(),
      '/?fromVersion=2.17&toVersion=3.3',
      'We see the correct URL.'
    );
  });

  test('When we submit the form, we see the features and deprecations that occurred', async function (assert) {
    await visit('/');
    await fillIn('[data-test-select="From Version"]', '2.17');
    await fillIn('[data-test-select="To Version"]', '3.3');

    // Check Ember.js
    let features = findAll(
      '[data-test-package="Ember.js"] [data-test-feature]'
    );
    let deprecations = findAll(
      '[data-test-package="Ember.js"] [data-test-deprecation]'
    );

    assert.strictEqual(
      features.length,
      8,
      'We see that 8 features were added to Ember.js between 2.17 and 3.3.'
    );

    assert.isFeatureCorrect(features[0], {
      link: 'https://blog.emberjs.com/2018/02/14/ember-3-0-released.html',
      title: 'Updates to the Testing Defaults',
      version: '3.0',
    });

    assert.isFeatureCorrect(features[features.length - 1], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'Block let template helper',
      version: '3.2',
    });

    assert.strictEqual(
      deprecations.length,
      9,
      'We see that 9 deprecations were added to Ember.js between 2.17 and 3.3.'
    );

    assert.isDeprecationCorrect(deprecations[0], {
      link: 'https://blog.emberjs.com/2018/01/01/ember-2-18-released.html',
      title: 'targetObject',
      version: '2.18',
    });

    assert.isDeprecationCorrect(deprecations[deprecations.length - 1], {
      link: 'https://blog.emberjs.com/2018/07/16/ember-3-3-released.html',
      title: 'Deprecation of copy/copyable',
      version: '3.3',
    });

    // Check Ember Data
    features = findAll('[data-test-package="Ember Data"] [data-test-feature]');
    deprecations = findAll(
      '[data-test-package="Ember Data"] [data-test-deprecation]'
    );

    assert.strictEqual(
      features.length,
      5,
      'We see that 5 features were added to Ember Data between 2.17 and 3.3.'
    );

    assert.isFeatureCorrect(features[0], {
      link: 'https://blog.emberjs.com/2018/04/13/ember-3-1-released.html',
      title: 'client-side-delete semantics unloadRecord',
      version: '3.1',
    });

    assert.isFeatureCorrect(features[features.length - 1], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'Feature Flag ds-pushpayload-return',
      version: '3.2',
    });

    assert.strictEqual(
      deprecations.length,
      1,
      'We see that 1 deprecation was added to Ember Data between 2.17 and 3.3.'
    );

    assert.isDeprecationCorrect(deprecations[0], {
      link: 'https://blog.emberjs.com/2018/04/13/ember-3-1-released.html',
      title: 'Ember.Map',
      version: '3.1',
    });

    assert.isDeprecationCorrect(deprecations[deprecations.length - 1], {
      link: 'https://blog.emberjs.com/2018/04/13/ember-3-1-released.html',
      title: 'Ember.Map',
      version: '3.1',
    });

    // Check Ember CLI
    features = findAll('[data-test-package="Ember CLI"] [data-test-feature]');
    deprecations = findAll(
      '[data-test-package="Ember CLI"] [data-test-deprecation]'
    );

    assert.strictEqual(
      features.length,
      2,
      'We see that 2 features were added to Ember CLI between 2.17 and 3.3.'
    );

    assert.isFeatureCorrect(features[0], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'qunit-dom',
      version: '3.2',
    });

    assert.isFeatureCorrect(features[features.length - 1], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'Update ember-cli-qunit dependency',
      version: '3.2',
    });

    assert.strictEqual(
      deprecations.length,
      1,
      'We see that 1 deprecation was added to Ember CLI between 2.17 and 3.3.'
    );

    assert.isDeprecationCorrect(deprecations[0], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'ember-cli-babel 5',
      version: '3.2',
    });

    assert.isDeprecationCorrect(deprecations[deprecations.length - 1], {
      link: 'https://blog.emberjs.com/2018/07/02/ember-3-2-released.html',
      title: 'ember-cli-babel 5',
      version: '3.2',
    });
  });
});
