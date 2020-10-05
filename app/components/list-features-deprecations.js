import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { compare } from 'compare-versions';

export default class ListFeaturesDeprecationsComponent extends Component {
  @computed('args.{allChangeLogs,fromVersion,toVersion}')
  get model() {
    return this.args.allChangeLogs.filter((model) => {
      return (
        compare(this.args.toVersion, model.version, '>=') &&
        compare(this.args.fromVersion, model.version, '<')
      );
    });
  }

  @computed('model')
  get countOfFeatureChanges() {
    return this.model.reduce((total = 0, item) => {
      return total + item.featuresCount;
    }, 0);
  }

  @computed('model')
  get countOfDeprecationChanges() {
    return this.model.reduce((total = 0, item) => {
      return total + item.deprecationsCount;
    }, 0);
  }
}
