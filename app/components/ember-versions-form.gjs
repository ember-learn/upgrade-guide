import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from 'upgrade-guide/utils/ember-versions';
import { compare } from 'compare-versions';
import '../styles/ember-versions-form.css';

// Group the versions by major so we can display option groups.
const GROUPED_VERSIONS = VERSIONS.reduce((acc, version) => {
  const major = version.split('.')[0];
  let group = acc.find((g) => g.major === major);
  if (!group) {
    group = { major, versions: [] };
    acc.push(group);
  }
  group.versions.push(version);
  return acc;
}, []);

export default class EmberVersionsFormComponent extends Component {
  versions = VERSIONS;
  groupedVersions = GROUPED_VERSIONS;
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
