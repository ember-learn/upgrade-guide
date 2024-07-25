import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class ChangesRoute extends Route {
  @service store;

  model() {
    return hash({
      emberJSChanges: this.store.findAll('ember-js-change'),
      emberCLIChanges: this.store.findAll('ember-cli-change'),
      emberDataChanges: this.store.findAll('ember-data-change'),
    });
  }
}
