import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class IndexRoute extends Route {
  model() {
    return hash({
      deprecations: this.store.findAll('deprecation'),
      emberCLIChanges: this.store.findAll('ember-cli-change')
    });
  }
}
