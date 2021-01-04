import Component from '@glimmer/component';
import { compare } from 'compare-versions';

export default class ListFeaturesDeprecationsComponent extends Component {
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

  get deprecations() {
    return this.flattenedChangeLogs.filter(({ deprecation }) => deprecation);
  }

  get features() {
    return this.flattenedChangeLogs.filter(({ feature }) => feature);
  }
}
