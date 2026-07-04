import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cli-update-commands', function (hooks) {
  setupRenderingTest(hooks);

  test('it checks if the right command is displayed', async function (assert) {
    this.toVersion = 3.14;

    await render(hbs`
      <CliUpdateCommands
        @toVersion={{this.toVersion}}
      />
    `);

    assert
      .dom('[data-test-command="Ember CLI Update"]')
      .hasText(
        'ember-cli-update --to 3.14',
        'We see the correct command for running ember-cli-update.',
      );

    assert
      .dom('[data-test-command="Run Codemods"]')
      .hasText(
        'ember-cli-update --run-codemods',
        'We see the correct command for running codemods.',
      );
  });
});
