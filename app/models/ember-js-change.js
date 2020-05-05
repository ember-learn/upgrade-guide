import Model, { attr } from '@ember-data/model';

export default class DeprecationModel extends Model {
  @attr changes;

  @attr version;
}
