import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-features-deprecations', function (
  hooks
) {
  setupRenderingTest(hooks);

  test('it filters the right changes and displays in the view', async function (assert) {
    this.datum = [
      {
        version: '3.1',
        changes: [
          {
            deprecation: true,
            title: 'First deprecation of 3.1',
          },
          {
            feature: true,
            title: 'First feature of 3.1',
          },
        ],
        featuresCount: 1,
        deprecationsCount: 1,
      },
    ];
    this.toVersion = '3.12';
    this.fromVersion = '3.0';

    await render(
      hbs`<ListFeaturesDeprecations
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
        @datum={{this.datum}} />`
    );

    assert
      .dom('[data-test-feature="3.1"]')
      .hasText('First feature of 3.1: (3.1)');
    assert.dom('[data-test-feature="3.1"] a').hasText('(3.1)');

    assert
      .dom('[data-test-deprecation="3.1"]')
      .hasText('First deprecation of 3.1: (3.1)');
    assert.dom('[data-test-deprecation="3.1"] a').hasText('(3.1)');
  });

  test('it filters the right changes and displays no data if nothing is in model', async function (assert) {
    this.datum = [
      {
        version: '2.8',
        changes: [
          {
            deprecation: true,
            title: 'First deprecation of 2.8',
          },
          {
            feature: true,
            title: 'First feature of 2.8',
          },
        ],
        featuresCount: 1,
        deprecationsCount: 1,
      },
    ];
    this.toVersion = '3.12';
    this.fromVersion = '3.0';

    await render(
      hbs`<ListFeaturesDeprecations
        @fromVersion={{this.fromVersion}}
        @toVersion={{this.toVersion}}
        @datum={{this.datum}} />`
    );

    assert.dom('[data-test-no-feature]').hasText('No new features');

    assert.dom('[data-test-no-deprecation]').hasText('No new deprecations');
  });
});
