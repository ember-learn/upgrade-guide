import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from '../models/versions';

export default class IndexController extends Controller {
  queryParams = ['fromVersion', 'toVersion'];

  versions = VERSIONS;
  @tracked fromVersion = '3.15';
  @tracked toVersion = VERSIONS[VERSIONS.length - 1];
}
