import Model, { attr } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class CommonModel extends Model {
  @attr changes;

  @attr version;

  @tracked
  featuresCount = this.changes.filterBy('feature').length;

  @tracked
  deprecationsCount = this.changes.filterBy('deprecation').length;
}
