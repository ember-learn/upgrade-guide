import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-features-deprecations', function (
  hooks
) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // TODO:: Write tests
    await render(hbs`<ListFeaturesDeprecations />`);

    assert.notEqual(this.element.textContent.trim(), '');
  });
});
