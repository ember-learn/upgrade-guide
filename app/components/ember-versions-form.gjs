import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { VERSIONS } from 'upgrade-guide/utils/ember-versions';
import { compare } from 'compare-versions';
import { on } from '@ember/modifier';
import { concat } from '@ember/helper';
import eq from 'ember-truth-helpers/helpers/equal';
import EsButton from 'ember-styleguide/components/es-button';
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
  <template>
    <form
      class="ember-versions-form"
      data-test-form="Ember Versions"
      {{on "submit" this.submitForm}}
    >
      <div class="mb-3">
        <label for="from-version">From version</label>

        <select
          data-test-select="From Version"
          id="from-version"
          {{on "input" this.updateFromVersion}}
        >
          {{#each this.groupedVersions as |versionGroup|}}
            <optgroup label={{concat "v" versionGroup.major ".x"}}>
              <legend>{{versionGroup.major}}.x Versions</legend>
              {{#each versionGroup.versions as |version|}}
                <option
                  selected={{eq version this.fromVersion}}
                  value={{version}}
                >
                  {{version}}
                </option>
              {{/each}}
            </optgroup>
          {{/each}}
        </select>
      </div>

      <div>
        <label for="to-version">To version</label>

        <select
          data-test-select="To Version"
          id="to-version"
          {{on "input" this.updateToVersion}}
        >
          {{#each this.groupedVersions as |versionGroup|}}
            <optgroup label={{concat "v" versionGroup.major ".x"}}>
              <legend>{{versionGroup.major}}.x Versions</legend>
              {{#each versionGroup.versions as |version|}}
                <option
                  selected={{eq version this.toVersion}}
                  value={{version}}
                >
                  {{version}}
                </option>
              {{/each}}
            </optgroup>
          {{/each}}
        </select>
      </div>

      <EsButton
        @type="submit"
        data-test-button="Find Changes"
        disabled={{unless this.areVersionsValid true}}
        @label="Find Changes"
        class="mt-2"
      />

      {{#unless this.areVersionsValid}}
        <div role="alert" class="well mt-2 p-2">
          To version should be higher than From version
        </div>
      {{/unless}}
    </form>
  </template>
}
