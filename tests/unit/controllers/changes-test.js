import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | changes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:changes');
    assert.ok(controller);
  });
});
