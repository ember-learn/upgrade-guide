import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from 'upgrade-guide/utils/ember-versions';

export default class IndexController extends Controller {
  queryParams = ['fromVersion', 'toVersion'];

  versions = VERSIONS;
  @tracked fromVersion = '3.15';
  @tracked toVersion = VERSIONS[VERSIONS.length - 1];

  @action doNotSubmitForm(event) {
    event.preventDefault();
  }

  @action updateFromVersion(event) {
    this.fromVersion = event.target.value;
  }

  @action updateToVersion(event) {
    this.toVersion = event.target.value;
  }
}
