import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from 'upgrade-guide/utils/ember-versions';
import { compare } from 'compare-versions';

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

  get areVersionsValid() {
    const { fromVersion, toVersion } = this;

    if (!fromVersion || !toVersion) {
      return true;
    }

    return compare(fromVersion, toVersion, '<');
  }

  @action updateFromVersion(event) {
    this.fromVersion = event.target.value;
  }

  @action updateToVersion(event) {
    this.toVersion = event.target.value;
  }
}
