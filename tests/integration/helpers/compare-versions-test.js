import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | compare-versions', function (hooks) {
  setupRenderingTest(hooks);

  test('it validates if base version is <= target version without passing operator', async function (assert) {
    this.set('baseVersion', '1.0');
    this.set('toVersion', '3.0');

    await render(hbs`{{compare-versions this.baseVersion this.toVersion}}`);

    assert.equal(this.element.textContent.trim(), 'true');

    this.set('baseVersion', '3.0');
    this.set('toVersion', '1.0');

    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it validates if base version is > target version with passing operator', async function (assert) {
    this.baseVersion = '3.0';
    this.toVersion = '1.0';
    this.operator = '>';

    await render(
      hbs`{{compare-versions this.baseVersion this.toVersion this.operator}}`
    );

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
