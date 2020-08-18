import Controller from '@ember/controller';
import { VERSIONS } from '../models/versions';

export default class IndexController extends Controller {
  queryParams = ['fromVersion', 'toVersion'];
  fromVersion = '3.15';
  toVersion = '3.20';
  versions = VERSIONS;
}
