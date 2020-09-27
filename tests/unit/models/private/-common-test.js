import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | private/common', function (hooks) {
  setupTest(hooks);

  test('this.features returns an empty array when this.changes is null', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('private/-common', {});

    assert.deepEqual(model.features, [], 'We get the correct value.');
  });

  test("this.features returns only features when this.changes isn't null", function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('private/-common', {
      version: '3.20',
      changes: [
        {
          feature: true,
          title: '{{in-element}}',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
        {
          deprecation: true,
          title:
            'Meta.prototype.setSourceDestroyed and Meta.prototype.setSourceDestroying',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
      ],
    });

    assert.deepEqual(
      model.features,
      [
        {
          feature: true,
          title: '{{in-element}}',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
      ],
      'We get the correct value.'
    );
  });

  test('this.deprecations returns an empty array when this.changes is null', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('private/-common', {});

    assert.deepEqual(model.deprecations, [], 'We get the correct value.');
  });

  test("this.deprecations returns only deprecations when this.changes isn't null", function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('private/-common', {
      version: '3.20',
      changes: [
        {
          feature: true,
          title: '{{in-element}}',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
        {
          deprecation: true,
          title:
            'Meta.prototype.setSourceDestroyed and Meta.prototype.setSourceDestroying',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
      ],
    });

    assert.deepEqual(
      model.deprecations,
      [
        {
          deprecation: true,
          title:
            'Meta.prototype.setSourceDestroyed and Meta.prototype.setSourceDestroying',
          link: 'https://blog.emberjs.com/2020/07/29/ember-3-20-released.html',
        },
      ],
      'We get the correct value.'
    );
  });
});
