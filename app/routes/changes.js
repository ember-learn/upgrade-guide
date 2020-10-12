import Route from '@ember/routing/route';
import { hash } from 'rsvp';
export default class ChangesRoute extends Route {
  model() {
    return hash({
      emberJSChanges: this.store.findAll('ember-js-change'),
      emberCLIChanges: this.store.findAll('ember-cli-change'),
      emberDataChanges: this.store.findAll('ember-data-change'),
    });
  }
}
