export default function setupFeatureAndDeprecationAssertions(hooks) {
  hooks.beforeEach(setupCustomAssertions);
  hooks.afterEach(cleanupCustomAssertions);
}

function setupCustomAssertions(assert) {
  assert.isFeatureCorrect = (feature, expectedValues) => {
    const { link, title, version } = expectedValues;

    assert
      .dom('[data-test-field="Title"]', feature)
      .hasText(title, `We see the correct text for the feature title.`);

    assert
      .dom('[data-test-field="Version"]', feature)
      .hasAttribute(
        'href',
        link,
        'We see the correct URL for the feature version.',
      )
      .hasText(
        `(${version})`,
        'We see the correct text for the feature version.',
      );
  };

  assert.isDeprecationCorrect = (deprecation, expectedValues) => {
    const { link, title, version } = expectedValues;

    assert
      .dom('[data-test-field="Title"]', deprecation)
      .hasText(title, `We see the correct text for the deprecation title.`);

    assert
      .dom('[data-test-field="Version"]', deprecation)
      .hasAttribute(
        'href',
        link,
        'We see the correct URL for the deprecation version.',
      )
      .hasText(
        `(${version})`,
        'We see the correct text for the deprecation version.',
      );
  };
}

function cleanupCustomAssertions(assert) {
  delete assert.isFeatureCorrect;
  delete assert.isDeprecationCorrect;
}
