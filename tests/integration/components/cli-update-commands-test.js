import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cli-update-commands', function (hooks) {
  setupRenderingTest(hooks);

  test('it checks if the right command is displayed', async function (assert) {
    this.toVersion = 3.14;

    await render(
      hbs`<CliUpdateCommands @toVersion={{this.toVersion}} @versions={{this.versions}} />`
    );

    assert
      .dom('[data-test-update-command=""]')
      .hasText('ember-cli-update --to 3.14');

    assert
      .dom('[data-test-update-codemod=""]')
      .hasText('ember-cli-update --run-codemods');
  });
});
