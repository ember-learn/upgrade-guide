import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | index", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");

    assert.dom("h1").hasText("Upgrade Guide");
  });

  test("Two dropdowns exist", async function(assert) {
    await visit("/");
    assert
      .dom(".ember-basic-dropdown-content-placeholder")
      .exists({ count: 2 });
  });

  test("Query params render", async function(assert) {
    await visit("/?fromVersion=3.14&toVersion=3.16");

    assert.equal(currentURL(), "/?fromVersion=3.14&toVersion=3.16");

    assert.dom("span:first-of-type").hasText("3.14");
  });
});
