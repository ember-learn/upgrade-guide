import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@warp-drive/utilities/json-api';

// NOTE: The appending of '/all' to the URL used to be done by the adapter, but that is no longer
// used. So we are doing it here. The .json gets added elsewhere.
const findAllQuery = (type) => {
  const queryOptions = query(type);
  queryOptions.url = `${queryOptions.url}/all`;
  return queryOptions;
};

export default class ChangesRoute extends Route {
  @service store;

  async model() {
    const [
      emberJSChangesRequest,
      emberCLIChangesRequest,
      emberDataChangesRequest,
    ] = await Promise.all([
      this.store.request(findAllQuery('ember-js-changes')),
      this.store.request(findAllQuery('ember-cli-changes')),
      this.store.request(findAllQuery('ember-data-changes')),
    ]);
    return {
      emberJSChanges: emberJSChangesRequest.content.data,
      emberCLIChanges: emberCLIChangesRequest.content.data,
      emberDataChanges: emberDataChangesRequest.content.data,
    };
  }
}
