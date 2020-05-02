import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-feature-deprecation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // TODO:: Write tests
    await render(hbs`<ListFeatureDeprecation />`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
