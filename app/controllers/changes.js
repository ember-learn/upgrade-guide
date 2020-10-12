import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from 'upgrade-guide/utils/ember-versions';

export default class ChangesController extends Controller {
  queryParams = ['fromVersion', 'toVersion'];

  @tracked fromVersion = '3.15';
  @tracked toVersion = VERSIONS[VERSIONS.length - 1];
}
