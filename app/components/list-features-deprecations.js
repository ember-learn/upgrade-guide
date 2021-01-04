import Component from '@glimmer/component';
import { createCache, getValue } from '@glimmer/tracking/primitives/cache';
import { compare } from 'compare-versions';

export default class ListFeaturesDeprecationsComponent extends Component {
  #relevantChangeLogs = createCache(() => {
    const allChangeLogs = this.args.allChangeLogs ?? [];

    return allChangeLogs.filter((changeLog) => {
      return (
        compare(this.args.toVersion, changeLog.version, '>=') &&
        compare(this.args.fromVersion, changeLog.version, '<')
      );
    });
  });

  get relevantChangeLogs() {
    return getValue(this.#relevantChangeLogs);
  }

  #flattenedChangeLogs = createCache(() => {
    return this.relevantChangeLogs.flatMap((changeLog) => {
      return changeLog.changes.map((currentChange) => {
        return {
          version: changeLog.version,
          ...currentChange,
        };
      });
    });
  });

  get flattenedChangeLogs() {
    return getValue(this.#flattenedChangeLogs);
  }

  get deprecations() {
    return this.flattenedChangeLogs.filter(({ deprecation }) => deprecation);
  }

  get features() {
    return this.flattenedChangeLogs.filter(({ feature }) => feature);
  }
}
