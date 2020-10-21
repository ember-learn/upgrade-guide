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

  test('selecting and changing fromVersion and toVersion', async function (assert) {
    assert.expect(2);

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

    await fillIn('[data-test-select="From Version"]', '3.15');

    await fillIn('[data-test-select="To Version"]', '3.18');

    assert
      .dom('[data-test-select="From Version"]')
      .hasValue('3.15', 'The select option shows the new value.');

    assert
      .dom('[data-test-select="To Version"]')
      .hasValue('3.18', 'The select option shows the new value.');
  });
});
