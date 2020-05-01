import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it sets the right path on findAll()', function(assert) {
    let adapter = this.owner.lookup('adapter:application');

    assert.equal(adapter.urlForFindAll('deprecation'), '/api/deprecations.json');
  });
});
