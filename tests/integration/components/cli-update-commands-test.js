import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cli-update-commands', function(hooks) {
  setupRenderingTest(hooks);

  test('it checks if the right command is displayed', async function(assert) {
    this.toVersion = 3.14;

    await render(hbs`<CliUpdateCommands @toVersion={{this.toVersion}} @versions={{this.versions}} />`);

    assert.equal(this.element.querySelectorAll('.es-codesample')[0].textContent.trim(), 'ember-cli-update --to 3.14');
    assert.equal(this.element.querySelectorAll('.es-codesample')[1].textContent.trim(), 'ember-cli-update --run-codemods');
  });
});
