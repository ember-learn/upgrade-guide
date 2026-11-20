import { withDefaults } from '@warp-drive/legacy/model/migration-support';

export const EmberJsChangesSchema = withDefaults({
  type: 'ember-js-changes',
  // all the fields are in the shared md-common trait
  fields: [],
  traits: ['md-common'],
});

export default EmberJsChangesSchema;
