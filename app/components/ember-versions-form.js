import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from '../utils/ember-versions';

export default class EmberVersionsFormComponent extends Component {
  versions = VERSIONS;
  @tracked fromVersion = '3.15';
  @tracked toVersion = VERSIONS[VERSIONS.length - 1];

  @action submitForm(event) {
    event.preventDefault();

    const { onSubmit } = this.args;

    if (onSubmit) {
      onSubmit({
        fromVersion: this.fromVersion,
        toVersion: this.toVersion,
      });
    }
  }

  @action updateFromVersion(event) {
    this.fromVersion = event.target.value;
    this.submitForm(event);
  }

  @action updateToVersion(event) {
    this.toVersion = event.target.value;
    this.submitForm(event);
  }
}
