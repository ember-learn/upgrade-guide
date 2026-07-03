import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

setupDeprecationWorkflow({
  /**
    false by default, but if a developer / team wants to be more aggressive about being proactive with
    handling their deprecations, this should be set to "true"
  */
  throwOnUnhandled: false,
  workflow: [
    {
      handler: 'log',
      matchId: 'deprecate-import-test-from-ember',
    },
    {
      handler: 'log',
      matchId: 'warp-drive.deprecate-tracking-package',
    },
    {
      handler: 'log',
      matchId: 'deprecate-import--set-classic-decorator-from-ember',
    },
    {
      handler: 'log',
      matchId: 'importing-inject-from-ember-service',
    },
    {
      handler: 'log',
      matchId: 'deprecate-import--is-destroying-from-ember',
    },
    {
      handler: 'log',
      matchId: 'deprecate-import--is-destroyed-from-ember',
    },
    {
      handler: 'log',
      matchId: 'deprecate-import-destroy-from-ember',
    },
    {
      handler: 'log',
      matchId: 'deprecate-import--register-destructor-from-ember',
    },
    {
      handler: 'log',
      matchId: 'ember-data:deprecate-legacy-imports',
    },
  ],
});
