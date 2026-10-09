// All the schemas & traits

import { EmberCliChangesSchema } from './ember-cli-changes';
import { EmberDataChangesSchema } from './ember-data-changes';
import { EmberJsChangesSchema } from './ember-js-changes';
import { MdCommon } from './traits/md-common';

export const ALL_SCHEMAS = [
  EmberCliChangesSchema,
  EmberDataChangesSchema,
  EmberJsChangesSchema,
];

export const ALL_TRAITS = [MdCommon];
