import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | list-features-deprecations',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
      this.allChangeLogs = [
        {
          version: '2.18',
          changes: [
            {
              feature: true,
              title: 'Feature #1',
            },
            {
              deprecation: true,
              title: 'Deprecation #1',
            },
            {
              deprecation: true,
              title: 'Deprecation #2',
            },
          ],
        },
        {
          version: '3.0',
          changes: [],
        },
        {
          version: '3.1',
          changes: [
            {
              feature: true,
              title: 'Feature #1',
            },
            {
              feature: true,
              title: 'Feature #2',
            },
            {
              deprecation: true,
              title: 'Deprecation #1',
            },
          ],
        },
        {
          version: '3.2',
          changes: [
            {
              feature: true,
              title: 'Feature #1',
            },
          ],
        },
        {
          version: '3.3',
          changes: [
            {
              deprecation: true,
              title: 'Deprecation #1',
            },
          ],
        },
      ];
    });

    test('only shows changes that occurred between fromVersion and toVersion (1)', async function (assert) {
      // Case 1: All changes occurred between fromVersion and toVersion
      this.fromVersion = '2.17';
      this.toVersion = '3.3';

      await render(hbs`
      <ListFeaturesDeprecations
        @allChangeLogs={{this.allChangeLogs}}
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
      />
    `);

      // Check features
      const features = findAll('[data-test-feature]');

      assert.strictEqual(
        features.length,
        4,
        `We see that 4 features were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(features[0])
        .hasText(
          'Feature #1 (2.18)',
          'We see the correct title for the 1st feature.'
        );

      assert
        .dom(features[1])
        .hasText(
          'Feature #1 (3.1)',
          'We see the correct title for the 2nd feature.'
        );

      assert
        .dom(features[2])
        .hasText(
          'Feature #2 (3.1)',
          'We see the correct title for the 3rd feature.'
        );

      assert
        .dom(features[3])
        .hasText(
          'Feature #1 (3.2)',
          'We see the correct title for the 4th feature.'
        );

      // Check deprecations
      const deprecations = findAll('[data-test-deprecation]');

      assert.strictEqual(
        deprecations.length,
        4,
        `We see that 4 deprecations were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(deprecations[0])
        .hasText(
          'Deprecation #1 (2.18)',
          'We see the correct title for the 1st deprecation.'
        );

      assert
        .dom(deprecations[1])
        .hasText(
          'Deprecation #2 (2.18)',
          'We see the correct title for the 2nd deprecation.'
        );

      assert
        .dom(deprecations[2])
        .hasText(
          'Deprecation #1 (3.1)',
          'We see the correct title for the 3rd deprecation.'
        );

      assert
        .dom(deprecations[3])
        .hasText(
          'Deprecation #1 (3.3)',
          'We see the correct title for the 4th deprecation.'
        );
    });

    test('only shows changes that occurred between fromVersion and toVersion (2)', async function (assert) {
      // Case 2: Some changes occurred before fromVersion
      this.fromVersion = '3.1';
      this.toVersion = '3.3';

      await render(hbs`
      <ListFeaturesDeprecations
        @allChangeLogs={{this.allChangeLogs}}
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
      />
    `);

      // Check features
      const features = findAll('[data-test-feature]');

      assert.strictEqual(
        features.length,
        1,
        `We see that 1 feature was added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(features[0])
        .hasText(
          'Feature #1 (3.2)',
          'We see the correct title for the 1st feature.'
        );

      // Check deprecations
      const deprecations = findAll('[data-test-deprecation]');

      assert.strictEqual(
        deprecations.length,
        1,
        `We see that 1 deprecation was added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(deprecations[0])
        .hasText(
          'Deprecation #1 (3.3)',
          'We see the correct title for the 1st deprecation.'
        );
    });

    test('only shows changes that occurred between fromVersion and toVersion (3)', async function (assert) {
      // Case 3: Some changes occurred after toVersion
      this.fromVersion = '2.17';
      this.toVersion = '3.1';

      await render(hbs`
      <ListFeaturesDeprecations
        @allChangeLogs={{this.allChangeLogs}}
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
      />
    `);

      // Check features
      const features = findAll('[data-test-feature]');

      assert.strictEqual(
        features.length,
        3,
        `We see that 3 features were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(features[0])
        .hasText(
          'Feature #1 (2.18)',
          'We see the correct title for the 1st feature.'
        );

      assert
        .dom(features[1])
        .hasText(
          'Feature #1 (3.1)',
          'We see the correct title for the 2nd feature.'
        );

      assert
        .dom(features[2])
        .hasText(
          'Feature #2 (3.1)',
          'We see the correct title for the 3rd feature.'
        );

      // Check deprecations
      const deprecations = findAll('[data-test-deprecation]');

      assert.strictEqual(
        deprecations.length,
        3,
        `We see that 3 deprecations were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      assert
        .dom(deprecations[0])
        .hasText(
          'Deprecation #1 (2.18)',
          'We see the correct title for the 1st deprecation.'
        );

      assert
        .dom(deprecations[1])
        .hasText(
          'Deprecation #2 (2.18)',
          'We see the correct title for the 2nd deprecation.'
        );

      assert
        .dom(deprecations[2])
        .hasText(
          'Deprecation #1 (3.1)',
          'We see the correct title for the 3rd deprecation.'
        );
    });

    test('only shows changes that occurred between fromVersion and toVersion (4)', async function (assert) {
      // Case 4: No changes occurred between fromVersion and toVersion
      this.fromVersion = '3.3';
      this.toVersion = '3.8';

      await render(hbs`
      <ListFeaturesDeprecations
        @allChangeLogs={{this.allChangeLogs}}
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
      />
    `);

      // Check features
      const features = findAll('[data-test-feature]');

      assert.strictEqual(
        features.length,
        0,
        `We see that 0 features were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );

      // Check deprecations
      const deprecations = findAll('[data-test-deprecation]');

      assert.strictEqual(
        deprecations.length,
        0,
        `We see that 0 deprecations were added between versions ${this.fromVersion} and ${this.toVersion}.`
      );
    });
  }
);
