import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ember-versions-form', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a form', async function (assert) {
    await render(hbs`<EmberVersionsForm />`);

    assert
      .dom('[data-test-form="Ember Versions"]')
      .exists('We can see the form.');

    assert
      .dom('[data-test-select="From Version"]')
      .exists('We can see the select for From Version.');

    assert
      .dom('[data-test-select="To Version"]')
      .exists('We can see the select for To Version.');
  });

  test('sends the updated fromVersion when we submit form after changing fromVersion', async function (assert) {
    assert.expect(3);

    this.onSubmit = ({ fromVersion, toVersion }) => {
      assert.strictEqual(
        fromVersion,
        '2.17',
        'We get the correct value for fromVersion.'
      );

      assert.strictEqual(
        toVersion,
        '3.21',
        'We get the correct value for toVersion.'
      );
    };

    await render(hbs`
      <EmberVersionsForm
        @onSubmit={{this.onSubmit}}
      />
    `);

    await fillIn('[data-test-select="From Version"]', '2.17');

    assert
      .dom('[data-test-select="From Version"]')
      .hasValue('2.17', 'The select option shows the new value.');
  });

  test('sends the updated toVersion when we submit form after changing toVersion', async function (assert) {
    assert.expect(3);

    this.onSubmit = ({ fromVersion, toVersion }) => {
      assert.strictEqual(
        fromVersion,
        '3.15',
        'We get the correct value for fromVersion.'
      );

      assert.strictEqual(
        toVersion,
        '3.18',
        'We get the correct value for toVersion.'
      );
    };

    await render(hbs`
      <EmberVersionsForm
        @onSubmit={{this.onSubmit}}
      />
    `);

    await fillIn('[data-test-select="To Version"]', '3.18');

    assert
      .dom('[data-test-select="To Version"]')
      .hasValue('3.18', 'The select option shows the new value.');
  });
});
