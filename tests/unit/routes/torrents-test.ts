import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | torrents', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:torrents');
    assert.ok(route);
  });
});
