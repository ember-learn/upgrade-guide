import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { compare } from 'compare-versions';

export default class ListFeaturesDeprecationsComponent extends Component {
  @computed('args.{allChangeLogs,fromVersion,toVersion}')
  get relevantChangeLogs() {
    return this.args.allChangeLogs.filter((changeLog) => {
      return (
        compare(this.args.toVersion, changeLog.version, '>=') &&
        compare(this.args.fromVersion, changeLog.version, '<')
      );
    });
  }

  @computed('relevantChangeLogs')
  get countOfFeatureChanges() {
    return this.relevantChangeLogs.reduce((total = 0, item) => {
      return total + item.featuresCount;
    }, 0);
  }

  @computed('relevantChangeLogs')
  get countOfDeprecationChanges() {
    return this.relevantChangeLogs.reduce((total = 0, item) => {
      return total + item.deprecationsCount;
    }, 0);
  }

  @computed('relevantChangeLogs')
  get features() {
    return this.relevantChangeLogs.reduce((features, changeLog) => {
      const filteredChanges = changeLog.changes.reduce(
        (accumulator, currentChange) => {
          if (currentChange.feature) {
            accumulator.push({
              title: currentChange.title,
              link: currentChange.link,
              version: changeLog.version,
            });
          }
          return accumulator;
        },
        []
      );
      return features.concat(filteredChanges);
    }, []);
  }

  @computed('relevantChangeLogs')
  get deprecations() {
    return this.relevantChangeLogs.reduce((deprecations, changeLog) => {
      const filteredChanges = changeLog.changes.reduce(
        (accumulator, currentChange) => {
          if (currentChange.deprecation) {
            accumulator.push({
              title: currentChange.title,
              link: currentChange.link,
              version: changeLog.version,
            });
          }
          return accumulator;
        },
        []
      );
      return deprecations.concat(filteredChanges);
    }, []);
  }
}
