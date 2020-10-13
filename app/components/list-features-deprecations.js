import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { compare } from 'compare-versions';
import { filterBy } from '@ember/object/computed';

export default class ListFeaturesDeprecationsComponent extends Component {
  @computed('args.{allChangeLogs,fromVersion,toVersion}')
  get relevantChangeLogs() {
    const { allChangeLogs } = this.args;

    if (!allChangeLogs) {
      return [];
    }

    return allChangeLogs.filter((changeLog) => {
      return (
        compare(this.args.toVersion, changeLog.version, '>=') &&
        compare(this.args.fromVersion, changeLog.version, '<')
      );
    });
  }

  @computed('relevantChangeLogs')
  get flattenedChangeLogs() {
    return this.relevantChangeLogs.flatMap((changeLog) => {
      return changeLog.changes.map((currentChange) => {
        return {
          version: changeLog.version,
          ...currentChange,
        };
      });
    });
  }

  @filterBy('flattenedChangeLogs', 'deprecation')
  deprecations;

  @filterBy('flattenedChangeLogs', 'feature')
  features;
}
