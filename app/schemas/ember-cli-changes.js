import { withDefaults } from '@warp-drive/legacy/model/migration-support';

export const EmberCliChangesSchema = withDefaults({
  type: 'ember-cli-changes',
  // all the fields are in the shared md-common trait
  fields: [],
  traits: ['md-common'],
});

export default EmberCliChangesSchema;
