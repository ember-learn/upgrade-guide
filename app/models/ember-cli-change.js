import Model, { attr } from '@ember-data/model';

export default class EmberCliModel extends Model {
  @attr changes;

  @attr version;
}
