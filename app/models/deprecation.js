import Model, { attr } from '@ember-data/model';

export default class DeprecationModel extends Model {
  @attr link;

  @attr title;

  @attr version;
}
