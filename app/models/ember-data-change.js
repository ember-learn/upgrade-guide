import Model, { attr } from '@ember-data/model';

export default class EmberDataChangeModel extends Model {
  @attr changes;

  @attr version;
}
